import { useNavigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import FloorForm from "../components/FloorForm";

import { createFloor } from "../services/api";

import toast from "react-hot-toast";

const AddFloor = () => {
  const navigate = useNavigate();

  const handleCreateFloor = async (
    formData
  ) => {
    try {
      await createFloor(formData);

      toast.success(
        "Floor Created Successfully"
      );

      navigate("/floors");
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
          Add Floor
        </h1>

        <p className="text-slate-500 mt-2">
          Create a new hotel floor
        </p>

      </div>

      <FloorForm
        onSubmit={handleCreateFloor}
      />

    </AdminLayout>
  );
};

export default AddFloor;