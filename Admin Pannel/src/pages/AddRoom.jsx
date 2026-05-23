import { useNavigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import RoomForm from "../components/RoomForm";

import { createRoom } from "../services/api";

import toast from "react-hot-toast";

const AddRoom = () => {
  const navigate = useNavigate();

  const handleCreateRoom = async (formData) => {
    try {
      await createRoom(formData);

      toast.success("Room Created Successfully");

      navigate("/rooms");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <AdminLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Add Room
        </h1>

        <p className="text-slate-500 mt-2">
          Create a new luxury room
        </p>

      </div>

      <RoomForm onSubmit={handleCreateRoom} />

    </AdminLayout>
  );
};

export default AddRoom;