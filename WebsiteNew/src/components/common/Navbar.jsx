import { useEffect, useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Link,
  useLocation,
} from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Floors & Rooms",
      path: "/rooms",
    },

    {
      name: "Amenities",
      path: "/amenities",
    },

    {
      name: "Gallery",
      path: "/gallery",
    },

    {
      name: "Attractions",
      path: "/attractions",
    },

    {
      name: "Reviews",
      path: "/reviews",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="
        fixed
        top-0
        left-0
        w-full
        z-[100]
      ">

        <motion.div

          initial={{
            y: -60,
            opacity: 0,
          }}

          animate={{
            y: 0,
            opacity: 1,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`
            transition-all
            duration-500
            ${
              scrolled
                ? "bg-[#071711f2] backdrop-blur-xl border-b border-[#b08a5715]"
                : "bg-transparent"
            }
          `}
        >

          <div className="
            max-w-[1480px]
            mx-auto
            px-[4%]
            h-[88px]
            flex
            items-center
            justify-between
          ">

            {/* LEFT BRAND */}
            <Link
              to="/"
              className="
                flex
                items-center
                gap-4
                shrink-0
              "
            >

              {/* LOGO */}
              <div className="
                relative
                w-[58px]
                h-[58px]
                rounded-full
                border
                border-[#b08a57]
                flex
                items-center
                justify-center
                bg-[rgba(255,255,255,0.03)]
                backdrop-blur-md
              ">

                <div className="
                  absolute
                  inset-[4px]
                  rounded-full
                  border
                  border-[#b08a5730]
                " />

                <span className="
                  text-[30px]
                  leading-none
                  text-[#d4af6d]
                  font-heading
                  tracking-[-0.04em]
                ">
                  P
                </span>

              </div>

              {/* TEXT */}
              <div className="leading-none">

                <h1 className="
                  text-[36px]
                  text-white
                  font-heading
                  tracking-[-0.05em]
                  leading-[0.82]
                  font-semibold
                ">

                  The Piabto

                </h1>

                <div className="
                  flex
                  items-center
                  gap-2
                  mt-[7px]
                ">

                  <div className="
                    w-8
                    h-[1px]
                    bg-[#b08a57]
                  " />

                 

                </div>

              </div>

            </Link>

            {/* DESKTOP NAV */}
            <nav className="
              hidden
              lg:flex
              items-center
              gap-8
            ">

              {navLinks.map((item) => {

                const isActive =
                  location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="
                      relative
                      group
                    "
                  >

                    <span className={`
                      text-[11px]
                      uppercase
                      tracking-[0.16em]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-[#d4af6d]"
                          : "text-white/85 hover:text-[#d4af6d]"
                      }
                    `}>

                      {item.name}

                    </span>

                    {/* ACTIVE LINE */}
                    <span className={`
                      absolute
                      left-0
                      -bottom-[12px]
                      h-[1px]
                      bg-[#d4af6d]
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `} />

                  </Link>
                );
              })}

            </nav>

            {/* RIGHT BUTTON */}
            <div className="
              hidden
              lg:flex
              items-center
            ">

              <button className="
                relative
                overflow-hidden
                h-[46px]
                px-7
                border
                border-[#b08a57]
                bg-[#11271d]
                text-white
                text-[10px]
                uppercase
                tracking-[0.18em]
                transition-all
                duration-500
                hover:bg-[#173427]
                hover:border-[#d4af6d]
              ">

                {/* SHINE */}
                <div className="
                  absolute
                  inset-0
                  bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.16)_40%,transparent_60%)]
                  -translate-x-[140%]
                  transition-transform
                  duration-[1800ms]
                  hover:translate-x-[140%]
                " />

                <span className="
                  relative
                  z-10
                ">

                  BOOK NOW

                </span>

              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                lg:hidden
                w-[44px]
                h-[44px]
                border
                border-[#b08a57]
                bg-[#11271dcc]
                text-white
                flex
                items-center
                justify-center
              "
            >

              {mobileMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}

            </button>

          </div>

        </motion.div>

      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenu && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              fixed
              inset-0
              z-[99]
              bg-[#081610]
              pt-[120px]
              px-8
            "
          >

            <div className="
              flex
              flex-col
              gap-8
            ">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="
                    text-[34px]
                    text-[#f4eadb]
                    font-heading
                    border-b
                    border-[#ffffff10]
                    pb-4
                  "
                >

                  {item.name}

                </Link>

              ))}

            </div>

            {/* MOBILE BUTTON */}
            <button className="
              mt-10
              w-full
              h-[56px]
              bg-[#11271d]
              border
              border-[#b08a57]
              text-white
              text-[11px]
              uppercase
              tracking-[0.18em]
            ">

              Book Your Stay

            </button>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;