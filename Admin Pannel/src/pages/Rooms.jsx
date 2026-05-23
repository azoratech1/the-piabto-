import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import { getRooms, deleteRoom } from "../services/api";

import toast from "react-hot-toast";

import { Pencil, Trash2, Plus } from "lucide-react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const { data } = await getRooms();

      setRooms(data.rooms);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this room?"
    );

    if (!confirmDelete) return;

    try {
      await deleteRoom(id);

      toast.success("Room Deleted");

      fetchRooms();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>

      {/* TOP */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Rooms
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your luxury rooms
          </p>
        </div>

        <Link
          to="/rooms/add"
          className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={20} />

          Add Room
        </Link>

      </div>

      {/* CONTENT */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {rooms?.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={`http://localhost:5000/api/rooms/${room._id}/image/0`}
                alt=""
                className="w-full h-[240px] object-cover"
              />

              {/* BODY */}
              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-slate-800">
                    {room.title}
                  </h2>

                  {room.featured && (
                    <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}

                </div>

                <p className="text-slate-500 text-sm mt-3 line-clamp-3">
                  {room.description}
                </p>

                {/* INFO */}
                <div className="mt-5 flex flex-wrap gap-3">

                  <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
                    ₹ {room.pricePerRoom}/room
                  </div>

                  <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
                    ₹ {room.pricePerPerson}/person
                  </div>

                  <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
                    {room.maxGuests} Guests
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/rooms/edit/${room._id}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Pencil size={18} />

                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(room._id)
                    }
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} />

                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </AdminLayout>
  );
};

export default Rooms;