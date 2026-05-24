import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import {
  getHomepage,
  updateHomepage,
} from "../services/api";

import {
  Plus,
  Trash2,
} from "lucide-react";

const EditHomepage = () => {
  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  /* =========================
     HERO SLIDES
  ========================= */

  const [heroSlides, setHeroSlides] =
    useState([]);

  const [heroImages, setHeroImages] =
    useState([]);

  /* =========================
     ABOUT
  ========================= */

  const [about, setAbout] =
    useState({
      title: "",
      description: "",
    });

  const [aboutImage, setAboutImage] =
    useState(null);

  /* =========================
     AMENITIES
  ========================= */

  const [amenities, setAmenities] =
    useState([]);

  /* =========================
     REVIEWS
  ========================= */

  const [reviews, setReviews] =
    useState([]);

  /* =========================
     FETCH HOMEPAGE
  ========================= */

  const fetchHomepage =
    async () => {
      try {
        const { data } =
          await getHomepage();

        const homepage =
          data.homepage;

        if (homepage) {
       const updatedHero =
  (homepage.hero || []).map(
    (slide, index) => ({
      ...slide,

      imageUrl:
        `http://localhost:5000/api/homepage/image/hero/${index}`,
    })
  );

setHeroSlides(updatedHero);

          setAbout(
            homepage.about || {}
          );

          setAmenities(
            homepage.amenities || []
          );

          setReviews(
            homepage.reviews || []
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchHomepage();
  }, []);

  /* =========================
     HERO HANDLERS
  ========================= */

  const addHeroSlide = () => {
    setHeroSlides([
      ...heroSlides,
      {
        subtitle: "",
        title: "",
        description: "",

        buttonText:
          "Explore The Estate",

        buttonLink: "/rooms",

        showButton: true,

        showVideoButton: false,

        videoText:
          "Watch Video",

        videoUrl: "",
      },
    ]);
  };

  const removeHeroSlide = (
    index
  ) => {
    const updated =
      heroSlides.filter(
        (_, i) => i !== index
      );

    setHeroSlides(updated);
  };

  const handleHeroChange = (
    index,
    field,
    value
  ) => {
    const updated = [
      ...heroSlides,
    ];

    updated[index][field] =
      value;

    setHeroSlides(updated);
  };

  const handleHeroImageChange = (
    index,
    file
  ) => {
    const updated = [
      ...heroImages,
    ];

    updated[index] = file;

    setHeroImages(updated);
  };

  /* =========================
     ABOUT
  ========================= */

  const handleAboutChange = (
    e
  ) => {
    setAbout({
      ...about,
      [e.target.name]:
        e.target.value,
    });
  };

  /* =========================
     REVIEWS
  ========================= */

  const addReview = () => {
    setReviews([
      ...reviews,
      {
        name: "",
        location: "",
        review: "",
        rating: 5,
      },
    ]);
  };

  const removeReview = (
    index
  ) => {
    const updated =
      reviews.filter(
        (_, i) => i !== index
      );

    setReviews(updated);
  };

  const handleReviewChange = (
    index,
    field,
    value
  ) => {
    const updated = [
      ...reviews,
    ];

    updated[index][field] =
      value;

    setReviews(updated);
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        setSubmitting(true);

        const formData =
          new FormData();

        /* HERO */
        formData.append(
          "hero",
          JSON.stringify(
            heroSlides
          )
        );

        heroImages.forEach(
          (image) => {
            if (image) {
              formData.append(
                "heroImages",
                image
              );
            }
          }
        );

        /* ABOUT */
        formData.append(
          "about",
          JSON.stringify(about)
        );

        if (aboutImage) {
          formData.append(
            "aboutImage",
            aboutImage
          );
        }

        /* AMENITIES */
        formData.append(
          "amenities",
          JSON.stringify(
            amenities
          )
        );

        /* REVIEWS */
        formData.append(
          "reviews",
          JSON.stringify(reviews)
        );

        await updateHomepage(
          formData
        );

        toast.success(
          "Homepage Updated"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          error?.response?.data
            ?.message ||
            "Update Failed"
        );
      } finally {
        setSubmitting(false);
      }
    };

  if (loading) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Edit Homepage
        </h1>

        <p className="text-slate-500 mt-2">
          Manage homepage content
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* HERO SECTION */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Hero Slider
            </h2>

            <button
              type="button"
              onClick={
                addHeroSlide
              }
              className="bg-black text-white px-5 h-[46px] rounded-xl flex items-center gap-2"
            >
              <Plus size={18} />
              Add Slide
            </button>
          </div>

          <div className="space-y-8">
            {heroSlides.map(
              (
                slide,
                index
              ) => (
                <div
                  key={index}
                  className="border rounded-3xl p-6 space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      Slide{" "}
                      {index + 1}
                    </h3>

                    <button
                      type="button"
                      onClick={() =>
                        removeHeroSlide(
                          index
                        )
                      }
                      className="text-red-500 flex items-center gap-2"
                    >
                      <Trash2
                        size={18}
                      />
                      Remove
                    </button>
                  </div>
{slide.imageUrl && (

  <img
    src={slide.imageUrl}
    alt="Hero"
    className="
      w-full
      h-[250px]
      object-cover
      rounded-2xl
      mb-5
    "
  />

)}
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Subtitle"
                      value={
                        slide.subtitle
                      }
                      onChange={(
                        e
                      ) =>
                        handleHeroChange(
                          index,
                          "subtitle",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />

                    <input
                      type="text"
                      placeholder="Title"
                      value={
                        slide.title
                      }
                      onChange={(
                        e
                      ) =>
                        handleHeroChange(
                          index,
                          "title",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Description"
                    value={
                      slide.description
                    }
                    onChange={(e) =>
                      handleHeroChange(
                        index,
                        "description",
                        e.target
                          .value
                      )
                    }
                    className="w-full border rounded-xl p-4"
                  />

                  {/* BUTTON SETTINGS */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Button Text"
                      value={
                        slide.buttonText
                      }
                      onChange={(e) =>
                        handleHeroChange(
                          index,
                          "buttonText",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />

                    <input
                      type="text"
                      placeholder="Button Link"
                      value={
                        slide.buttonLink
                      }
                      onChange={(e) =>
                        handleHeroChange(
                          index,
                          "buttonLink",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />
                  </div>

                  {/* TOGGLES */}
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={
                          slide.showButton
                        }
                        onChange={(e) =>
                          handleHeroChange(
                            index,
                            "showButton",
                            e.target
                              .checked
                          )
                        }
                      />

                      Show Main Button
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={
                          slide.showVideoButton
                        }
                        onChange={(e) =>
                          handleHeroChange(
                            index,
                            "showVideoButton",
                            e.target
                              .checked
                          )
                        }
                      />

                      Show Video Button
                    </label>
                  </div>

                  {/* VIDEO */}
                  {slide.showVideoButton && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Video Button Text"
                        value={
                          slide.videoText
                        }
                        onChange={(e) =>
                          handleHeroChange(
                            index,
                            "videoText",
                            e.target
                              .value
                          )
                        }
                        className="border rounded-xl p-4"
                      />

                      <input
                        type="text"
                        placeholder="Video URL"
                        value={
                          slide.videoUrl
                        }
                        onChange={(e) =>
                          handleHeroChange(
                            index,
                            "videoUrl",
                            e.target
                              .value
                          )
                        }
                        className="border rounded-xl p-4"
                      />
                    </div>
                  )}

                  {/* IMAGE */}
                  <div>
                    <label className="font-medium">
                      Hero Image
                    </label>

                    <input
                      type="file"
                      onChange={(e) =>
                        handleHeroImageChange(
                          index,
                          e.target
                            .files[0]
                        )
                      }
                      className="mt-3"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ABOUT */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            About Section
          </h2>

          <input
            type="text"
            name="title"
            placeholder="About Title"
            value={about.title}
            onChange={
              handleAboutChange
            }
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={5}
            name="description"
            placeholder="About Description"
            value={
              about.description
            }
            onChange={
              handleAboutChange
            }
            className="w-full border rounded-xl p-4 mt-5"
          />

          <div className="mt-5">
            <label className="font-medium">
              About Image
            </label>

            <input
              type="file"
              onChange={(e) =>
                setAboutImage(
                  e.target.files[0]
                )
              }
              className="mt-3"
            />
          </div>
        </div>

        {/* REVIEWS */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Reviews
            </h2>

            <button
              type="button"
              onClick={addReview}
              className="bg-black text-white px-5 h-[46px] rounded-xl"
            >
              Add Review
            </button>
          </div>

          <div className="space-y-6">
            {reviews.map(
              (
                review,
                index
              ) => (
                <div
                  key={index}
                  className="border rounded-2xl p-5 space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={
                        review.name
                      }
                      onChange={(e) =>
                        handleReviewChange(
                          index,
                          "name",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />

                    <input
                      type="text"
                      placeholder="Location"
                      value={
                        review.location
                      }
                      onChange={(e) =>
                        handleReviewChange(
                          index,
                          "location",
                          e.target
                            .value
                        )
                      }
                      className="border rounded-xl p-4"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Review"
                    value={
                      review.review
                    }
                    onChange={(e) =>
                      handleReviewChange(
                        index,
                        "review",
                        e.target
                          .value
                      )
                    }
                    className="w-full border rounded-xl p-4"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeReview(
                        index
                      )
                    }
                    className="text-red-500 font-medium"
                  >
                    Remove Review
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={submitting}
          className="h-[56px] px-8 rounded-2xl bg-black text-white font-medium"
        >
          {submitting
            ? "Updating..."
            : "Update Homepage"}
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditHomepage;