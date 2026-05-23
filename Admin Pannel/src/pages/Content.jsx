import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import axios from "axios";

import toast from "react-hot-toast";

const Content = () => {
  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    heroTitle: "",
    heroSubtitle: "",
    aboutText: "",
    contactNumber: "",
    address: "",
  });

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5000/api/content",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (data.content) {
        setFormData(data.content);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/content/update",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Content Updated");
    } catch (error) {
      toast.error("Update Failed");
    } finally {
      setSaving(false);
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
              Website Content
            </h1>

            <p className="text-slate-500 mt-2">
              Manage homepage website content
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-sm"
          >

            {/* HERO TITLE */}
            <div className="mb-6">

              <label className="block mb-2 font-medium">
                Hero Title
              </label>

              <input
                type="text"
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
              />

            </div>

            {/* HERO SUBTITLE */}
            <div className="mb-6">

              <label className="block mb-2 font-medium">
                Hero Subtitle
              </label>

              <input
                type="text"
                name="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
              />

            </div>

            {/* ABOUT */}
            <div className="mb-6">

              <label className="block mb-2 font-medium">
                About Text
              </label>

              <textarea
                rows="6"
                name="aboutText"
                value={formData.aboutText}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
              ></textarea>

            </div>

            {/* CONTACT */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium">
                  Contact Number
                </label>

                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={saving}
              className="mt-8 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-8 py-3 rounded-xl"
            >
              {saving
                ? "Saving..."
                : "Save Content"}
            </button>

          </form>
        </>
      )}

    </AdminLayout>
  );
};

export default Content;