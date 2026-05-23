import { useState } from "react";

import {
  CalendarDays,
  ChevronDown,
  ArrowRight,
  Building2,
} from "lucide-react";

const BookingStrip = () => {

  const [checkIn, setCheckIn] =
    useState("");

  const [checkOut, setCheckOut] =
    useState("");

  const [floor, setFloor] =
    useState("Entire Estate");

  return (
    <section className="relative px-[4%]">

      <div
        className="
          relative
          
          max-w-[1180px]
          rounded-[18px]
          border
          border-[#d8c5a61c]
          bg-[#f8f5f0f2]
          backdrop-blur-3xl
          shadow-[0_12px_35px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(176,138,87,0.06),transparent_30%)]
            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-[1fr_1fr_0.9fr_auto]
            gap-[1px]
            bg-[#ece3d6]
          "
        >

          {/* CHECK IN */}
          <div
            className="
              h-[64px]
              bg-[#faf7f2]
              px-4
              flex
              items-center
              transition-all
              duration-300
              hover:bg-white
            "
          >

            <div className="flex items-center gap-3 w-full">

              <div
                className="
                  w-[32px]
                  h-[32px]
                  rounded-full
                  bg-[#f1e9dd]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <CalendarDays
                  size={15}
                  className="text-[#b08a57]"
                />

              </div>

              <div className="flex-1">

                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-[#9b8667]
                    mb-[1px]
                  "
                >

                  Check-In

                </div>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-[14px]
                    text-[#1f170f]
                    appearance-none
                  "
                />

              </div>

            </div>

          </div>

          {/* CHECK OUT */}
          <div
            className="
              h-[64px]
              bg-[#faf7f2]
              px-4
              flex
              items-center
              transition-all
              duration-300
              hover:bg-white
            "
          >

            <div className="flex items-center gap-3 w-full">

              <div
                className="
                  w-[32px]
                  h-[32px]
                  rounded-full
                  bg-[#f1e9dd]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <CalendarDays
                  size={15}
                  className="text-[#b08a57]"
                />

              </div>

              <div className="flex-1">

                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-[#9b8667]
                    mb-[1px]
                  "
                >

                  Check-Out

                </div>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) =>
                    setCheckOut(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-[14px]
                    text-[#1f170f]
                    appearance-none
                  "
                />

              </div>

            </div>

          </div>

          {/* FLOOR SELECT */}
          <div
            className="
              h-[64px]
              bg-[#faf7f2]
              px-4
              flex
              items-center
              transition-all
              duration-300
              hover:bg-white
            "
          >

            <div className="flex items-center gap-3 w-full">

              <div
                className="
                  w-[32px]
                  h-[32px]
                  rounded-full
                  bg-[#f1e9dd]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <Building2
                  size={15}
                  className="text-[#b08a57]"
                />

              </div>

              <div className="flex-1 relative">

                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-[#9b8667]
                    mb-[1px]
                  "
                >

                  Floors / Rooms

                </div>

                <select
                  value={floor}
                  onChange={(e) =>
                    setFloor(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-[14px]
                    text-[#1f170f]
                    appearance-none
                    cursor-pointer
                    pr-5
                  "
                >

                  <option value="Entire Estate">
                    Entire Estate
                  </option>

                  <option value="Floor 1">
                    Floor 1 - Heritage Lounge
                  </option>

                  <option value="Floor 2">
                    Floor 2 - Premium Rooms
                  </option>

                  <option value="Floor 3">
                    Floor 3 - Deluxe Rooms
                  </option>

                  <option value="Floor 4">
                    Floor 4 - Family Suites
                  </option>

                  <option value="Floor 5">
                    Floor 5 - Sky Lounge
                  </option>

                </select>

                <ChevronDown
                  size={14}
                  className="
                    absolute
                    right-0
                    top-[20px]
                    text-[#7a6852]
                    pointer-events-none
                  "
                />

              </div>

            </div>

          </div>

          {/* BUTTON */}
          <button
            className="
              group
              relative
              overflow-hidden
              h-[64px]
              px-7
              bg-[#0d2a1f]
              transition-all
              duration-500
              hover:bg-[#163628]
            "
          >

            {/* SHINE */}
            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.08)_40%,transparent_60%)]
                -translate-x-[140%]
                transition-transform
                duration-[1800ms]
                group-hover:translate-x-[140%]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-3
              "
            >

              <div className="text-left">

                <div
                  className="
                    text-[10px]
                    tracking-[0.18em]
                    uppercase
                    text-[#f4e8d2]
                  "
                >

                  Check Availability

                </div>

                <div
                  className="
                    mt-[1px]
                    text-[10px]
                    text-[#ccb089]
                  "
                >

                  Luxury Estate Stay

                </div>

              </div>

              <ArrowRight
                size={16}
                className="
                  text-[#f4e8d2]
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                "
              />

            </div>

          </button>

        </div>

      </div>

    </section>
  );
};

export default BookingStrip;