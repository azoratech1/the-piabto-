import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Trees,
  Mountain,
} from "lucide-react";

const FEATURES = [
  {
    title: "Panoramic Valley Views",
    desc: "Experience cinematic Himalayan mornings with uninterrupted valley landscapes and floating clouds beneath your balcony.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800",
  },

  {
    title: "Luxury Wooden Interiors",
    desc: "Warm earthy textures, handcrafted details and refined mountain aesthetics designed for timeless luxury living.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800",
  },

  {
    title: "Forest Silence Experience",
    desc: "Wake up to pine forests, fresh mountain air and peaceful silence that slows everything down beautifully.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1b1713] py-[160px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-[0.08]">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400"
          alt=""
          className="w-full h-full object-cover"
        />

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,109,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(176,138,87,0.08),transparent_35%)]" />

      {/* LUXURY LINE */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af6d15] to-transparent hidden xl:block" />

      <div className="relative z-10 px-[6%]">

        {/* TOP */}
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
          className="max-w-[900px] mx-auto text-center mb-32"
        >

          {/* LABEL */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">

            <Mountain
              size={15}
              className="text-[#d4af6d]"
            />

            <span className="text-[10px] tracking-[0.28em] uppercase text-[#e7d8bc]">
              Curated Mountain Living
            </span>

          </div>

          {/* HEADING */}
          <h2 className="text-[clamp(52px,7vw,110px)] leading-[0.9] tracking-[-0.07em] text-white font-[700]">

            Luxury
            <br />

            <span className="text-[#c39a62] italic font-[500]">
              in its quietest form
            </span>

          </h2>

          {/* DESC */}
          <p className="mt-8 max-w-[720px] mx-auto text-[15px] leading-[2] text-[#b9ab96]">
            Every corner is thoughtfully
            designed to create a cinematic
            mountain experience blending
            modern luxury with peaceful
            Himalayan simplicity.
          </p>

        </motion.div>

        {/* FEATURES */}
        <div className="flex flex-col gap-44">

          {FEATURES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className={`
                grid lg:grid-cols-2
                gap-24
                items-center
                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >

              {/* IMAGE SIDE */}
              <div className="relative">

                {/* FLOATING CARD */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-10 -right-8 z-20 bg-[#231d18] border border-white/10 rounded-[34px] px-7 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-[#2f2721] flex items-center justify-center">

                      <Sparkles
                        size={17}
                        className="text-[#d4af6d]"
                      />

                    </div>

                    <div>

                      <div className="text-[10px] tracking-[0.22em] uppercase text-[#9f927f]">
                        Luxury Experience
                      </div>

                      <div className="text-[15px] text-white">
                        Boutique Stay
                      </div>

                    </div>

                  </div>

                </motion.div>

                {/* IMAGE */}
                <div className="group relative overflow-hidden rounded-[44px] h-[680px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-[2200ms] group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* NOISE */}
                  <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  {/* CONTENT */}
                  <div className="absolute bottom-10 left-10 right-10">

                    <div className="flex items-center gap-3 mb-5">

                      <Trees
                        size={15}
                        className="text-white"
                      />

                      <span className="text-[10px] tracking-[0.24em] uppercase text-white/75">
                        Mountain Escape
                      </span>

                    </div>

                    <h3 className="text-[48px] leading-[0.95] tracking-[-0.05em] text-white font-[700] max-w-[420px]">

                      {item.title}

                    </h3>

                  </div>

                </div>

              </div>

              {/* TEXT SIDE */}
              <div className="max-w-[560px]">

                {/* MINI */}
                <div className="flex items-center gap-4 mb-8">

                  <div className="w-16 h-[1px] bg-[#d4af6d]" />

                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#bca98d]">
                    Himalayan Hospitality
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-[clamp(44px,5vw,78px)] leading-[0.92] tracking-[-0.06em] text-white font-[700]">

                  Designed
                  <br />

                  <span className="text-[#c39a62] italic font-[500]">
                    for stillness
                  </span>

                </h3>

                {/* DESC */}
                <p className="mt-8 text-[15px] leading-[2.1] text-[#b8ab98]">
                  {item.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-4 mt-10">

                  {[
                    "Luxury Suites",
                    "Private Balconies",
                    "Nature Views",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.22em] uppercase text-[#d4c3ac] transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
                    >

                      {tag}

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <button className="group relative overflow-hidden mt-12 h-[58px] px-10 rounded-full bg-[#d4af6d] text-[#1b1713] text-[11px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(212,175,109,0.16)]">

                  {/* SHINE */}
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.25)_40%,transparent_60%)] -translate-x-[140%] group-hover:translate-x-[140%] transition-transform duration-[1800ms]" />

                  <span className="relative z-10 flex items-center gap-3">

                    Explore Experience

                    <ArrowRight size={16} />

                  </span>

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;