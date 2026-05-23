import { motion } from "framer-motion";

import {
  Wifi,
  UtensilsCrossed,
  Flame,
  Car,
  ShieldCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef } from "react";
import {
  getHomepageImage,
} from "../../services/api";
import { jsx } from "react/jsx-runtime";
const ICONS = {

  Wifi: Wifi,

  Utensils:
    UtensilsCrossed,

  Flame: Flame,

  ParkingCircle: Car,

  BatteryCharging:
    ShieldCheck,

  ShieldCheck:
    ShieldCheck,
};

const FloorsSection = ({
  floors,
  amenities,
}) => {
console.log("floors and ameneties are"+JSON.stringify(floors)+JSON.stringify(amenities))
  const sliderRef = useRef(null);

  const scrollLeft = () => {

    sliderRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };
const floorImages = [

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",

  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
];
  const scrollRight = () => {

    sliderRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        bg-[#f7f3ed]
        pt-[75px]
        pb-[70px]
        overflow-hidden
      "
    >

      <div
        className="
          max-w-[1450px]
          mx-auto
          px-[4%]
        "
      >

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

          className="
            relative
            text-center
            mb-14
          "
        >

          {/* LINE */}
          <div
            className="
              absolute
              left-0
              top-[13px]
              w-full
              h-[1px]
              bg-[#e4d8ca]
            "
          />

          <div
            className="
              relative
              inline-flex
              items-center
              justify-center
              px-6
              bg-[#f7f3ed]
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-[#bb9158]
              font-semibold
            "
          >

           OUR ESTATE
          </div>

          <h2
            className="
              mt-5
              font-heading
              text-[#1b1815]
              text-[clamp(34px,4vw,60px)]
              leading-[1]
              tracking-[-0.05em]
              font-[500]
            "
          >

            Five Floors of Luxury & Comfort

          </h2>

        </motion.div>

        {/* MAIN WRAP */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="
              hidden
              lg:flex
              absolute
              left-[-22px]
              top-1/2
              -translate-y-1/2
              z-20
              w-[52px]
              h-[52px]
              rounded-full
              bg-white
              border
              border-[#e7dccf]
              shadow-[0_12px_35px_rgba(0,0,0,0.10)]
              items-center
              justify-center
              text-[#1d1b18]
              transition-all
              duration-300
              hover:bg-[#062d21]
              hover:text-white
            "
          >

            <ChevronLeft size={20} />

          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="
              hidden
              lg:flex
              absolute
              right-[-22px]
              top-1/2
              -translate-y-1/2
              z-20
              w-[52px]
              h-[52px]
              rounded-full
              bg-white
              border
              border-[#e7dccf]
              shadow-[0_12px_35px_rgba(0,0,0,0.10)]
              items-center
              justify-center
              text-[#1d1b18]
              transition-all
              duration-300
              hover:bg-[#062d21]
              hover:text-white
            "
          >

            <ChevronRight size={20} />

          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
           className="
  flex
  gap-6
  overflow-x-auto
  scroll-smooth
  pb-4
  no-scrollbar
"
          >

          {floors?.map(
  (item, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
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

                className="
                  group
                  relative
                  shrink-0
                  w-[88vw]
                  sm:w-[420px]
                  lg:w-[32%]
                  min-w-0
                  bg-white
                  rounded-[22px]
                  border
                  border-[#ebe1d3]
                  overflow-hidden
                  shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    relative
                    h-[250px]
                    overflow-hidden
                  "
                >

                  <img
                    src={floorImages[index]}
                    alt={item.title}
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
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* FLOOR TAG */}
                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      px-4
                      py-[10px]
                      rounded-full
                      bg-white/92
                      backdrop-blur-xl
                      text-[10px]
                      uppercase
                      tracking-[0.20em]
                      text-[#1d1b18]
                      font-semibold
                    "
                  >

                    {item.title}

                  </div>

                  {/* PRICE */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-white/70
                      "
                    >

                      Starting From

                    </p>

                    <div
                      className="
                        flex
                        items-end
                        gap-1
                      "
                    >

                      <span
                        className="
                          text-white
                          text-[34px]
                          leading-none
                          font-semibold
                        "
                      >

                        {item.price}

                      </span>

                      <span
                        className="
                          text-white/70
                          text-[11px]
                          mb-[5px]
                        "
                      >

                        /night

                      </span>

                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div
                  className="
                    px-7
                    pt-6
                    pb-7
                    text-center
                  "
                >

                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.24em]
                      text-[#b89156]
                      font-medium
                    "
                  >

                    {item.title}

                  </p>

                  <h3
                    className="
                      mt-3
                      font-heading
                      text-[#1d1b18]
                      text-[32px]
                      leading-[1]
                      tracking-[-0.04em]
                      font-[500]
                    "
                  >

                    {item.subtitle}

                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.9]
                      text-[#6f6559]
                      min-h-[74px]
                    "
                  >

                    {item.description}

                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      mt-6
                      w-full
                      h-[52px]
                      rounded-[12px]
                      bg-[#062d21]
                      text-white
                      text-[11px]
                      uppercase
                      tracking-[0.24em]
                      transition-all
                      duration-500
                      hover:bg-[#0c3c2d]
                    "
                  >

                    Explore Floor

                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* AMENITIES STRIP */}
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

          className="
            mt-12
            rounded-[18px]
            overflow-hidden
            bg-[linear-gradient(90deg,#08261b,#0e392a,#08261b)]
            shadow-[0_18px_55px_rgba(0,0,0,0.10)]
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
            "
          >

            {amenities?.map(
  (item, index) => {

            const Icon =
  ICONS[item.icon];

              return (
                <div
                  key={index}

                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    py-7
                    px-4
                    border-white/10
                    lg:border-r
                    last:border-r-0
                  "
                >

                  <Icon
                    size={25}
                    className="
                      text-[#d6ad6d]
                    "
                  />

                  <span
                    className="
                      text-white
                      text-[13px]
                    "
                  >

                    {item.title}

                  </span>

                </div>
              );
            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FloorsSection;