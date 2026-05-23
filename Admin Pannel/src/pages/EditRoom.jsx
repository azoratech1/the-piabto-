import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import RoomForm from "../components/RoomForm";

import Loader from "../components/Loader";

import { getSingleRoom, updateRoom } from "../services/api";

import toast from "react-hot-toast";

const EditRoom = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchRoom = async () => {
    try {
      const { data } = await getSingleRoom(id);

      setRoom(data.room);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  const handleUpdateRoom = async (formData) => {
    try {
      await updateRoom(id, formData);

      toast.success("Room Updated");

      navigate("/rooms");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  return (
    <AdminLayout>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-800">
              Edit Room
            </h1>

            <p className="text-slate-500 mt-2">
              Update room information
            </p>

          </div>

          <RoomForm
            initialData={room}
            onSubmit={handleUpdateRoom}
          />
        </>
      )}

    </AdminLayout>
  );
};

export default EditRoom;