import { motion } from "framer-motion";

import {
  Users,
  BedDouble,
  Ruler,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Coffee,
  Mountain,
  Bath,
  Tv,
} from "lucide-react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
const amenityIcons = {

  "WiFi": Wifi,

  "High-Speed WiFi": Wifi,

  "Breakfast": Coffee,

  "Breakfast Included": Coffee,

  "Mountain View": Mountain,

  "Forest View": Mountain,

  "Panoramic View": Mountain,

  "Luxury Bathroom": Bath,

  "Luxury Bath": Bath,

  "Smart TV": Tv,

  "Entertainment": Tv,

};
const RoomDetailPage = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const room = location.state;

  const [activeImage, setActiveImage] =
    useState(0);

  // REDIRECT IF NO ROOM DATA
  if (!room) {
    navigate("/rooms");
    return null;
  }

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === room.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0
        ? room.images.length - 1
        : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#f7f3ee] min-h-screen">

      {/* AMBIENT LIGHT */}
      <div className="absolute top-[-250px] right-[-100px] w-[700px] h-[700px] rounded-full bg-[#d4af6d12] blur-3xl pointer-events-none" />

      {/* HERO */}
      <section className="relative h-[92vh] overflow-hidden">

        {/* IMAGE */}
        <img
          src={room.images[activeImage]}
          alt={room.name}
          className="w-full h-full object-cover scale-110 transition-transform duration-[4000ms] hover:scale-125"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

        {/* LEFT ARROW */}
        <button
          onClick={prevImage}
          className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-500 hover:bg-white/20"
        >

          <ChevronLeft size={22} />

        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextImage}
          className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-500 hover:bg-white/20"
        >

          <ChevronRight size={22} />

        </button>

        {/* PRICE BADGE */}
        <div className="absolute top-[110px] md:top-[130px] right-5 md:right-8 z-20">

          <div className="rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 px-6 py-4">

            <div className="text-white text-[26px] leading-none">
              ₹{room.pricePerNight}
            </div>

            <div className="mt-2 text-[9px] tracking-[0.22em] uppercase text-[#d4c6af]">
              Per Night
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end">

          <div className="w-full px-[5%] pb-14 md:pb-20">

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
              className="max-w-[900px]"
            >

              {/* LABEL */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#f5e7ca] mb-7">

                Luxury Mountain Suite

              </div>

              {/* TITLE */}
              <h1
              
                className="text-[clamp(58px,10vw,140px)] leading-[0.9] font-light text-white"
              >
                {room.name}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[700px] text-[12px] md:text-[13px] leading-[2.1] tracking-[0.05em] text-[#e7dcc8]">

                {room.description}

              </p>

              {/* INFO */}
              <div className="mt-10 flex flex-wrap gap-4">

                {[
                  {
                    icon: Users,
                    label: `${room.maxGuests} Guests`,
                  },

                  {
                    icon: Ruler,
                    label: room.size,
                  },

                  {
                    icon: BedDouble,
                    label: room.bedType,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl"
                  >

                    <item.icon
                      size={18}
                      className="text-[#f5e7ca]"
                    />

                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#f5e7ca]">
                      {item.label}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

        {/* IMAGE COUNTER */}
        <div className="absolute bottom-8 right-5 md:right-8 z-20">

          <div className="rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 text-[10px] tracking-[0.22em] uppercase text-white">

            {activeImage + 1} / {room.images.length}

          </div>

        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#f7f3ee] to-transparent" />

      </section>

      {/* CONTENT */}
      <section className="relative z-10 px-[5%] py-[90px] md:py-[130px]">

        <div className="grid xl:grid-cols-[1fr,420px] gap-10 xl:gap-14">

          {/* LEFT */}
          <div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

              {room.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setActiveImage(index)
                  }
                  className={`relative overflow-hidden rounded-[22px] flex-shrink-0 transition-all duration-500 ${
                    activeImage === index
                      ? "ring-2 ring-[#b89156] scale-[1.03]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >

                  <img
                    src={img}
                    alt=""
                    className="w-[120px] h-[90px] object-cover"
                  />

                </button>
              ))}

            </div>

            {/* ABOUT */}
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
              className="mt-16"
            >

              <div className="inline-flex items-center px-5 py-3 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#7b6646] mb-7">

                About The Room

              </div>

              <h2
               
                className="text-[48px] md:text-[72px] leading-[0.95] font-light text-[#2a2218]"
              >
                Crafted for
                <br />

                <span className="italic text-[#b89156]">
                  peaceful stays
                </span>

              </h2>

              <p className="mt-8 text-[13px] leading-[2.1] tracking-[0.05em] text-[#6d6254] max-w-[850px]">

                {room.description}

              </p>

            </motion.div>

            {/* AMENITIES */}
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
              className="mt-20"
            >

              <div className="inline-flex items-center px-5 py-3 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#7b6646] mb-7">

                Room Amenities

              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
{room.amenities.map(
  (amenity, index) => {

    const Icon =
      amenityIcons[amenity] || BedDouble;

    return (
      <div
        key={index}
        className="group rounded-[30px] border border-[#b8915615] bg-white/75 backdrop-blur-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-white"
      >

        <div className="w-[62px] h-[62px] rounded-full bg-[#1f1a14] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">

          <Icon
            size={24}
            className="text-[#f5e7ca]"
          />

        </div>

        <div
         
          className="text-[32px] leading-none text-[#2a2218]"
        >
          {amenity}
        </div>

      </div>
    );
  }
)}

              </div>

            </motion.div>

          </div>

          {/* RIGHT BOOKING CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="xl:sticky xl:top-[120px] h-fit"
          >

            <div className="relative overflow-hidden rounded-[38px] border border-[#b8915615] bg-white/75 backdrop-blur-2xl p-7 md:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.06)]">

              {/* GLOW */}
              <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-[#d4af6d12] blur-3xl" />

              {/* PRICE */}
              <div className="relative z-10">

                <div className="text-[10px] tracking-[0.24em] uppercase text-[#8b7355] mb-4">
                  Starting From
                </div>

                <div
                 
                  className="text-[68px] leading-none text-[#2a2218]"
                >
                  ₹{room.pricePerNight}
                </div>

                <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-[#8b7355]">
                  Per Night · ₹{room.pricePerPerson}/Person
                </div>

              </div>

              {/* RATING */}
              <div className="relative z-10 mt-10 flex items-center gap-2">

                {Array.from({
                  length: 5,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#d4af6d] text-[#d4af6d]"
                  />
                ))}

                <span className="ml-2 text-[11px] tracking-[0.14em] uppercase text-[#8b7355]">
                  Guest Favourite
                </span>

              </div>

              {/* FORM */}
              <div className="relative z-10 mt-10 space-y-5">

                <input
                  type="date"
                  className="w-full h-[60px] rounded-[22px] border border-[#b8915620] bg-[#faf7f2] px-6 text-[12px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156]"
                />

                <input
                  type="date"
                  className="w-full h-[60px] rounded-[22px] border border-[#b8915620] bg-[#faf7f2] px-6 text-[12px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156]"
                />

                <select className="w-full h-[60px] rounded-[22px] border border-[#b8915620] bg-[#faf7f2] px-6 text-[12px] tracking-[0.04em] text-[#2a2218] outline-none transition-all duration-500 focus:border-[#b89156]">

                  <option>
                    2 Guests
                  </option>

                  <option>
                    3 Guests
                  </option>

                  <option>
                    4 Guests
                  </option>

                </select>

                {/* BOOK */}
                <button className="group relative overflow-hidden w-full h-[60px] rounded-full bg-gradient-to-r from-[#1f1a14] to-[#3a2d20] text-[#f5e7ca] text-[10px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]">

                  <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

                  <span className="relative z-10 flex items-center justify-center gap-3">

                    Reserve Your Stay

                    <ArrowRight
                      size={16}
                    />

                  </span>

                </button>

                {/* WHATSAPP */}
                <button className="w-full h-[58px] rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[10px] tracking-[0.22em] uppercase text-[#6d5b42] transition-all duration-500 hover:-translate-y-1 hover:bg-white">

                  WhatsApp Enquiry

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default RoomDetailPage;