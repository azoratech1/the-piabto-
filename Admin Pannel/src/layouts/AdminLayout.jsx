import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[260px] w-full p-6">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="mt-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;