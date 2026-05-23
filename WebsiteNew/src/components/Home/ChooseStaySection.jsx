import { motion } from "framer-motion";

import {
  BedDouble,
  Home,
  Building2,
} from "lucide-react";

const STAYS = [
  {
    icon: BedDouble,

    title: "Private Room",

    subtitle:
      "Perfect for couples & solo travelers",

    price: "2,999",

    button: "View Rooms",

    accent: "green",
  },

  {
    icon: Home,

    title: "Entire 3BHK Floor",

    subtitle:
      "3 Bedrooms • Living Room • Kitchen",

    price: "8,999",

    button: "View Floors",

    accent: "gold",

    featured: true,
  },

  {
    icon: Building2,

    title: "Whole Building",

    subtitle:
      "15 Bedrooms | 5 Floors | Exclusive Stay",

    tag: "Best for Groups",

    button: "Request Quote",

    accent: "green",
  },
];

const ChooseStaySection = () => {

  return (
    <section
      className="
        relative
        bg-[#f5f1ea]
        py-[70px]
        md:py-[90px]
        overflow-hidden
      "
    >

      {/* TOP BORDER */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[92%]
          h-[1px]
          bg-[#e2d6c5]
        "
      />

      <div
        className="
          max-w-[1250px]
          mx-auto
          px-[5%]
        "
      >

        {/* HEADING */}
        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{ once: true }}

          className="
            flex
            items-center
            justify-center
            gap-4
            mb-12
          "
        >

          <div
            className="
              w-[90px]
              h-[1px]
              bg-[#d9cab4]
            "
          />

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-[7px]
                h-[7px]
                rounded-full
                bg-[#c49a61]
              "
            />

            <h2
              className="
                text-[14px]
                sm:text-[15px]
                uppercase
                tracking-[0.20em]
                text-[#47413a]
                font-semibold
              "
            >

              Choose Your Stay

            </h2>

            <div
              className="
                w-[7px]
                h-[7px]
                rounded-full
                bg-[#c49a61]
              "
            />

          </div>

          <div
            className="
              w-[90px]
              h-[1px]
              bg-[#d9cab4]
            "
          />

        </motion.div>

        {/* CARDS */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-7
          "
        >

          {STAYS.map((stay, index) => {

            const Icon = stay.icon;

            return (
              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                className={`
                  relative
                  bg-white
                  border
                  rounded-[10px]
                  px-7
                  pt-12
                  pb-7
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]

                  ${
                    stay.featured
                      ? "border-[#d4b07a] shadow-[0_15px_40px_rgba(193,151,90,0.10)]"
                      : "border-[#ddd3c6]"
                  }
                `}
              >

                {/* ICON */}
                <div
                  className={`
                    absolute
                    -top-8
                    left-1/2
                    -translate-x-1/2
                    w-[68px]
                    h-[68px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.10)]

                    ${
                      stay.accent === "gold"
                        ? "bg-[#c79248]"
                        : "bg-[#143828]"
                    }
                  `}
                >

                  <Icon
                    size={30}
                    className="
                      text-white
                    "
                  />

                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[30px]
                    leading-none
                    tracking-[-0.04em]
                    text-[#24211d]
                  "
                >

                  {stay.title}

                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.8]
                    text-[#7a7268]
                    min-h-[45px]
                  "
                >

                  {stay.subtitle}

                </p>

                {/* PRICE */}
                {stay.price && (
                  <div
                    className="
                      mt-6
                    "
                  >

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-[#9d8b72]
                      "
                    >

                      Starting from

                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        items-end
                        justify-center
                        gap-1
                      "
                    >

                      <span
                        className="
                          text-[38px]
                          leading-none
                          text-[#1b1b1b]
                          font-semibold
                        "
                      >

                        ₹{stay.price}

                      </span>

                      <span
                        className="
                          text-[13px]
                          mb-[5px]
                          text-[#8a8175]
                        "
                      >

                        /night

                      </span>

                    </div>

                  </div>
                )}

                {/* TAG */}
                {stay.tag && (
                  <div
                    className="
                      mt-6
                      inline-flex
                      px-4
                      py-2
                      rounded-full
                      bg-[#f3ece1]
                      border
                      border-[#e1d4bf]
                      text-[11px]
                      tracking-[0.12em]
                      uppercase
                      text-[#8b6b3f]
                      font-medium
                    "
                  >

                    {stay.tag}

                  </div>
                )}

                {/* BUTTON */}
                <button
                  className={`
                    mt-7
                    w-full
                    h-[50px]
                    rounded-[6px]
                    text-[11px]
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition-all
                    duration-500

                    ${
                      stay.accent === "gold"
                        ? "bg-[#c79248] hover:bg-[#b48238]"
                        : "bg-[#143828] hover:bg-[#1a4b36]"
                    }
                  `}
                >

                  {stay.button}

                </button>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ChooseStaySection;