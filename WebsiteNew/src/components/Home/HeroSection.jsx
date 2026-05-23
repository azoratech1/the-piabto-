import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
} from "lucide-react";

import BookingStrip from "../common/BookingStrip";

import heroBg from "../../assets/Herobg.png";
import {
  useNavigate,
} from "react-router-dom";
const HeroSection = ({ hero }) => {
const navigate = useNavigate();
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
      <div className="absolute inset-0">

        <img
          src={heroBg}
          alt="Luxury Estate"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* CINEMATIC OVERLAY */}
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
            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
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

               {hero?.subtitle}

              </span>

            </motion.div>

            {/* HEADING */}
            <motion.h1

              initial={{
                opacity: 0,
                y: 50,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
                delay: 0.1,
              }}

              className="
                text-white
                font-heading
               text-[clamp(38px,6vw,74px)]
                leading-[1.02]
                tracking-[-0.06em]
              "
            >
{hero?.title}

            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p

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
                delay: 0.25,
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

             {hero?.description}

            </motion.p>

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

              {/* PRIMARY */}
              <button
                onClick={() =>
                  navigate("/rooms")
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

                Explore The Estate

                <ArrowRight
                  size={14}
                  className="
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                  "
                />

              </button>

              {/* VIDEO BUTTON */}
              <button
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

                Watch Video

              </button>

            </motion.div>

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