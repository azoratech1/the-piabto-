import { useState } from "react";

const RoomForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    pricePerRoom: initialData.pricePerRoom || "",
    pricePerPerson: initialData.pricePerPerson || "",
    maxGuests: initialData.maxGuests || "",
    totalRooms: initialData.totalRooms || "",
    amenities: initialData.amenities?.join(", ") || "",
    featured: initialData.featured || false,
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "amenities") {
        data.append(
          key,
          JSON.stringify(
            formData[key]
              .split(",")
              .map((item) => item.trim())
          )
        );
      } else {
        data.append(key, formData[key]);
      }
    });

    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-sm"
    >
      <div className="grid grid-cols-2 gap-6">

        {/* TITLE */}
        <div>
          <label className="block mb-2 font-medium">
            Room Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            required
          />
        </div>

        {/* PRICE PER ROOM */}
        <div>
          <label className="block mb-2 font-medium">
            Price Per Room
          </label>

          <input
            type="number"
            name="pricePerRoom"
            value={formData.pricePerRoom}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            required
          />
        </div>

        {/* PRICE PER PERSON */}
        <div>
          <label className="block mb-2 font-medium">
            Price Per Person
          </label>

          <input
            type="number"
            name="pricePerPerson"
            value={formData.pricePerPerson}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            required
          />
        </div>

        {/* MAX GUESTS */}
        <div>
          <label className="block mb-2 font-medium">
            Max Guests
          </label>

          <input
            type="number"
            name="maxGuests"
            value={formData.maxGuests}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            required
          />
        </div>

        {/* TOTAL ROOMS */}
        <div>
          <label className="block mb-2 font-medium">
            Total Rooms
          </label>

          <input
            type="number"
            name="totalRooms"
            value={formData.totalRooms}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
            required
          />
        </div>

        {/* FEATURED */}
        <div className="flex items-center gap-3 mt-8">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />

          <label>Featured Room</label>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
          required
        ></textarea>
      </div>

      {/* AMENITIES */}
      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Amenities
        </label>

        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          placeholder="Wifi, Balcony, TV"
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {/* IMAGES */}
      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Upload Images
        </label>

        <input
          type="file"
          multiple
          onChange={(e) => setImages(e.target.files)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="mt-8 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-8 py-3 rounded-xl"
      >
        Save Room
      </button>
    </form>
  );
};

export default RoomForm;