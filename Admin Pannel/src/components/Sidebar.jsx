import {
  LayoutDashboard,
  BedDouble,
  CalendarDays,
  Image,
  FileText,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Rooms",
      path: "/rooms",
      icon: <BedDouble size={20} />,
    },
    {
      name: "Bookings",
      path: "/bookings",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image size={20} />,
    },
    {
      name: "Edit Homepage",
      path: "/edithome",
      icon: <Image size={20} />,
    },
    {
      name: "Content",
      path: "/content",
      icon: <FileText size={20} />,
    },
  ];

  return (
    <div className="w-[260px] h-screen bg-slate-900 text-white flex flex-col justify-between fixed left-0 top-0">

      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold tracking-wide">
            Mountain Stay
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Admin Panel
          </p>
        </div>

        {/* MENU */}
        <div className="mt-6 flex flex-col gap-2 px-4">

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              {item.icon}

              <span>{item.name}</span>
            </NavLink>
          ))}

        </div>
      </div>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-800">

        <button
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 rounded-xl"
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>
    </div>
  );
};

export default Sidebar;