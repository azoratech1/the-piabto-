import { motion } from "framer-motion";

import {
  Mountain,
  BedDouble,
  HandPlatter,
  Building2,
  Trees,
} from "lucide-react";

const FEATURES = [
  {
    icon: Mountain,
    title: "Scenic Views",
  },

  {
    icon: BedDouble,
    title: "Luxury Rooms",
  },

  {
    icon: HandPlatter,
    title: "Warm Hospitality",
  },

  {
    icon: Building2,
    title: "5 Floors Estate",
  },
];

const TimelessEscapeSection = ({
  about,
}) => {

  return (
    <section
      className="
        relative
        bg-[#f7f4ef]
        py-[65px]
        lg:py-[85px]
        overflow-hidden
      "
    >

      {/* CONTAINER */}
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-[5%]
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-[38px]
            xl:gap-[58px]
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            viewport={{ once: true }}
          >

            {/* TOP LABEL */}
            <div
              className="
                flex
                items-center
                gap-2
                mb-5
              "
            >

              <Trees
                size={17}
                strokeWidth={1.6}
                className="
                  text-[#b89052]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#b89052]
                  font-semibold
                "
              >

                About The Estate

              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-heading
                text-[#1d1a16]
                font-[400]
                text-[clamp(34px,4vw,60px)]
                leading-[1.02]
                tracking-[-0.045em]
                max-w-[500px]
              "
            >
                {about?.title}

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[480px]
                text-[14px]
                leading-[2]
                text-[#5e574d]
                font-[450]
              "
            >

              {about?.description}

            </p>

            {/* FEATURES */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-y-6
                gap-x-4
                max-w-[560px]
              "
            >

              {FEATURES.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}

                    viewport={{ once: true }}

                    className="
                      flex
                      flex-col
                      items-start
                    "
                  >

                    {/* ICON */}
                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      className="
                        text-[#c29a60]
                      "
                    />

                    {/* TITLE */}
                    <span
                      className="
                        mt-3
                        text-[11px]
                        text-[#534c42]
                        leading-[1.5]
                        font-medium
                      "
                    >

                      {item.title}

                    </span>

                  </motion.div>
                );
              })}

            </div>

            {/* BUTTON */}
            <button
              className="
                mt-9
                h-[48px]
                px-7
                bg-[#0c382b]
                text-white
                text-[10px]
                uppercase
                tracking-[0.18em]
                rounded-[3px]
                transition-all
                duration-500
                hover:bg-[#124534]
                hover:-translate-y-[2px]
                shadow-[0_12px_30px_rgba(12,56,43,0.16)]
              "
            >

              Know More About Us

            </button>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.9,
            }}

            viewport={{ once: true }}

            className="
              relative
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#e7ddd0]
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              "
            >

              {/* IMAGE */}
             <img
  src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/08/Kasauli-Tourist-Attractions.jpg"
  alt="The Piabto Estate"
  className="
    w-full
    h-[240px]
    sm:h-[300px]
    lg:h-[350px]
    xl:h-[380px]
    object-cover
  "
/>
              {/* SOFT OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/10
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default TimelessEscapeSection;