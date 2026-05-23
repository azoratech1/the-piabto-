import { motion } from "framer-motion";

import {
  ArrowRight,
  MapPin,
  Camera,
  Mountain,
} from "lucide-react";

const GALLERY = [
  {
    id: 1,
    title: "Luxury Valley View",
    location: "Kasauli Hills",
    category: "Suites",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800",
  },

  {
    id: 2,
    title: "Forest Retreat",
    location: "Pine Woods",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800",
  },

  {
    id: 3,
    title: "Minimal Luxury Interior",
    location: "Premium Suites",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800",
  },

  {
    id: 4,
    title: "Morning Mountain Light",
    location: "Sunrise Deck",
    category: "Views",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800",
  },

  {
    id: 5,
    title: "Boutique Bedroom",
    location: "Luxury Stay",
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800",
  },

  {
    id: 6,
    title: "Private Balcony",
    location: "Mountain Edge",
    category: "Balcony",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800",
  },

  {
    id: 7,
    title: "Golden Hour Escape",
    location: "Kasauli Ridge",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1800",
  },

  {
    id: 8,
    title: "Luxury Dining",
    location: "Mountain Café",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1800",
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-[#f7f3ee] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-[6%] overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-[#f7f3ee]" />

        </div>

        {/* GLOW */}
        <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#d4af6d20] blur-3xl" />

        {/* CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 text-center max-w-[900px]"
        >

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] tracking-[0.28em] uppercase text-white mb-8">

            <Camera size={14} />

            Visual Experience

          </div>

          <h1 className="text-[clamp(56px,9vw,130px)] leading-[0.9] tracking-[-0.06em] text-white font-light">

            Moments from
            <br />

            <span className="italic text-[#d4af6d]">
              the mountains
            </span>

          </h1>

          <p className="mt-8 max-w-[650px] mx-auto text-[15px] leading-[2] text-white/75">
            Explore the atmosphere,
            architecture, luxury interiors,
            breathtaking views and slow
            mountain living that define our
            boutique Kasauli retreat.
          </p>

        </motion.div>

      </section>

      {/* GALLERY GRID */}
      <section className="px-[6%] py-24">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">

          <div>

            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#8b7355] mb-6">

              <Mountain size={14} />

              Curated Collection

            </div>

            <h2 className="text-[clamp(40px,6vw,78px)] leading-[0.95] tracking-[-0.05em] text-[#2a2218] font-light">

              Discover the
              <br />

              <span className="italic text-[#b89156]">
                mountain aesthetic
              </span>

            </h2>

          </div>

          <p className="max-w-[460px] text-[15px] leading-[2] text-[#6d6254]">
            Every corner is designed to
            create a cinematic luxury
            experience blending modern
            comfort with timeless Himalayan
            charm.
          </p>

        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[34px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] break-inside-avoid"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-40"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] tracking-[0.24em] uppercase text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

                  {item.category}

                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <h3 className="text-[30px] leading-[1] tracking-[-0.04em] text-white font-light">

                        {item.title}

                      </h3>

                      <div className="flex items-center gap-2 mt-4 text-white/75 text-[12px] tracking-[0.18em] uppercase">

                        <MapPin size={13} />

                        {item.location}

                      </div>

                    </div>

                    <button className="w-[56px] h-[56px] rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white hover:text-black">

                      <ArrowRight size={20} />

                    </button>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-[6%] pb-28">

        <div className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#1f1a14] via-[#2b2118] to-[#3b2d20] px-10 md:px-16 py-20 text-center">

          {/* GLOW */}
          <div className="absolute top-[-150px] right-[-80px] w-[350px] h-[350px] rounded-full bg-[#d4af6d25] blur-3xl" />

          <div className="relative z-10 max-w-[760px] mx-auto">

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] tracking-[0.24em] uppercase text-[#f5e7ca] mb-8">

              Experience Kasauli

            </div>

            <h2 className="text-[clamp(42px,6vw,88px)] leading-[0.92] tracking-[-0.06em] text-white font-light">

              Ready for your
              <br />

              <span className="italic text-[#d4af6d]">
                luxury mountain stay?
              </span>

            </h2>

            <p className="mt-8 text-[15px] leading-[2] text-white/70 max-w-[620px] mx-auto">
              Wake up to panoramic Himalayan
              views, slow mornings, pine
              forests and handcrafted luxury
              experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

              <button className="group relative overflow-hidden h-[62px] px-10 rounded-full bg-[#d4af6d] text-[#1f1a14] text-[11px] tracking-[0.24em] uppercase shadow-[0_20px_45px_rgba(212,175,109,0.22)] transition-all duration-500 hover:scale-105">

                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.28)_40%,transparent_60%)] -translate-x-[140%] group-hover:translate-x-[140%] transition-transform duration-[1800ms]" />

                <span className="relative z-10">
                  Book Your Stay
                </span>

              </button>

              <button className="h-[62px] px-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white text-[11px] tracking-[0.24em] uppercase transition-all duration-500 hover:bg-white hover:text-black">

                Explore Rooms

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default GalleryPage;