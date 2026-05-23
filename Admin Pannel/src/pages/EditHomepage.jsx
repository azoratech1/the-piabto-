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

const EditHomepage = () => {

  const [loading, setLoading] =
    useState(true);

  const [submitting,
    setSubmitting] =
    useState(false);

  /* =========================
     HERO
  ========================= */

  const [hero,
    setHero] =
    useState({

      subtitle: "",

      title: "",

      description: "",
    });

  const [heroImage,
    setHeroImage] =
    useState(null);


  /* =========================
     ABOUT
  ========================= */

  const [about,
    setAbout] =
    useState({

      title: "",

      description: "",
    });

  const [aboutImage,
    setAboutImage] =
    useState(null);


  /* =========================
     AMENITIES
  ========================= */

  const [amenities,
    setAmenities] =
    useState([]);


  /* =========================
     FLOORS
  ========================= */

  const [floors,
    setFloors] =
    useState([]);


  /* =========================
     REVIEWS
  ========================= */

  const [reviews,
    setReviews] =
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

          setHero(
            homepage.hero || {}
          );

          setAbout(
            homepage.about || {}
          );

          setAmenities(
            homepage.amenities || []
          );

          setFloors(
            homepage.floors || []
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
     HANDLERS
  ========================= */

  const handleHeroChange =
    (e) => {

      setHero({

        ...hero,

        [e.target.name]:
          e.target.value,
      });
    };


  const handleAboutChange =
    (e) => {

      setAbout({

        ...about,

        [e.target.name]:
          e.target.value,
      });
    };


  const handleFloorChange =
    (
      index,
      field,
      value
    ) => {

      const updated =
        [...floors];

      updated[index][field] =
        value;

      setFloors(updated);
    };


  const addFloor = () => {

    setFloors([

      ...floors,

      {

        title: "",

        subtitle: "",

        description: "",

        price: "",
      },
    ]);
  };


  const removeFloor =
    (index) => {

      const updated =
        floors.filter(
          (_, i) =>
            i !== index
        );

      setFloors(updated);
    };


  const handleReviewChange =
    (
      index,
      field,
      value
    ) => {

      const updated =
        [...reviews];

      updated[index][field] =
        value;

      setReviews(updated);
    };


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


  const removeReview =
    (index) => {

      const updated =
        reviews.filter(
          (_, i) =>
            i !== index
        );

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
          JSON.stringify(hero)
        );

        if (heroImage) {

          formData.append(
            "heroImage",
            heroImage
          );
        }


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


        /* FLOORS */
        formData.append(
          "floors",
          JSON.stringify(floors)
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

        <h1
          className="
            text-4xl
            font-bold
            text-slate-800
          "
        >

          Edit Homepage

        </h1>

        <p
          className="
            text-slate-500
            mt-2
          "
        >

          Manage all homepage content

        </p>

      </div>

      <form
        onSubmit={
          handleSubmit
        }

        className="
          space-y-8
        "
      >

        {/* HERO */}
        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >

            Hero Section

          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >

            <input
              type="text"
              name="subtitle"
              placeholder="Subtitle"
              value={
                hero.subtitle
              }

              onChange={
                handleHeroChange
              }

              className="
                border
                rounded-xl
                p-4
              "
            />

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={
                hero.title
              }

              onChange={
                handleHeroChange
              }

              className="
                border
                rounded-xl
                p-4
              "
            />

          </div>

          <textarea
            rows={5}
            name="description"
            placeholder="Description"
            value={
              hero.description
            }

            onChange={
              handleHeroChange
            }

            className="
              w-full
              border
              rounded-xl
              p-4
              mt-5
            "
          />

          <div className="mt-5">

            <label
              className="
                font-medium
              "
            >

              Hero Image

            </label>

            <input
              type="file"
              onChange={(e) =>
                setHeroImage(
                  e.target.files[0]
                )
              }

              className="
                mt-2
              "
            />

          </div>

        </div>


        {/* ABOUT */}
        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >

            About Section

          </h2>

          <input
            type="text"
            name="title"
            placeholder="About Title"
            value={
              about.title
            }

            onChange={
              handleAboutChange
            }

            className="
              w-full
              border
              rounded-xl
              p-4
            "
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

            className="
              w-full
              border
              rounded-xl
              p-4
              mt-5
            "
          />

          <div className="mt-5">

            <label
              className="
                font-medium
              "
            >

              About Image

            </label>

            <input
              type="file"
              onChange={(e) =>
                setAboutImage(
                  e.target.files[0]
                )
              }

              className="
                mt-2
              "
            />

          </div>

        </div>


        {/* FLOORS */}
        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold
              "
            >

              Floors

            </h2>

            <button
              type="button"

              onClick={addFloor}

              className="
                bg-black
                text-white
                px-5
                h-[44px]
                rounded-xl
              "
            >

              Add Floor

            </button>

          </div>

          <div
            className="
              space-y-6
            "
          >

            {floors.map(
              (
                floor,
                index
              ) => (

                <div
                  key={index}

                  className="
                    border
                    rounded-2xl
                    p-5
                    space-y-4
                  "
                >

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-4
                    "
                  >

                    <input
                      type="text"
                      placeholder="Title"
                      value={
                        floor.title
                      }

                      onChange={(e) =>
                        handleFloorChange(
                          index,
                          "title",
                          e.target.value
                        )
                      }

                      className="
                        border
                        rounded-xl
                        p-4
                      "
                    />

                    <input
                      type="text"
                      placeholder="Subtitle"
                      value={
                        floor.subtitle
                      }

                      onChange={(e) =>
                        handleFloorChange(
                          index,
                          "subtitle",
                          e.target.value
                        )
                      }

                      className="
                        border
                        rounded-xl
                        p-4
                      "
                    />

                  </div>

                  <textarea
                    rows={4}
                    placeholder="Description"
                    value={
                      floor.description
                    }

                    onChange={(e) =>
                      handleFloorChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }

                    className="
                      w-full
                      border
                      rounded-xl
                      p-4
                    "
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    value={
                      floor.price
                    }

                    onChange={(e) =>
                      handleFloorChange(
                        index,
                        "price",
                        e.target.value
                      )
                    }

                    className="
                      w-full
                      border
                      rounded-xl
                      p-4
                    "
                  />

                  <button
                    type="button"

                    onClick={() =>
                      removeFloor(
                        index
                      )
                    }

                    className="
                      text-red-500
                      font-medium
                    "
                  >

                    Remove Floor

                  </button>

                </div>
              )
            )}

          </div>

        </div>


        {/* REVIEWS */}
        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold
              "
            >

              Reviews

            </h2>

            <button
              type="button"

              onClick={addReview}

              className="
                bg-black
                text-white
                px-5
                h-[44px]
                rounded-xl
              "
            >

              Add Review

            </button>

          </div>

          <div className="space-y-5">

            {reviews.map(
              (
                review,
                index
              ) => (

                <div
                  key={index}

                  className="
                    border
                    rounded-2xl
                    p-5
                    space-y-4
                  "
                >

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-4
                    "
                  >

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
                          e.target.value
                        )
                      }

                      className="
                        border
                        rounded-xl
                        p-4
                      "
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
                          e.target.value
                        )
                      }

                      className="
                        border
                        rounded-xl
                        p-4
                      "
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
                        e.target.value
                      )
                    }

                    className="
                      w-full
                      border
                      rounded-xl
                      p-4
                    "
                  />

                  <button
                    type="button"

                    onClick={() =>
                      removeReview(
                        index
                      )
                    }

                    className="
                      text-red-500
                      font-medium
                    "
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

          className="
            h-[56px]
            px-8
            rounded-2xl
            bg-black
            text-white
            font-medium
          "
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