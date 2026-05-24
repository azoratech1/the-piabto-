import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import {
  getFloors,
  deleteFloor,
} from "../services/api";

import toast from "react-hot-toast";

import {
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

const Floors = () => {
  const [floors, setFloors] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchFloors = async () => {
    try {
      const { data } =
        await getFloors();

      setFloors(data.floors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFloors();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this floor?"
      );

    if (!confirmDelete) return;

    try {
      await deleteFloor(id);

      toast.success("Floor Deleted");

      fetchFloors();
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
            Floors
          </h1>

          <p className="text-slate-500 mt-2">
            Manage hotel floors
          </p>
        </div>

        <Link
          to="/floors/add"
          className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={20} />

          Add Floor
        </Link>
      </div>

      {/* CONTENT */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {floors?.map((floor) => (
            <div
              key={floor._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* IMAGE */}
              <img
  src={`http://localhost:5000/api/floor/floor-image/${floor._id}/0`}
  alt=""
  className="w-full h-[240px] object-cover"
/>

              {/* BODY */}
              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold text-slate-800">
                    Floor {floor.floorNumber}
                  </h2>

                  {floor.booked ? (
                    <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                      Sold Out
                    </span>
                  ) : (
                    <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
                      Available
                    </span>
                  )}
                </div>

                <p className="text-slate-500 text-sm mt-3 line-clamp-3">
                  {floor.description}
                </p>

                {/* INFO */}
                <div className="mt-5 flex flex-wrap gap-3">

                  <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
                    {floor.totalRooms} Rooms
                  </div>

                  <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
                    {floor.availableRooms} Available
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/floors/edit/${floor._id}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Pencil size={18} />

                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(
                        floor._id
                      )
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

export default Floors;