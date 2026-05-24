import {
  Phone,
  MessageCircle,
  Sparkles,
  X,
  CalendarDays,
  Users,
  BedDouble,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getRooms,
  getFloors,
  createEnquiry,
} from "../../services/api";

const FloatingContactButtons = () => {

  const [open, setOpen] =
    useState(false);

const [formData, setFormData] =
  useState({

    name: "",

    email: "",

    phone: "",

    interestedType: "room",

    interestedIn: "",

    guests: "",

    checkIn: "",
  });

const [rooms, setRooms] =
  useState([]);

const [floors, setFloors] =
  useState([]);
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleWhatsAppSubmit =
  async () => {

    try {

      await createEnquiry({

        name:
          formData.name,

        email:
          formData.email,

        mobile:
          formData.phone,

        interestedType:
          formData.interestedType,

        interestedIn:
          formData.interestedIn,
      });

      const selectedItem =
        formData.interestedType ===
        "room"
          ? rooms.find(
              (r) =>
                r._id ===
                formData.interestedIn
            )
          : floors.find(
              (f) =>
                f._id ===
                formData.interestedIn
            );

      const message = `
Luxury Stay Enquiry

Name: ${formData.name}

Phone: ${formData.phone}

Email: ${formData.email}

Interested In:
${selectedItem?.title || ""}

Guests: ${formData.guests}

Check In:
${formData.checkIn}
`;

      const whatsappUrl =
        `https://wa.me/919999999999?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        whatsappUrl,
        "_blank"
      );

      alert(
        "Enquiry Submitted Successfully"
      );

      setOpen(false);

      setFormData({

        name: "",

        email: "",

        phone: "",

        interestedType: "room",

        interestedIn: "",

        guests: "",

        checkIn: "",
      });

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };
useEffect(() => {

  fetchData();

}, []);

const fetchData =
  async () => {

    try {

      const roomsRes =
        await getRooms();

      const floorsRes =
        await getFloors();

      console.log(
        "ROOMS",
        roomsRes.data
      );

      console.log(
        "FLOORS",
        floorsRes.data
      );

      setRooms(
        roomsRes.data.rooms ||
        roomsRes.data ||
        []
      );

      setFloors(
        floorsRes.data.floors ||
        floorsRes.data ||
        []
      );

    } catch (error) {

      console.log(
        "FETCH ERROR",
        error
      );
    }
  };
  return (
    <>
      {/* DESKTOP FLOATING BUTTONS */}
      <div
        className="
          fixed
          right-0
          top-[73%]
          -translate-y-1/2
          z-[999]
          hidden
          lg:flex
          flex-col
          items-end
        "
      >

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="
            group
            w-[178px]
            h-[52px]
            bg-[#39d353]
            flex
            items-center
            gap-3
            pl-4
            pr-5
            rounded-l-[16px]
            shadow-[0_10px_28px_rgba(0,0,0,0.18)]
            transition-all
            duration-500
            hover:w-[190px]
          "
        >

          {/* ICON */}
          <div
            className="
              w-[30px]
              h-[30px]
              rounded-full
              border
              border-white/30
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <MessageCircle
              size={15}
              className="text-white"
            />

          </div>

          {/* TEXT */}
          <span
            className="
              text-white
              text-[14px]
              font-medium
              tracking-[0.01em]
            "
          >

            WhatsApp

          </span>

        </a>

        {/* ENQUIRY */}
        <button
          onClick={() => setOpen(true)}
          className="
            group
            mt-[8px]
            w-[178px]
            h-[52px]
            bg-[#c89a4c]
            flex
            items-center
            gap-3
            pl-4
            pr-5
            rounded-l-[16px]
            shadow-[0_10px_28px_rgba(0,0,0,0.16)]
            transition-all
            duration-500
            hover:w-[190px]
          "
        >

          {/* ICON */}
          <div
            className="
              w-[30px]
              h-[30px]
              rounded-full
              border
              border-white/30
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <Sparkles
              size={15}
              className="text-white"
            />

          </div>

          {/* TEXT */}
          <span
            className="
              text-white
              text-[14px]
              font-medium
              tracking-[0.01em]
            "
          >

            Enquiry

          </span>

        </button>

        {/* CALL */}
       
      </div>

      {/* MOBILE FLOATING */}
      <div
        className="
          fixed
          bottom-5
          right-5
          z-[999]
          lg:hidden
        "
      >

        <button
          onClick={() => setOpen(true)}
          className="
            w-[58px]
            h-[58px]
            rounded-full
            bg-[#062d21]
            flex
            items-center
            justify-center
            shadow-[0_15px_35px_rgba(0,0,0,0.24)]
          "
        >

          <MessageCircle
            size={22}
            className="text-white"
          />

        </button>

      </div>

      {/* ENQUIRY MODAL */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[1000]
            flex
            items-center
            justify-center
            bg-black/50
            backdrop-blur-md
            px-4
          "
        >

          {/* MODAL */}
          <div
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[30px]
              overflow-hidden
              bg-white
              shadow-[0_40px_120px_rgba(0,0,0,0.22)]
            "
          >

            {/* TOP */}
            <div
              className="
                relative
                px-8
                pt-8
                pb-7
                bg-gradient-to-br
                from-[#062d21]
                via-[#0b3d2d]
                to-[#14543f]
                overflow-hidden
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute
                  top-[-100px]
                  right-[-60px]
                  w-[220px]
                  h-[220px]
                  rounded-full
                  bg-[#d4af6d30]
                  blur-3xl
                "
              />

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:rotate-90
                  hover:bg-white/20
                "
              >

                <X
                  size={18}
                  className="text-white"
                />

              </button>

              {/* CONTENT */}
              <div className="relative z-10">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    text-[10px]
                    tracking-[0.24em]
                    uppercase
                    text-[#f5e7ca]
                    mb-5
                  "
                >

                  <Sparkles size={12} />

                  Luxury Stay

                </div>

                <h2
                  className="
                    text-[42px]
                    leading-[0.92]
                    text-white
                    font-heading
                    font-light
                  "
                >

                  Plan your
                  <br />

                  <span className="italic text-[#d4af6d]">
                    mountain escape
                  </span>

                </h2>

              </div>

            </div>

            {/* FORM */}
            <div className="p-8">

              <div className="grid grid-cols-1 gap-4">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    h-[56px]
                    rounded-2xl
                    border
                    border-[#ddd2c2]
                    px-5
                    text-[15px]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#b89156]
                    focus:shadow-[0_0_0_4px_rgba(184,145,86,0.12)]
                  "
                />

                {/* PHONE */}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    h-[56px]
                    rounded-2xl
                    border
                    border-[#ddd2c2]
                    px-5
                    text-[15px]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#b89156]
                    focus:shadow-[0_0_0_4px_rgba(184,145,86,0.12)]
                  "
                />
<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  className="
    h-[56px]
    rounded-2xl
    border
    border-[#ddd2c2]
    px-5
    text-[15px]
    outline-none
    transition-all
    duration-300
    focus:border-[#b89156]
    focus:shadow-[0_0_0_4px_rgba(184,145,86,0.12)]
  "
/>
                {/* ROW */}
            {/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {/* TYPE */}
  <select
    name="interestedType"
    value={
      formData.interestedType
    }
    onChange={handleChange}
    className="
      h-[56px]
      rounded-2xl
      border
      border-[#ddd2c2]
      px-4
      text-[15px]
      outline-none
    "
  >

    <option value="room">
      Room
    </option>

    <option value="floor">
      Floor
    </option>

  </select>

  {/* ROOMS / FLOORS */}
  <select
    name="interestedIn"
    value={
      formData.interestedIn
    }
    onChange={handleChange}
    className="
      h-[56px]
      rounded-2xl
      border
      border-[#ddd2c2]
      px-4
      text-[15px]
      outline-none
    "
  >

    <option value="">
      Select
    </option>

    {formData.interestedType ===
    "room"

      ? rooms?.map((room) => (

          <option
            key={room._id}
            value={room._id}
          >

            {room.title}

          </option>
        ))

      : floors?.map((floor) => (

          <option
            key={floor._id}
            value={floor._id}
          >

            {floor.title}

          </option>
        ))}

  </select>

  {/* GUESTS */}
  <div className="relative">

    <Users
      size={17}
      className="
        absolute
        top-1/2
        left-4
        -translate-y-1/2
        text-[#8b7355]
      "
    />

    <input
      type="number"
      name="guests"
      placeholder="Guests"
      value={formData.guests}
      onChange={handleChange}
      className="
        w-full
        h-[56px]
        rounded-2xl
        border
        border-[#ddd2c2]
        pl-12
        pr-4
        text-[15px]
        outline-none
      "
    />

  </div>

</div>
                {/* DATE */}
                <div className="relative">

                  <CalendarDays
                    size={17}
                    className="
                      absolute
                      top-1/2
                      left-4
                      -translate-y-1/2
                      text-[#8b7355]
                    "
                  />

                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[56px]
                      rounded-2xl
                      border
                      border-[#ddd2c2]
                      pl-12
                      pr-4
                      text-[15px]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#b89156]
                      focus:shadow-[0_0_0_4px_rgba(184,145,86,0.12)]
                    "
                  />

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">

                {/* CANCEL */}
                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex-1
                    h-[56px]
                    rounded-full
                    border
                    border-[#d8cbb7]
                    text-[#6d5b42]
                    text-[11px]
                    tracking-[0.24em]
                    uppercase
                    transition-all
                    duration-500
                    hover:bg-[#f8f4ee]
                  "
                >

                  Cancel

                </button>

                {/* SUBMIT */}
                <button
                  onClick={handleWhatsAppSubmit}
                  className="
                    group
                    relative
                    overflow-hidden
                    flex-1
                    h-[56px]
                    rounded-full
                    bg-[#062d21]
                    text-white
                    text-[11px]
                    tracking-[0.24em]
                    uppercase
                    shadow-[0_20px_45px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                  "
                >

                  {/* SHINE */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.22)_40%,transparent_60%)]
                      -translate-x-[140%]
                      group-hover:translate-x-[140%]
                      transition-transform
                      duration-[1800ms]
                    "
                  />

                  <span className="relative z-10">
                    Send Enquiry
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default FloatingContactButtons;