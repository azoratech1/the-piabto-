import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const GALLERY = [
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const REVIEWS = [
  {
    name: "Aarav Sharma",

    location: "New Delhi",

    review:
      "Our stay at The Piabto was absolutely wonderful. The mountain views, hospitality and peaceful ambience made the experience unforgettable.",

    rating: 5,
  },

  {
    name: "Simran Kaur",

    location: "Chandigarh",

    review:
      "The interiors felt luxurious yet cozy. Every floor had its own charm and the rooftop views were breathtaking during sunset.",

    rating: 5,
  },

  {
    name: "Rohan Mehta",

    location: "Mumbai",

    review:
      "One of the best luxury stays in Kasauli. Spacious rooms, premium service and beautiful Himalayan surroundings.",

    rating: 5,
  },
];

const GalleryReviewsSection = () => {

  const [currentReview, setCurrentReview] =
    useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentReview((prev) =>
        prev === REVIEWS.length - 1
          ? 0
          : prev + 1
      );

    }, 4500);

    return () =>
      clearInterval(interval);

  }, []);

  const nextReview = () => {

    setCurrentReview((prev) =>
      prev === REVIEWS.length - 1
        ? 0
        : prev + 1
    );

  };

  const prevReview = () => {

    setCurrentReview((prev) =>
      prev === 0
        ? REVIEWS.length - 1
        : prev - 1
    );

  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f3ed]
        py-[90px]
      "
    >

      {/* TOP LINE */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[1px]
          bg-[#e6ddd2]
        "
      />

      <div
        className="
          max-w-[1450px]
          mx-auto
          px-[4%]
        "
      >

        <div
          className="
            grid
            xl:grid-cols-[1.2fr_1fr_1fr]
            gap-10
            items-start
          "
        >

          {/* ================= GALLERY ================= */}

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

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <h3
                className="
                  text-[14px]
                  uppercase
                  tracking-[0.16em]
                  font-semibold
                  text-[#181511]
                "
              >

                Gallery

              </h3>

              <button
                className="
                  h-[34px]
                  px-4
                  rounded-[8px]
                  border
                  border-[#d6cabd]
                  bg-white
                  text-[10px]
                  tracking-[0.16em]
                  uppercase
                  text-[#1b1815]
                  transition-all
                  duration-300
                  hover:bg-[#0d3526]
                  hover:text-white
                "
              >

                View All

              </button>

            </div>

            {/* GALLERY GRID */}
            <div
              className="
                grid
                grid-cols-3
                gap-3
              "
            >

              {GALLERY.map((item, index) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}

                  viewport={{ once: true }}

                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[16px]
                    cursor-pointer
                    ${
                      index === 0
                        ? "col-span-1 row-span-2 h-[320px]"
                        : "h-[152px]"
                    }
                  `}
                >

                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-[1800ms]
                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                      opacity-80
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* HOVER ICON */}
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      w-[42px]
                      h-[42px]
                      rounded-full
                      bg-white/90
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      opacity-0
                      scale-75
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  >

                    <ArrowUpRight
                      size={18}
                      className="
                        text-[#1b1815]
                      "
                    />

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* ================= ATTRACTIONS ================= */}

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
              delay: 0.1,
            }}

            viewport={{ once: true }}

          >

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <h3
                className="
                  text-[14px]
                  uppercase
                  tracking-[0.16em]
                  font-semibold
                  text-[#181511]
                "
              >

                Attractions Nearby

              </h3>

              <button
                className="
                  h-[34px]
                  px-4
                  rounded-[8px]
                  border
                  border-[#d6cabd]
                  bg-white
                  text-[10px]
                  tracking-[0.16em]
                  uppercase
                  text-[#1b1815]
                  transition-all
                  duration-300
                  hover:bg-[#0d3526]
                  hover:text-white
                "
              >

                View All

              </button>

            </div>

            {/* LIST */}
            <div
              className="
                rounded-[22px]
                border
                border-[#e4dacf]
                bg-white/70
                backdrop-blur-xl
                overflow-hidden
              "
            >

              {[
                {
                  title: "Kasauli Mall Road",
                  time: "5 mins drive",
                  image:
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
                },

                {
                  title: "Sunset Point",
                  time: "10 mins drive",
                  image:
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                },

                {
                  title: "Monkey Point",
                  time: "15 mins drive",
                  image:
                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
                },

                {
                  title: "Christ Church",
                  time: "12 mins drive",
                  image:
                    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item, index) => (

                <div
                  key={index}

                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-4
                    border-b
                    border-[#ece3d8]
                    last:border-b-0
                    transition-all
                    duration-300
                    hover:bg-[#faf7f2]
                  "
                >

                  <div
                    className="
                      w-[78px]
                      h-[64px]
                      rounded-[14px]
                      overflow-hidden
                      shrink-0
                    "
                  >

                    <img
                      src={item.image}
                      alt=""
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                  </div>

                  <div>

                    <h4
                      className="
                        text-[18px]
                        leading-none
                        text-[#1a1713]
                      "
                    >

                      {item.title}

                    </h4>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        text-[#7d7367]
                      "
                    >

                      {item.time}

                    </p>

                  </div>

                </div>
              ))}

            </div>

          </motion.div>

          {/* ================= REVIEWS ================= */}

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
              delay: 0.2,
            }}

            viewport={{ once: true }}

          >

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <h3
                className="
                  text-[14px]
                  uppercase
                  tracking-[0.16em]
                  font-semibold
                  text-[#181511]
                "
              >

                Guest Reviews

              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <button
                  onClick={prevReview}
                  className="
                    w-[34px]
                    h-[34px]
                    rounded-full
                    border
                    border-[#d9cec1]
                    bg-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-[#0d3526]
                    hover:text-white
                  "
                >

                  <ChevronLeft size={16} />

                </button>

                <button
                  onClick={nextReview}
                  className="
                    w-[34px]
                    h-[34px]
                    rounded-full
                    border
                    border-[#d9cec1]
                    bg-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-[#0d3526]
                    hover:text-white
                  "
                >

                  <ChevronRight size={16} />

                </button>

              </div>

            </div>

            {/* REVIEW CARD */}
            <div
              className="
                relative
                rounded-[26px]
                border
                border-[#e6ddd2]
                bg-white/80
                backdrop-blur-xl
                p-8
                min-h-[430px]
                shadow-[0_15px_40px_rgba(0,0,0,0.04)]
              "
            >

              {/* QUOTE */}
              <div
                className="
                  absolute
                  top-6
                  right-6
                  text-[#d8b06d]
                  opacity-20
                "
              >

                <Quote size={70} />

              </div>

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentReview}

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
                    duration: 0.45,
                  }}
                >

                  {/* STARS */}
                  <div
                    className="
                      flex
                      gap-1
                      mb-7
                    "
                  >

                    {Array.from({
                      length:
                        REVIEWS[currentReview]
                          .rating,
                    }).map((_, i) => (

                      <Star
                        key={i}
                        size={18}
                        className="
                          fill-[#d6ad6d]
                          text-[#d6ad6d]
                        "
                      />

                    ))}

                  </div>

                  {/* REVIEW */}
                  <p
                    className="
                      text-[22px]
                      leading-[1.8]
                      text-[#2b2621]
                      font-light
                    "
                  >

                    “
                    {
                      REVIEWS[currentReview]
                        .review
                    }
                    ”

                  </p>

                  {/* USER */}
                  <div
                    className="
                      mt-12
                      pt-6
                      border-t
                      border-[#ece3d8]
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div>

                      <h4
                        className="
                          text-[22px]
                          text-[#1b1815]
                        "
                      >

                        {
                          REVIEWS[currentReview]
                            .name
                        }

                      </h4>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          uppercase
                          tracking-[0.18em]
                          text-[#8a7d6e]
                        "
                      >

                        {
                          REVIEWS[currentReview]
                            .location
                        }

                      </p>

                    </div>

                    <div
                      className="
                        flex
                        gap-2
                      "
                    >

                      {REVIEWS.map(
                        (_, index) => (

                          <button
                            key={index}

                            onClick={() =>
                              setCurrentReview(
                                index
                              )
                            }

                            className={`
                              w-[9px]
                              h-[9px]
                              rounded-full
                              transition-all
                              duration-300
                              ${
                                currentReview ===
                                index
                                  ? "bg-[#0d3526] scale-125"
                                  : "bg-[#d6cabd]"
                              }
                            `}
                          />

                        )
                      )}

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default GalleryReviewsSection;