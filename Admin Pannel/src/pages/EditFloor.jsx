import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import FloorForm from "../components/FloorForm";

import Loader from "../components/Loader";

import {
  getSingleFloor,
  updateFloor,
} from "../services/api";

import toast from "react-hot-toast";

const EditFloor = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [floor, setFloor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchFloor = async () => {
    try {
      const { data } =
        await getSingleFloor(id);

      setFloor(data.floor);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFloor();
  }, []);

  const handleUpdateFloor = async (
    formData
  ) => {
    try {
      await updateFloor(id, formData);

      toast.success("Floor Updated");

      navigate("/floors");
    } catch (error) {
      toast.error(
        error?.response?.data
          ?.message ||
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
              Edit Floor
            </h1>

            <p className="text-slate-500 mt-2">
              Update floor information
            </p>

          </div>

          <FloorForm
            initialData={floor}
            onSubmit={handleUpdateFloor}
          />
        </>
      )}

    </AdminLayout>
  );
};

export default EditFloor;