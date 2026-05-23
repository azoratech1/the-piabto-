import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import {
  useEffect,
  useState,
} from "react";
import {
  getRooms,
  getRoomImage,
} from "../services/api";
// const ROOMS = [
//   {
//     id: 1,
//     name: "Premium Valley Room",
//     description:
//       "Luxury mountain stay with panoramic valley views, handcrafted interiors and peaceful private balconies.",
//     pricePerNight: 6500,
//     pricePerPerson: 2200,
//     maxGuests: 2,
//     size: "420 sq.ft",
//     bedType: "King Bed",
//     images: [
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800",
//     ],
//     amenities: [
//       "Mountain View",
//       "Private Balcony",
//       "Breakfast",
//       "WiFi",
//     ],
//   },

//   {
//     id: 2,
//     name: "Luxury Pine Suite",
//     description:
//       "Elegant suite surrounded by pine forests featuring warm interiors and luxury boutique aesthetics.",
//     pricePerNight: 8500,
//     pricePerPerson: 2800,
//     maxGuests: 3,
//     size: "620 sq.ft",
//     bedType: "Queen Bed",
//     images: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800",
//     ],
//     amenities: [
//       "Forest View",
//       "Luxury Bathroom",
//       "Fireplace",
//       "WiFi",
//     ],
//   },

//   {
//     id: 3,
//     name: "Mountain Family Stay",
//     description:
//       "Spacious family retreat designed for unforgettable mountain mornings and luxury scenic living.",
//     pricePerNight: 12000,
//     pricePerPerson: 3500,
//     maxGuests: 5,
//     size: "850 sq.ft",
//     bedType: "2 King Beds",
//     images: [
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800",
//     ],
//     amenities: [
//       "Family Suite",
//       "Balcony",
//       "Living Area",
//       "Breakfast",
//     ],
//   },

//   {
//     id: 4,
//     name: "Sunrise Balcony Room",
//     description:
//       "Wake up above the clouds with uninterrupted Himalayan sunrise views from your private balcony.",
//     pricePerNight: 7200,
//     pricePerPerson: 2500,
//     maxGuests: 2,
//     size: "480 sq.ft",
//     bedType: "King Bed",
//     images: [
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800",
//     ],
//     amenities: [
//       "Sunrise View",
//       "Private Balcony",
//       "Luxury Stay",
//       "WiFi",
//     ],
//   },
// ];

const RoomsPage = () => {
    const navigate = useNavigate();
    const [rooms, setRooms] =
  useState([]);

const [loading, setLoading] =
  useState(true);
  useEffect(() => {

  const fetchRooms = async () => {

    try {

      const res =
        await getRooms();

      setRooms(res.data.rooms);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  fetchRooms();

}, []);
if (loading) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f6f1e8]">

      <div className="w-14 h-14 rounded-full border-2 border-[#b89156] border-t-transparent animate-spin" />

    </div>
  );
}
  return (
    <div className="relative overflow-hidden bg-[#f6f1e8] min-h-screen">

      {/* AMBIENT GLOWS */}
      <div className="absolute top-[-250px] right-[-180px] w-[700px] h-[700px] rounded-full bg-[#d4b48315] blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-350px] left-[-220px] w-[700px] h-[700px] rounded-full bg-[#b8915610] blur-3xl pointer-events-none" />

      {/* HERO */}
  {/* SIMPLE PREMIUM HERO */}
<section className="relative h-[78vh] overflow-hidden rounded-b-[50px]">

  {/* BACKGROUND IMAGE */}
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200"
    alt="Rooms Hero"
    className="w-full h-full object-cover scale-105"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/65" />

  {/* SOFT GLOW */}
  <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#d4af6d20] blur-3xl" />

  {/* CONTENT */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-[6%]">

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
      <div className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-[10px] tracking-[0.28em] uppercase text-[#f5e7ca] mb-8">

        Luxury Mountain Retreat

      </div>

      {/* HEADING */}
      <h1
       
        className="text-[clamp(58px,8vw,120px)] leading-[0.9] font-light text-white"
      >
        Luxury stays
        <br />

        <span className="italic text-[#d4af6d]">
          in Kasauli
        </span>

      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 max-w-[700px] mx-auto text-[13px] leading-[2.1] tracking-[0.08em] text-[#e7dcc8]">

        Boutique mountain rooms designed
        for peaceful mornings, panoramic
        Himalayan views and unforgettable
        luxury living experiences.

      </p>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-wrap justify-center gap-5">

        {/* BOOK */}
        <button className="group relative overflow-hidden h-[58px] px-10 rounded-full bg-[#f5e7ca] text-[#1f1a14] text-[10px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(255,255,255,0.12)]">

          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.45)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

          <span className="relative z-10">
            Book Your Stay
          </span>

        </button>

        {/* WHATSAPP */}
        <button className="h-[58px] px-10 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl text-[10px] tracking-[0.24em] uppercase text-white transition-all duration-500 hover:bg-white/15 hover:-translate-y-1">

          WhatsApp Enquiry

        </button>

      </div>

    </motion.div>

  </div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#f6f1e8] to-transparent" />

</section>
      {/* CONTENT */}
      <section className="relative z-10 px-[6%] py-[140px]">

        {/* SECTION HEADER */}
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
          className="text-center mb-24"
         
        >

          <div className="inline-flex items-center px-5 py-3 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[10px] tracking-[0.28em] uppercase text-[#7b6646] mb-7">

            Boutique Mountain Living

          </div>

          <h2
         
            className="text-[clamp(52px,6vw,100px)] leading-[0.92] font-light text-[#2a2218]"
          >
            Crafted for
            <br />

            <span className="italic text-[#b89156]">
              peaceful stays
            </span>

          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {rooms.map((room, index) => (
            <motion.div
              key={room._id}
               onClick={() =>
    navigate(`/rooms/${room._id}`, {
      state: room,
    })
  }
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer relative overflow-hidden rounded-[46px] bg-white/70 backdrop-blur-2xl border border-[#b8915615] shadow-[0_25px_70px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-4 hover:rotate-[0.2deg] hover:shadow-[0_45px_100px_rgba(0,0,0,0.12)]"
            >

              {/* INNER GLOW */}
              <div className="absolute inset-0 rounded-[46px] bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />

              {/* FLOATING LIGHT */}
              <div className="absolute -bottom-24 -right-20 w-[240px] h-[240px] rounded-full bg-[#d4af6d15] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* IMAGE */}
              <div className="relative overflow-hidden h-[440px]">

                {/* NOISE */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />

                <img
                 src={getRoomImage(
  room._id,
  0
)}
                  alt={room.title}
                  className="w-full h-full object-cover transition-all duration-[2500ms] group-hover:scale-110 group-hover:opacity-45"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-all duration-700" />

                {/* PRICE */}
                <div className="absolute top-7 right-7 z-20">

                  <div className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/15">

                    <div className="text-white text-[24px] leading-none">
                      ₹{room.pricePerRoom}
                    </div>

                    <div className="mt-1 text-[8px] tracking-[0.24em] uppercase text-[#d4c6af]">
                      Per Night
                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="absolute bottom-8 left-8 right-8 z-20">

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 text-[10px] tracking-[0.24em] uppercase text-[#d4c6af] mb-4">
                    Luxury Mountain Stay
                  </div>

                  <h2
                  
                    className="text-[52px] leading-[0.92] text-white"
                  >
                    {room.title}
                  </h2>

                </div>

              </div>

              {/* BODY */}
              <div className="relative z-10 p-9 md:p-10">

                {/* DESCRIPTION */}
                <p className="text-[13px] leading-[2.1] tracking-[0.05em] text-[#6d6254] mb-9">
                  {room.description}
                </p>

                {/* INFO */}
                <div className="grid grid-cols-3 gap-5 mb-9">

                  {[
                    {
                      label: "Guests",
                      value: room.maxGuests,
                    },

                    {
                      label: "Size",
                      value: room.size,
                    },

                    {
                      label: "Bed",
                      value: room.bedType,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[28px] border border-[#b8915615] bg-[#faf7f2] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white"
                    >

                      <div className="text-[10px] tracking-[0.22em] uppercase text-[#8b7355] mb-3">
                        {item.label}
                      </div>

                      <div
                      
                        className="text-[30px] leading-none text-[#2a2218]"
                      >
                        {item.value}
                      </div>

                    </div>
                  ))}

                </div>

                {/* AMENITIES */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {room.amenities.map((item) => (
                    <div
                      key={item}
                      className="px-5 py-3 rounded-full border border-[#b8915620] bg-white/80 backdrop-blur-xl text-[9px] tracking-[0.18em] uppercase text-[#7b6646] transition-all duration-500 hover:-translate-y-1 hover:bg-white"
                    >
                      {item}
                    </div>
                  ))}

                </div>

                {/* FOOTER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-7">

                  {/* PRICE */}
                  <div>

                    <div className="text-[10px] tracking-[0.24em] uppercase text-[#8b7355] mb-3">
                      Per Person
                    </div>

                    <div
                    
                      className="text-[52px] leading-none text-[#b89156]"
                    >
                      ₹{room.pricePerPerson}
                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4">

                    {/* DETAILS */}
                    <button className="group relative overflow-hidden h-[56px] px-8 rounded-full border border-[#b8915620] bg-white/70 backdrop-blur-xl text-[10px] tracking-[0.24em] uppercase text-[#6d5b42] transition-all duration-500 hover:-translate-y-1 hover:bg-white" 
  onClick={(e) => {

    e.stopPropagation();

    navigate(`/rooms/${room._id}`, {
      state: room,
    });

  }}>

                      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.4)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

                      <span className="relative z-10">
                        View Details
                      </span>

                    </button>

                    {/* BOOK */}
                    <button className="group relative overflow-hidden h-[56px] px-9 rounded-full bg-gradient-to-r from-[#1f1a14] to-[#3a2d20] text-[#f5e7ca] text-[10px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]"  onClick={(e) => {

    e.stopPropagation();

    navigate(`/rooms/${room._id}`, {
      state: room,
    });

  }}>

                      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

                      <span className="relative z-10">
                        Book Now
                      </span>

                    </button>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default RoomsPage;