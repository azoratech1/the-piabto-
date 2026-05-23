import Homepage from "../models/Homepage.js";


/* =========================
   SAFE PARSE HELPER
========================= */

const safeParse = (
  data,
  fallback
) => {

  if (!data) {
    return fallback;
  }

  return typeof data === "string"
    ? JSON.parse(data)
    : data;
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

      res.status(200).json({

        success: true,

        homepage,
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

        floors,

        reviews,

      } = req.body;


      /* =========================
         SAFE PARSE
      ========================= */

      const parsedHero =
        safeParse(hero, {});

      const parsedAbout =
        safeParse(about, {});

      const parsedAmenities =
        safeParse(
          amenities,
          []
        );

      const parsedFloors =
        safeParse(
          floors,
          []
        );

      const parsedReviews =
        safeParse(
          reviews,
          []
        );


      /* =========================
         HERO IMAGE
      ========================= */

      if (
        req.files?.heroImage?.[0]
      ) {

        parsedHero.image = {

          data:
            req.files
              .heroImage[0]
              .buffer,

          contentType:
            req.files
              .heroImage[0]
              .mimetype,
        };
      }


      /* =========================
         ABOUT IMAGE
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
         FLOOR IMAGES
      ========================= */

      if (
        req.files?.floorImages
          ?.length
      ) {

        parsedFloors.forEach(
          (
            floor,
            index
          ) => {

            const imageFile =
              req.files
                .floorImages[
                index
              ];

            if (imageFile) {

              floor.image = {

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
         UPDATE OBJECT
      ========================= */

      const updateData = {

        hero: parsedHero,

        about:
          parsedAbout,

        amenities:
          parsedAmenities,

        floors:
          parsedFloors,

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
        id,
        index,
      } = req.params;

      const homepage =
        await Homepage.findOne();

      if (!homepage) {

        return res
          .status(404)
          .send("Homepage not found");
      }

      let image;

      // HERO
      if (type === "hero") {

        image =
          homepage.hero?.image;
      }

      // ABOUT
      else if (
        type === "about"
      ) {

        image =
          homepage.about?.image;
      }

      // FLOOR
      else if (
        type === "floor"
      ) {

        image =
          homepage.floors?.[
            index
          ]?.image;
      }

      if (
        !image?.data
      ) {

        return res
          .status(404)
          .send("Image not found");
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