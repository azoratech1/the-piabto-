import { motion } from "framer-motion";

import {
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const REVIEWS = [
  {
    name: "Aarav Sharma",
    location: "Delhi",
    text: "The most peaceful mountain stay I’ve experienced. Waking up above the clouds felt unreal.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },

  {
    name: "Simran Kaur",
    location: "Chandigarh",
    text: "Luxury interiors, breathtaking views and such calming energy everywhere around the property.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },

  {
    name: "Rohan Mehta",
    location: "Mumbai",
    text: "Perfect balance of nature and comfort. One of the best boutique stays in Himachal.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4ede3] py-[170px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-[0.04]">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400"
          alt=""
          className="w-full h-full object-cover"
        />

      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute top-[-220px] left-[-120px] w-[650px] h-[650px] rounded-full bg-[#d4af6d10] blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-150px] w-[650px] h-[650px] rounded-full bg-[#b08a570d] blur-3xl" />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#ede5da] to-transparent" />

      <div className="relative z-10 px-[6%]">

        {/* HEADER */}
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
          className="max-w-[920px] mx-auto text-center mb-28"
        >

          {/* LABEL */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/75 backdrop-blur-xl border border-[#d4af6d15] shadow-[0_10px_30px_rgba(0,0,0,0.04)] mb-8">

            <Sparkles
              size={14}
              className="text-[#b08a57]"
            />

            <span className="text-[10px] tracking-[0.28em] uppercase text-[#7b6646]">
              Guest Experiences
            </span>

          </div>

          {/* HEADING */}
          <h2 className="text-[clamp(52px,7vw,104px)] leading-[0.9] tracking-[-0.07em] text-[#1f170f] font-[700]">

            Stories shaped
            <br />

            <span className="italic text-[#a67c45] font-[500]">
              by the mountains
            </span>

          </h2>

          {/* DESC */}
          <p className="mt-8 max-w-[700px] mx-auto text-[15px] leading-[2] text-[#6d6254]">
            Moments of calm mornings,
            luxury comfort and unforgettable
            Himalayan experiences shared by
            our guests from across India.
          </p>

        </motion.div>

        {/* REVIEWS GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {REVIEWS.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[42px]
                bg-white/72
                backdrop-blur-2xl
                border
                border-[#d4af6d15]
                p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                transition-all
                duration-700
                hover:-translate-y-3
                hover:shadow-[0_35px_90px_rgba(0,0,0,0.08)]
              "
            >

              {/* GLOW */}
              <div className="
                absolute
                top-[-120px]
                right-[-120px]
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#d4af6d10]
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
              " />

              {/* QUOTE ICON */}
              <div className="
                absolute
                top-7
                right-7
                w-[64px]
                h-[64px]
                rounded-full
                bg-[#f8f2ea]
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:rotate-12
              ">

                <Quote
                  size={24}
                  className="text-[#b08a57]"
                />

              </div>

              {/* STARS */}
              <div className="flex items-center gap-2 mb-10">

                {Array.from({
                  length: 5,
                }).map((_, i) => (
                  <div
                    key={i}
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-[#f8f2ea]
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Star
                      size={14}
                      className="text-[#d4af6d] fill-[#d4af6d]"
                    />

                  </div>
                ))}

              </div>

              {/* REVIEW TEXT */}
              <p className="
                text-[26px]
                leading-[1.55]
                tracking-[-0.03em]
                text-[#2f261d]
                font-[500]
                transition-all
                duration-500
                group-hover:text-[#1f170f]
              ">

                “{review.text}”

              </p>

              {/* BOTTOM */}
              <div className="
                mt-12
                pt-7
                border-t
                border-[#d4af6d15]
                flex
                items-center
                justify-between
              ">

                {/* USER */}
                <div className="flex items-center gap-4">

                  {/* IMAGE */}
                  <div className="
                    w-[62px]
                    h-[62px]
                    rounded-full
                    overflow-hidden
                    ring-2
                    ring-[#d4af6d20]
                  ">

                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* INFO */}
                  <div>

                    <div className="
                      text-[13px]
                      tracking-[0.12em]
                      uppercase
                      text-[#1f170f]
                    ">

                      {review.name}

                    </div>

                    <div className="
                      mt-2
                      text-[10px]
                      tracking-[0.22em]
                      uppercase
                      text-[#8b7355]
                    ">

                      {review.location}

                    </div>

                  </div>

                </div>

                {/* RATING */}
                <div className="
                  hidden
                  md:flex
                  flex-col
                  items-end
                ">

                  <div className="
                    text-[36px]
                    leading-none
                    tracking-[-0.05em]
                    text-[#b08a57]
                    font-[700]
                  ">
                    5.0
                  </div>

                  <div className="
                    mt-1
                    text-[9px]
                    tracking-[0.22em]
                    uppercase
                    text-[#8b7355]
                  ">
                    Guest Rating
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ReviewsSection;