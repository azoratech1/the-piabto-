import { useState } from "react";

const GalleryUpload = ({ onUpload }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", title);

    data.append("image", image);

    onUpload(data);

    setTitle("");
    setImage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-sm"
    >

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Upload Gallery Image
      </h2>

      {/* TITLE */}
      <div className="mb-5">

        <label className="block mb-2 font-medium">
          Image Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
          required
        />

      </div>

      {/* IMAGE */}
      <div className="mb-6">

        <label className="block mb-2 font-medium">
          Select Image
        </label>

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="w-full border border-slate-200 rounded-xl px-4 py-3"
          required
        />

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-8 py-3 rounded-xl"
      >
        Upload Image
      </button>

    </form>
  );
};

export default GalleryUpload;