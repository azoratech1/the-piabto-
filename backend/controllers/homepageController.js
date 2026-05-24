import Homepage from "../models/Homepage.js";

/* =========================
   SAFE PARSE HELPER
========================= */

const safeParse = (
  data,
  fallback
) => {
  try {
    if (!data) {
      return fallback;
    }

    return typeof data === "string"
      ? JSON.parse(data)
      : data;
  } catch (error) {
    return fallback;
  }
};

/* =========================
   GET HOMEPAGE
========================= */

export const getHomepage =
  async (req, res) => {
    try {
      let homepage =
        await Homepage.findOne();

      // CREATE EMPTY DOC
      if (!homepage) {
        homepage =
          await Homepage.create({});
      }

      /* =========================
         ADD IMAGE URLS
      ========================= */

      const hero =
        homepage.hero?.map(
          (slide, index) => ({
            ...slide.toObject(),

            imageUrl:
              `${req.protocol}://${req.get(
                "host"
              )}/api/homepage/image/hero/${index}`,
          })
        ) || [];

      const about = {
        ...homepage.about?.toObject(),

        imageUrl:
          `${req.protocol}://${req.get(
            "host"
          )}/api/homepage/image/about`,
      };

      res.status(200).json({
        success: true,

        homepage: {
          ...homepage.toObject(),

          hero,

          about,
        },
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  };

/* =========================
   UPDATE HOMEPAGE
========================= */

export const updateHomepage =
  async (req, res) => {
    try {
      let homepage =
        await Homepage.findOne();

      const {
        hero,
        about,
        amenities,
        reviews,
      } = req.body;

      /* =========================
         SAFE PARSE
      ========================= */

      let parsedHero =
        safeParse(hero, []);

      let parsedAbout =
        safeParse(about, {});

      const parsedAmenities =
        safeParse(
          amenities,
          []
        );

      const parsedReviews =
        safeParse(
          reviews,
          []
        );

      /* =========================
         CLEAN HERO DATA
      ========================= */

      parsedHero =
        parsedHero.map(
          (slide) => ({
            subtitle:
              slide.subtitle || "",

            title:
              slide.title || "",

            description:
              slide.description ||
              "",

            buttonText:
              slide.buttonText ||
              "",

            buttonLink:
              slide.buttonLink ||
              "",

            showButton:
              slide.showButton,

            showVideoButton:
              slide.showVideoButton,

            videoText:
              slide.videoText ||
              "",

            videoUrl:
              slide.videoUrl ||
              "",
          })
        );

      /* =========================
         KEEP OLD HERO IMAGES
      ========================= */

      if (
        homepage?.hero?.length
      ) {
        parsedHero.forEach(
          (
            item,
            index
          ) => {
            if (
              homepage.hero[
                index
              ]?.image
            ) {
              item.image =
                homepage.hero[
                  index
                ].image;
            }
          }
        );
      }

      /* =========================
         NEW HERO IMAGES
      ========================= */

      if (
        req.files?.heroImages
          ?.length
      ) {
        parsedHero.forEach(
          (
            item,
            index
          ) => {
            const imageFile =
              req.files
                .heroImages[
                index
              ];

            if (imageFile) {
              item.image = {
                data:
                  imageFile.buffer,

                contentType:
                  imageFile.mimetype,
              };
            }
          }
        );
      }

      /* =========================
         KEEP OLD ABOUT IMAGE
      ========================= */

      if (
        homepage?.about?.image
      ) {
        parsedAbout.image =
          homepage.about.image;
      }

      /* =========================
         NEW ABOUT IMAGE
      ========================= */

      if (
        req.files?.aboutImage?.[0]
      ) {
        parsedAbout.image = {
          data:
            req.files
              .aboutImage[0]
              .buffer,

          contentType:
            req.files
              .aboutImage[0]
              .mimetype,
        };
      }

      /* =========================
         UPDATE OBJECT
      ========================= */

      const updateData = {
        hero: parsedHero,

        about:
          parsedAbout,

        amenities:
          parsedAmenities,

        reviews:
          parsedReviews,
      };

      /* =========================
         CREATE / UPDATE
      ========================= */

      if (!homepage) {
        homepage =
          await Homepage.create(
            updateData
          );
      } else {
        homepage =
          await Homepage.findByIdAndUpdate(
            homepage._id,

            updateData,

            {
              new: true,

              runValidators: true,
            }
          );
      }

      res.status(200).json({
        success: true,

        message:
          "Homepage Updated Successfully",

        homepage,
      });
    } catch (error) {
      console.log(
        "Homepage Update Error:",
        error
      );

      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  };

/* =========================
   GET HOMEPAGE IMAGE
========================= */

export const getHomepageImage =
  async (req, res) => {
    try {
      const {
        type,
        index,
      } = req.params;

      const homepage =
        await Homepage.findOne();

      if (!homepage) {
        return res
          .status(404)
          .send(
            "Homepage not found"
          );
      }

      let image;

      /* =========================
         HERO IMAGE
      ========================= */

      if (type === "hero") {
        image =
          homepage.hero?.[
            index
          ]?.image;
      }

      /* =========================
         ABOUT IMAGE
      ========================= */

      else if (
        type === "about"
      ) {
        image =
          homepage.about?.image;
      }

      if (
        !image?.data
      ) {
        return res
          .status(404)
          .send(
            "Image not found"
          );
      }

      res.set(
        "Content-Type",
        image.contentType
      );

      return res.send(
        image.data
      );
    } catch (error) {
      console.log(error);

      res.status(500).send(
        error.message
      );
    }
  };