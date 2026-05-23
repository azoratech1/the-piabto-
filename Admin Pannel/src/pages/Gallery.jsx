import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import GalleryUpload from "../components/GalleryUpload";

import Loader from "../components/Loader";

import {
  getGallery,
  addGalleryImage,
  deleteGalleryImage,
} from "../services/api";

import toast from "react-hot-toast";

import { Trash2 } from "lucide-react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      const { data } = await getGallery();

      setGallery(data.gallery);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleUpload = async (formData) => {
    try {
      await addGalleryImage(formData);

      toast.success("Image Uploaded");

      fetchGallery();
    } catch (error) {
      toast.error("Upload Failed");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this image?"
    );

    if (!confirmDelete) return;

    try {
      await deleteGalleryImage(id);

      toast.success("Image Deleted");

      fetchGallery();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Gallery
        </h1>

        <p className="text-slate-500 mt-2">
          Manage property gallery images
        </p>

      </div>

      {/* UPLOAD */}
      <GalleryUpload onUpload={handleUpload} />

      {/* GALLERY */}
      <div className="mt-10">

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {gallery?.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >

                {/* IMAGE */}
                <img
                  src={`http://localhost:5000/api/gallery/${item._id}/image`}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />

                {/* BODY */}
                <div className="p-5">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <button
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white p-2 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </AdminLayout>
  );
};

export default Gallery;