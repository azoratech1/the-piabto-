import {
  useEffect,
  useState,
} from "react";

import HeroSection from "../components/Home/HeroSection";

import TimelessEscapeSection from "../components/Home/TimeLessSection";

import ChooseStaySection from "../components/Home/ChooseStaySection";

import FloorsSection from "../components/Home/Floors";

import GalleryReviewsSection from "../components/Home/GallerySection";

import { getFloors } from "../services/api";

import {
  getHomepage,
} from "../services/api";

const Home = () => {
const [floors, setFloors] =
  useState([]);
  const [homepage,
    setHomepage] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);


  /* =========================
     FETCH HOMEPAGE
  ========================= */
useEffect(() => {

  const fetchFloors =
    async () => {

      try {

        const res =
          await getFloors();

        console.log(
          "floors api",
         JSON.stringify(res)
        );

        setFloors(res.data.floors);

      } catch (error) {

        console.log(error);

      }
    };

  fetchFloors();

}, []);
  const fetchHomepage =
    async () => {

      try {

        const { data } =
          await getHomepage();

        console.log(data);

        setHomepage(data?.homepage);
   console.log("homepage data is"+JSON.stringify(homepage))
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
     LOADER
  ========================= */

 

  return (
    <>

      {/* HERO */}
      <HeroSection
        hero={
          homepage?.hero
        }
      />

      {/* ABOUT */}
      <TimelessEscapeSection
        about={
          homepage?.about
        }
      />

      {/* CHOOSE STAY */}
      <ChooseStaySection
        floors={
          homepage?.floors
        }
      />

      {/* FLOORS */}
      <FloorsSection
        floors={
          floors
        }

        amenities={
          homepage?.amenities
        }
      />

      {/* GALLERY + REVIEWS */}
      <GalleryReviewsSection

        reviews={
          homepage?.reviews
        }

        attractions={
          homepage?.attractions
        }
      />

    </>
  );
};

export default Home;