import { motion } from "framer-motion";
import {
  ChevronDown,
  Mountain,
  Trees,
} from "lucide-react";

const HeroSection = ({ navigate }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f3ee]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000"
          alt="Kasauli"
          className="w-full h-full object-cover scale-105"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee]/75 via-[#f7f3ee]/55 to-[#f7f3ee]" />

        {/* SOFT GLOW */}
        <div className="absolute top-[-120px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#d4b48322] blur-3xl" />

        {/* TEXTURE GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-[6%] pt-[100px]">

        <div className="max-w-[760px]">

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-[#d4b48333] shadow-lg mb-8"
          >

            <Mountain
              size={16}
              className="text-[#b89156]"
            />

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#7b6646]">
              Kasauli · Himachal Pradesh
            </span>

          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
            className="text-[clamp(56px,8vw,112px)] leading-[0.95] font-light text-[#2a2218] tracking-[-0.04em]"
          >
            Stay where
            <br />

            <span className="italic text-[#b89156]">
              mountains whisper
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="mt-10 max-w-[620px] text-[13px] leading-[2.1] tracking-[0.08em] text-[#5f5546]"
          >
            A luxury 4-floor mountain retreat
            nestled above the pine forests of
            Kasauli. Wake up to Himalayan
            sunrise views, handcrafted
            interiors, crisp mountain air and
            the calm of nature all around you.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >

            {/* BOOK NOW */}
            <button
              onClick={() => navigate("/rooms")}
              className="group relative overflow-hidden h-[62px] px-10 rounded-full bg-[#1f1a14] text-[#f5e7ca] text-[11px] tracking-[0.22em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >

              {/* SHINE */}
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1600ms] group-hover:translate-x-[140%]" />

              <span className="relative z-10">
                Book Your Stay
              </span>

            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="group h-[62px] px-10 rounded-full border border-[#b8915640] bg-white/60 backdrop-blur-xl flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#7b6646] transition-all duration-500 hover:-translate-y-1 hover:bg-[#ffffffcc] hover:shadow-[0_20px_50px_rgba(180,145,86,0.18)]"
            >

              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />

              WhatsApp Enquiry

            </a>

          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[760px]"
          >

            {[
              {
                icon: "🌲",
                title: "Pine Forest",
              },
              {
                icon: "🏔",
                title: "Valley Views",
              },
              {
                icon: "☕",
                title: "Private Balconies",
              },
              {
                icon: "🔥",
                title: "Luxury Stay",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#d4b48322] bg-white/50 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >

                <div className="text-[28px] mb-4 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <div className="text-[10px] tracking-[0.18em] uppercase text-[#6d5b42] leading-[1.8]">
                  {item.title}
                </div>

              </div>
            ))}

          </motion.div>

        </div>

      </div>

      {/* FLOATING SIDE CARD */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 1,
        }}
        className="hidden xl:flex absolute right-[6%] bottom-[12%] z-20"
      >

        <div className="w-[280px] rounded-[36px] border border-[#d4b48322] bg-white/55 backdrop-blur-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

          <div className="flex items-center gap-3 mb-6">

            <Trees
              size={20}
              className="text-[#b89156]"
            />

            <span className="text-[10px] tracking-[0.22em] uppercase text-[#7b6646]">
              Mountain Experience
            </span>

          </div>

          <h3
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
            className="text-[34px] leading-[1.1] text-[#2a2218] mb-5"
          >
            Luxury
            <br />
            above the clouds
          </h3>

          <p className="text-[11px] leading-[2] tracking-[0.06em] text-[#6d6254]">
            Experience sunrise balconies,
            handcrafted interiors, pine forest
            air and complete serenity in the
            heart of Kasauli.
          </p>

        </div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >

        <span className="text-[9px] tracking-[0.28em] uppercase text-[#7b6646]">
          Scroll
        </span>

        <ChevronDown
          size={18}
          className="text-[#b89156] animate-bounce"
        />

      </motion.div>

    </section>
  );
};

export default HeroSection;