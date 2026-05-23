import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="relative overflow-hidden bg-[#f7f3ee] min-h-screen">

      {/* AMBIENT LIGHTS */}
      <div className="absolute top-[-300px] right-[-120px] w-[700px] h-[700px] rounded-full bg-[#d4af6d18] blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-300px] left-[-160px] w-[700px] h-[700px] rounded-full bg-[#b8915610] blur-3xl pointer-events-none" />

      {/* HERO */}
      <section className="relative px-[5%] pt-[120px] md:pt-[150px] pb-[90px] md:pb-[120px]">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >

            {/* LABEL */}
            <div className="inline-flex items-center gap-3 px-4 md:px-5 py-3 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#7b6646] mb-7">

              Contact Mountain Stay

            </div>

            {/* TITLE */}
            <h1
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
              className="text-[clamp(52px,14vw,120px)] leading-[0.9] font-light text-[#2a2218]"
            >
              Let the
              <br />

              <span className="italic text-[#b89156]">
                mountains
              </span>

              <br />

              welcome you

            </h1>

            {/* TEXT */}
            <p className="mt-8 md:mt-10 max-w-[620px] mx-auto lg:mx-0 text-[12px] md:text-[13px] leading-[2] tracking-[0.05em] text-[#6d6254]">

              Escape into peaceful pine
              forests, panoramic Himalayan
              views and luxury boutique
              living crafted for unforgettable
              mountain experiences in
              beautiful Kasauli.

            </p>

            {/* BUTTONS */}
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              {/* BOOK */}
              <button className="group relative overflow-hidden h-[56px] md:h-[58px] px-8 md:px-10 rounded-full bg-gradient-to-r from-[#1f1a14] to-[#3a2d20] text-[#f5e7ca] text-[9px] md:text-[10px] tracking-[0.22em] uppercase transition-all duration-500 hover:scale-[1.02]">

                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

                <span className="relative z-10">
                  Book Your Stay
                </span>

              </button>

              {/* WHATSAPP */}
              <button className="group h-[56px] md:h-[58px] px-8 md:px-10 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl flex items-center justify-center gap-3 text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#6d5b42] transition-all duration-500 hover:-translate-y-1 hover:bg-white">

                WhatsApp Enquiry

                <ArrowUpRight
                  size={14}
                  className="transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </button>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative order-1 lg:order-2"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[34px] md:rounded-[46px] h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] shadow-[0_30px_90px_rgba(0,0,0,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2200"
                alt="Mountain Stay"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-5 md:p-7">

                <div className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#d4c6af] mb-3 md:mb-4">
                  Kasauli · Himachal Pradesh
                </div>

                <h3
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                  className="text-[32px] sm:text-[40px] md:text-[50px] leading-[0.95] text-white mb-4"
                >
                  Above the
                  <br />

                  Himalayan valleys

                </h3>

                <p className="text-[11px] md:text-[12px] leading-[2] tracking-[0.05em] text-[#e7dcc8]">

                  Peaceful mornings, luxury
                  interiors and breathtaking
                  mountain landscapes await
                  your stay.

                </p>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="hidden xl:block absolute -left-10 bottom-14">

              <div className="rounded-[28px] border border-[#b8915620] bg-white/80 backdrop-blur-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <div
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                  className="text-[52px] leading-none text-[#b89156]"
                >
                  5★
                </div>

                <div className="mt-3 text-[10px] tracking-[0.24em] uppercase text-[#7b6646]">
                  Luxury Rated
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 px-[5%] pb-[120px]">

        <div className="grid xl:grid-cols-[0.85fr,1.15fr] gap-10 xl:gap-14">

          {/* LEFT INFO */}
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
            className="space-y-5"
          >

            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 99999 99999",
              },

              {
                icon: Mail,
                title: "Email Address",
                value: "stay@mountainstay.com",
              },

              {
                icon: MapPin,
                title: "Location",
                value:
                  "Near Mountain Ridge, Kasauli",
              },

              {
                icon: Clock,
                title: "Reception",
                value:
                  "Open Daily · 8 AM — 10 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#b8915615] bg-white/70 backdrop-blur-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-white"
              >

                <div className="absolute -top-20 -right-16 w-[180px] h-[180px] rounded-full bg-[#d4af6d10] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative z-10 flex items-start gap-4 md:gap-6">

                  {/* ICON */}
                  <div className="w-[58px] h-[58px] md:w-[68px] md:h-[68px] rounded-full bg-[#1f1a14] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 flex-shrink-0">

                    <item.icon
                      size={22}
                      className="text-[#f5e7ca]"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0">

                    <div className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#8b7355] mb-3">
                      {item.title}
                    </div>

                    <div
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                      className="text-[26px] sm:text-[30px] md:text-[36px] leading-[1.15] text-[#2a2218] break-words"
                    >
                      {item.value}
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

          {/* FORM */}
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
            className="relative overflow-hidden rounded-[34px] md:rounded-[42px] border border-[#b8915615] bg-white/75 backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
          >

            {/* GLOW */}
            <div className="absolute top-[-140px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[#d4af6d15] blur-3xl" />

            {/* TITLE */}
            <div className="relative z-10 mb-10">

              <div className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#8b7355] mb-4">
                Send Enquiry
              </div>

              <h2
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
                className="text-[46px] sm:text-[58px] md:text-[72px] leading-[0.92] font-light text-[#2a2218]"
              >
                Plan your
                <br />

                <span className="italic text-[#b89156]">
                  mountain stay
                </span>

              </h2>

            </div>

            {/* FORM */}
            <form className="relative z-10 space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-[58px] md:h-[64px] rounded-[20px] md:rounded-[24px] border border-[#b8915620] bg-[#faf7f2] px-6 md:px-7 text-[12px] md:text-[13px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156] focus:bg-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[58px] md:h-[64px] rounded-[20px] md:rounded-[24px] border border-[#b8915620] bg-[#faf7f2] px-6 md:px-7 text-[12px] md:text-[13px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156] focus:bg-white"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-[58px] md:h-[64px] rounded-[20px] md:rounded-[24px] border border-[#b8915620] bg-[#faf7f2] px-6 md:px-7 text-[12px] md:text-[13px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156] focus:bg-white"
                />

                <input
                  type="text"
                  placeholder="Check-in Date"
                  className="h-[58px] md:h-[64px] rounded-[20px] md:rounded-[24px] border border-[#b8915620] bg-[#faf7f2] px-6 md:px-7 text-[12px] md:text-[13px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156] focus:bg-white"
                />

              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your stay requirements..."
                className="w-full rounded-[24px] md:rounded-[30px] border border-[#b8915620] bg-[#faf7f2] p-6 md:p-7 text-[12px] md:text-[13px] leading-[2] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156] focus:bg-white resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="group relative overflow-hidden w-full h-[58px] md:h-[64px] rounded-full bg-gradient-to-r from-[#1f1a14] to-[#3a2d20] text-[#f5e7ca] text-[9px] md:text-[10px] tracking-[0.22em] uppercase transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
              >

                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

                <span className="relative z-10">
                  Send Your Enquiry
                </span>

              </button>

            </form>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default ContactPage;