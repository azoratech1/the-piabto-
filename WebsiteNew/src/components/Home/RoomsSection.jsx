import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Mountain,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ROOMS = [
  {
    id: 1,
    name: "Premium Valley Room",
    description:
      "Luxury mountain stay with cinematic valley views and handcrafted interiors.",
    pricePerNight: 6500,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2200",
    ],
  },

  {
    id: 2,
    name: "Luxury Pine Suite",
    description:
      "Elegant boutique suite surrounded by peaceful pine forests.",
    pricePerNight: 8500,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2200",
    ],
  },

  {
    id: 3,
    name: "Mountain Family Stay",
    description:
      "Spacious luxury retreat crafted for unforgettable mountain mornings.",
    pricePerNight: 12000,
    images: [
      "https://images.unsplash.com/photo-1505693536294-233fb141754c?q=80&w=2200",
    ],
  },
];

const RoomsSection = () => {

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f3ede5] py-[160px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-[0.05]">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400"
          alt=""
          className="w-full h-full object-cover"
        />

      </div>

      {/* SOFT TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#f6f1e8] to-transparent" />

      {/* LIGHT GLOW */}
      <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] rounded-full bg-[#d4af6d12] blur-3xl" />

      {/* CONTENT */}
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
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-24"
        >

          {/* LEFT */}
          <div className="max-w-[760px]">

            {/* MINI LABEL */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#d4af6d18] shadow-[0_10px_30px_rgba(0,0,0,0.04)] mb-8">

              <Mountain
                size={15}
                className="text-[#b08a57]"
              />

              <span className="text-[10px] tracking-[0.28em] uppercase text-[#7b6646]">
                Luxury Accommodations
              </span>

            </div>

            {/* HEADING */}
            <h2 className="text-[clamp(52px,7vw,108px)] leading-[0.9] tracking-[-0.07em] text-[#1f170f] font-[700]">

              Rooms crafted
              <br />

              <span className="italic text-[#a67c45] font-[500]">
                for mountain living
              </span>

            </h2>

            {/* DESC */}
            <p className="mt-8 max-w-[620px] text-[15px] leading-[2] text-[#6d6254]">
              Discover thoughtfully designed
              boutique rooms blending luxury
              interiors, panoramic Himalayan
              views and elevated hospitality.
            </p>

          </div>

          {/* BUTTON */}
          <button className="group relative overflow-hidden h-[58px] px-9 rounded-full bg-[#1f170f] text-[#f5e7ca] text-[11px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">

            {/* SHINE */}
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.16)_40%,transparent_60%)] -translate-x-[140%] group-hover:translate-x-[140%] transition-transform duration-[1800ms]" />

            <span className="relative z-10">
              Explore All Rooms
            </span>

          </button>

        </motion.div>

        {/* ROOMS GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{
                opacity: 0,
                y: 70,
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
              onClick={() =>
                navigate(
                  `/rooms/${room.id}`,
                  {
                    state: room,
                  }
                )
              }
              className="group cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[38px] h-[620px]">

                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-[2200ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* PRICE */}
                <div className="absolute top-6 right-6 px-5 py-3 rounded-full bg-white/12 backdrop-blur-xl border border-white/15 text-white text-[10px] tracking-[0.22em] uppercase">

                  ₹{room.pricePerNight}/night

                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-8">

                  {/* SMALL LABEL */}
                  <div className="flex items-center gap-3 mb-5">

                    <Sparkles
                      size={14}
                      className="text-white"
                    />

                    <span className="text-[10px] tracking-[0.24em] uppercase text-white/75">
                      Boutique Stay
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="text-[42px] leading-[0.95] tracking-[-0.05em] text-white font-[700] max-w-[320px]">

                    {room.name}

                  </h3>

                  {/* DESC */}
                  <p className="mt-5 text-[13px] leading-[1.9] text-white/75 max-w-[360px]">
                    {room.description}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-8 flex items-center justify-between">

                    <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">
                      Luxury Mountain Experience
                    </div>

                    {/* ARROW */}
                    <div className="w-[58px] h-[58px] rounded-full bg-white text-[#1f170f] flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-110">

                      <ArrowRight size={20} />

                    </div>

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

export default RoomsSection;