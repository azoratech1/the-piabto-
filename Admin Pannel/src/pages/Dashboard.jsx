import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import {
  BedDouble,
  CalendarDays,
  IndianRupee,
  Clock3,
} from "lucide-react";

import { getDashboardStats } from "../services/api";

import Loader from "../components/Loader";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const { data } = await getDashboardStats();

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      title: "Total Rooms",
      value: stats?.totalRooms || 0,
      icon: <BedDouble size={28} />,
      bg: "bg-blue-500",
    },
    {
      title: "Total Bookings",
      value: stats?.totalBookings || 0,
      icon: <CalendarDays size={28} />,
      bg: "bg-emerald-500",
    },
    {
      title: "Pending Bookings",
      value: stats?.pendingBookings || 0,
      icon: <Clock3 size={28} />,
      bg: "bg-orange-500",
    },
    {
      title: "Revenue",
      value: `₹ ${stats?.totalRevenue || 0}`,
      icon: <IndianRupee size={28} />,
      bg: "bg-purple-500",
    },
  ];

  return (
    <AdminLayout>

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* PAGE TITLE */}
          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Overview of your homestay business
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-slate-500 text-sm">
                      {card.title}
                    </p>

                    <h2 className="text-3xl font-bold text-slate-800 mt-3">
                      {card.value}
                    </h2>

                  </div>

                  <div
                    className={`${card.bg} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
                  >
                    {card.icon}
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* RECENT ACTIVITY */}
          <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Welcome to Mountain Stay Admin
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-100 rounded-2xl p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Manage Rooms
                </h3>

                <p className="text-slate-500 mt-2 text-sm leading-7">
                  Add luxury rooms, pricing,
                  amenities and images dynamically.
                </p>

              </div>

              <div className="bg-slate-100 rounded-2xl p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Booking Management
                </h3>

                <p className="text-slate-500 mt-2 text-sm leading-7">
                  Track customer bookings and update
                  booking statuses easily.
                </p>

              </div>

              <div className="bg-slate-100 rounded-2xl p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Dynamic Website
                </h3>

                <p className="text-slate-500 mt-2 text-sm leading-7">
                  Control website content and gallery
                  directly from admin panel.
                </p>

              </div>

            </div>

          </div>
        </>
      )}

    </AdminLayout>
  );
};

export default Dashboard;