import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-[#f5ead7]">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#09111b]/82" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,11,18,0.45),rgba(6,11,18,0.92))]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-[4%] pt-10 lg:pt-12 pb-4">

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.15fr_0.8fr_0.95fr_1fr] border-y border-white/10">

          {/* COLUMN 1 */}
          <div className="py-8 pr-8 border-b lg:border-b-0 lg:border-r border-white/10">

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-5">

              {/* ICON */}
              <div className="relative w-[58px] h-[58px] rounded-full border border-[#c7a56a]/70 flex items-center justify-center shrink-0">

                <div className="absolute inset-[6px] rounded-full border border-[#c7a56a]/30" />

                <span
                  className="text-[#d4b483] text-[26px] leading-none"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  B
                </span>

              </div>

              {/* TEXT */}
              <div>

                <h2
                  className="text-[30px] leading-none text-[#d8b77a]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  THE BIALTO
                </h2>

                <p className="text-[8px] tracking-[0.35em] uppercase text-[#d8b77a]/80 mt-1">
                  BY ASEMONT ESTATE
                </p>

              </div>

            </div>

            {/* DESC */}
            <p className="text-[11px] leading-[1.9] text-[#d7d0c6] max-w-[250px] mb-5">
              A luxury homestay in Kasauli
              offering premium rooms,
              scenic views and warm
              hospitality, your perfect
              mountain escape.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">

              {["f", "◎", "◉"].map((item, i) => (
                <button
                  key={i}
                  className="w-[32px] h-[32px] rounded-full border border-[#c7a56a]/35 bg-white/5 text-[#d4b483] text-[13px] flex items-center justify-center hover:bg-[#c7a56a]/10 transition-all duration-300"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="py-8 px-8 border-b lg:border-b-0 lg:border-r border-white/10">

            <h3
              className="text-[18px] mb-5 text-[#f5ead7]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-[10px]">

              {[
                "Home",
                "About Us",
                "Floors & Rooms",
                "Amenities",
                "Gallery",
                "Attractions",
                "Reviews",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[11px] text-[#d7d0c6] hover:text-[#d4b483] transition-all duration-300"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* COLUMN 3 */}
          <div className="py-8 px-8 border-b lg:border-b-0 lg:border-r border-white/10">

            <h3
              className="text-[18px] mb-5 text-[#f5ead7]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              CONTACT US
            </h3>

            <div className="flex flex-col gap-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={14}
                  className="text-[#d4b483] mt-1 shrink-0"
                />

                <p className="text-[11px] leading-[1.8] text-[#d7d0c6]">
                  Dochi Road, Kasauli,
                  <br />
                  Himachal Pradesh, India
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <Phone
                  size={14}
                  className="text-[#d4b483]"
                />

                <p className="text-[11px] text-[#d7d0c6]">
                  +91 77176 02625
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <Mail
                  size={14}
                  className="text-[#d4b483]"
                />

                <p className="text-[11px] text-[#d7d0c6]">
                  TheBialto@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* COLUMN 4 */}
          <div className="py-8 pl-8">

            <h3
              className="text-[18px] mb-5 text-[#f5ead7]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              NEWSLETTER
            </h3>

            <p className="text-[11px] leading-[1.8] text-[#d7d0c6] mb-5 max-w-[220px]">
              Subscribe for offers and
              updates.
            </p>

            {/* INPUT */}
            <div className="flex h-[42px] border border-white/15 bg-white/5 overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 text-[11px] outline-none placeholder:text-[#d7d0c6]/55"
              />

              <button className="w-[46px] bg-[#f5ead7] text-[#1b1b1a] flex items-center justify-center hover:bg-[#d4b483] transition-all duration-300">

                <Send size={14} />

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-4">

          <p className="text-[10px] text-[#d7d0c6]/70 text-center lg:text-left">
            © 2024 The Bialto By Asemont Estate.
            All Rights Reserved.
          </p>

          <p className="text-[10px] text-[#d7d0c6]/70 text-center lg:text-right">
            Designed with ❤️ for memorable stays
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;