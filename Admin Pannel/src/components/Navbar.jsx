const Navbar = () => {
  return (
    <div className="h-[80px] bg-white shadow-sm flex items-center justify-between px-8 rounded-2xl">

      {/* LEFT */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Manage your homestay easily
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div className="text-right">
          <h3 className="font-semibold text-slate-700">
            Admin
          </h3>

          <p className="text-sm text-slate-500">
            Super Admin
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>

      </div>
    </div>
  );
};

export default Navbar;