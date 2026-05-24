import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  Play,
} from "lucide-react";

import BookingStrip from "../common/BookingStrip";

import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useEffect,
} from "react";

const HeroSection = ({ hero = [] }) => {

  const navigate = useNavigate();

  // FALLBACK IF NO HERO DATA
  const heroSlides =
    hero?.length > 0
      ? hero
      : [
          {
            subtitle: "Luxury Stay",
            title: "Experience Premium Hospitality",
            description:
              "Discover comfort, elegance and unforgettable moments.",
            showButton: true,
            buttonText: "Explore Rooms",
            buttonLink: "/rooms",
            showVideoButton: true,
            videoText: "Watch Video",
            videoUrl:
              "https://www.youtube.com/",
          },
        ];

  const [currentSlide, setCurrentSlide] =
    useState(0);

  // AUTO SLIDER
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () =>
      clearInterval(interval);

  }, [heroSlides.length]);

  const activeHero =
    heroSlides[currentSlide];

  // IMAGE URL
const imageUrl =
  `http://localhost:5000/api/homepage/image/hero/${currentSlide}`;

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f1ea]
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.img
            key={currentSlide}
            src={imageUrl}
            alt="Luxury Estate"

            initial={{
              opacity: 0,
              scale: 1.08,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}

            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              brightness-[0.82]
            "
          />

        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(6,17,14,0.92)_0%,rgba(6,17,14,0.82)_28%,rgba(6,17,14,0.46)_58%,rgba(6,17,14,0.14)_100%)]
          "
        />

        {/* GOLD GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(176,138,87,0.20),transparent_30%)]
          "
        />

        {/* BOTTOM FADE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[120px]
            bg-gradient-to-t
            from-[#f5f1ea]
            to-transparent
          "
        />

      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-20
          min-h-screen
          max-w-[1440px]
          mx-auto
          px-[5%]
          flex
          items-center
        "
      >

        <div
          className="
            w-full
            pt-[90px]
            pb-[200px]
            sm:pb-[130px]
            lg:pb-[170px]
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              max-w-[560px]
            "
          >

            {/* TOP LABEL */}
            <AnimatePresence mode="wait">

              <motion.div

                key={`subtitle-${currentSlide}`}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -20,
                }}

                transition={{
                  duration: 0.7,
                }}

                className="
                  flex
                  items-center
                  gap-4
                  mb-5
                "
              >

                <div
                  className="
                    w-9
                    h-[1px]
                    bg-[#c6a166]
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-[#d7b57c]
                    font-medium
                  "
                >

                  {activeHero?.subtitle}

                </span>

              </motion.div>

            </AnimatePresence>

            {/* TITLE */}
            <AnimatePresence mode="wait">

              <motion.h1

                key={`title-${currentSlide}`}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -50,
                }}

                transition={{
                  duration: 1,
                }}

                className="
                  text-white
                  font-heading
                  text-[clamp(38px,6vw,74px)]
                  leading-[1.02]
                  tracking-[-0.06em]
                "
              >

                {activeHero?.title}

              </motion.h1>

            </AnimatePresence>

            {/* DESCRIPTION */}
            <AnimatePresence mode="wait">

              <motion.p

                key={`desc-${currentSlide}`}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -30,
                }}

                transition={{
                  duration: 1,
                }}

                className="
                  mt-5
                  text-[12px]
                  sm:text-[13px]
                  leading-[1.9]
                  text-white/78
                  max-w-[470px]
                "
              >

                {activeHero?.description}

              </motion.p>

            </AnimatePresence>

            {/* BUTTONS */}
            <motion.div

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
                delay: 0.4,
              }}

              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >

              {/* PRIMARY BUTTON */}
              {activeHero?.showButton && (

                <button

                  onClick={() =>
                    navigate(
                      activeHero?.buttonLink ||
                        "/rooms"
                    )
                  }

                  className="
                    group
                    h-[48px]
                    sm:h-[50px]
                    px-6
                    sm:px-7
                    bg-[#163628]
                    border
                    border-[#b08a57]
                    text-[#f5ead7]
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    flex
                    items-center
                    gap-3
                    transition-all
                    duration-500
                    hover:bg-[#204937]
                  "
                >

                  {activeHero?.buttonText ||
                    "Explore"}

                  <ArrowRight
                    size={14}
                    className="
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                    "
                  />

                </button>

              )}

              {/* VIDEO BUTTON */}
              {activeHero?.showVideoButton &&
                activeHero?.videoUrl && (

                  <a

                    href={
                      activeHero.videoUrl
                    }

                    target="_blank"

                    rel="noreferrer"

                    className="
                      group
                      h-[48px]
                      sm:h-[50px]
                      px-6
                      sm:px-7
                      border
                      border-white/20
                      bg-black/15
                      backdrop-blur-md
                      text-white
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      flex
                      items-center
                      gap-3
                      transition-all
                      duration-500
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        w-7
                        h-7
                        rounded-full
                        border
                        border-white/25
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Play
                        size={11}
                        fill="white"
                      />

                    </div>

                    {activeHero?.videoText ||
                      "Watch Video"}

                  </a>

                )}

            </motion.div>

            {/* SLIDER DOTS */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-10
              "
            >

              {heroSlides.map(
                (_, index) => (

                  <button

                    key={index}

                    onClick={() =>
                      setCurrentSlide(
                        index
                      )
                    }

                    className={`
                      transition-all
                      duration-300
                      rounded-full
                      ${
                        currentSlide ===
                        index
                          ? "w-10 h-[4px] bg-[#d7b57c]"
                          : "w-3 h-3 bg-white/40"
                      }
                    `}
                  />

                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* BOOKING STRIP */}
      <div
        className="
          absolute
          bottom-[18px]
          sm:bottom-[25px]
          md:bottom-[40px]
          lg:bottom-[85px]
          xl:bottom-[95px]
          left-1/2
          -translate-x-1/2
          z-30
          w-full
          px-[4%]
        "
      >

        <div
          className="
            max-w-[1280px]
            mx-auto
          "
        >

          <BookingStrip />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;