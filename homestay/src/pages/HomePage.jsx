import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Mountain,
  Star,
  Trees,
  MessageCircle,
} from "lucide-react";

const KasauliHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f6f1e8]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
          alt="Kasauli Mountains"
          className="h-full w-full object-cover scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
        />

        {/* warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f1e8]/70 via-[#f6f1e8]/40 to-[#f6f1e8]" />

        {/* soft blur layer */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Floating gradients */}
      <div className="absolute top-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#d6b98c]/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#c8d1bf]/40 blur-3xl" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 md:px-12 lg:px-20">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}
          <div>
            {/* Top Label */}
            <div
              className={`mb-8 inline-flex items-center gap-3 rounded-full border border-[#c7b08a]/40 bg-white/50 px-5 py-2 backdrop-blur-md transition-all duration-1000 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Mountain className="h-4 w-4 text-[#8f6b3d]" />
              <span className="font-[Josefin_Sans] text-[11px] uppercase tracking-[0.35em] text-[#7c6647]">
                Kasauli · Himachal Pradesh
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transition-all duration-1000 delay-150 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="font-[Cormorant_Garamond] text-[54px] font-light leading-[0.95] tracking-[-0.03em] text-[#2d261d] sm:text-[72px] md:text-[92px] lg:text-[110px]">
                Stay where
                <br />
                <span className="italic text-[#9f7a47]">
                  the pines whisper
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`mt-8 max-w-xl font-[Josefin_Sans] text-[15px] leading-[2] tracking-[0.04em] text-[#6d5c47] transition-all duration-1000 delay-300 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              Experience slow mountain living in our luxury 4-floor homestay
              perched above the serene Kasauli hills. Wake up to misty mornings,
              pine-scented air, private balconies, and breathtaking valley
              views.
            </p>

            {/* Buttons */}
            <div
              className={`mt-12 flex flex-wrap gap-5 transition-all duration-1000 delay-500 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <button
                className="group relative overflow-hidden rounded-full bg-[#2f261c] px-8 py-4 font-[Josefin_Sans] text-[12px] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
                onClick={() => console.log("Book Now")}
              >
                <span className="relative z-10">Book Now</span>

                <div className="absolute inset-0 translate-y-full bg-[#9f7a47] transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              <button
                className="group flex items-center gap-3 rounded-full border border-[#c8b18a] bg-white/60 px-8 py-4 font-[Josefin_Sans] text-[12px] uppercase tracking-[0.25em] text-[#5c4a36] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:bg-white"
                onClick={() =>
                  window.open("https://wa.me/919999999999", "_blank")
                }
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </button>
            </div>

            {/* Stats */}
            <div
              className={`mt-20 grid max-w-2xl grid-cols-2 gap-y-10 border-t border-[#cbb79a]/40 pt-10 sm:grid-cols-4 transition-all duration-1000 delay-700 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {[
                ["4", "Luxury Floors"],
                ["12+", "Room Options"],
                ["1800m", "Mountain Altitude"],
                ["5★", "Guest Rating"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h3 className="font-[Cormorant_Garamond] text-4xl font-medium text-[#9f7a47]">
                    {num}
                  </h3>

                  <p className="mt-2 font-[Josefin_Sans] text-[10px] uppercase tracking-[0.28em] text-[#7f705e]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Card */}
          <div
            className={`relative hidden lg:block transition-all duration-[1400ms] delay-500 ${
              loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <div className="relative rounded-[32px] border border-white/40 bg-white/50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
                alt="Homestay"
                className="h-[500px] w-full rounded-[26px] object-cover"
              />

              {/* Floating mini card */}
              <div className="absolute -bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-white/50 bg-[#fffdf9]/80 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[Cormorant_Garamond] text-2xl text-[#2d261d]">
                      Pine View Suites
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <Trees className="h-4 w-4 text-[#9f7a47]" />

                      <span className="font-[Josefin_Sans] text-xs uppercase tracking-[0.2em] text-[#7b6950]">
                        Valley Facing Rooms
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#f4ead7] px-4 py-2">
                    <Star className="h-4 w-4 fill-[#9f7a47] text-[#9f7a47]" />

                    <span className="font-[Josefin_Sans] text-sm text-[#6b5434]">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-[Josefin_Sans] text-[10px] uppercase tracking-[0.35em] text-[#7c6a55]">
          Scroll
        </span>

        <ChevronDown className="h-5 w-5 animate-bounce text-[#8d7149]" />
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes slowZoom {
            0% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1.15);
            }
          }
        `}
      </style>
    </section>
  );
};

export default KasauliHero;