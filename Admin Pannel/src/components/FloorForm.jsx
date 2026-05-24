import {
  useEffect,
  useState,
} from "react";

import {
  getRooms,
} from "../services/api";

const FloorForm = ({
  initialData = {},
  onSubmit,
}) => {
  const [rooms, setRooms] =
    useState([]);

  const [form, setForm] =
    useState({
      floorNumber:
        initialData.floorNumber || "",

      title:
        initialData.title || "",

      description:
        initialData.description || "",

      totalRooms:
        initialData.totalRooms || "",

      availableRooms:
        initialData.availableRooms ||
        "",

      amenities:
        initialData.amenities?.join(
          ", "
        ) || "",

      rooms:
        initialData.rooms?.map(
          (r) => r._id
        ) || [],

      featured:
        initialData.featured || false,

      booked:
        initialData.booked || false,
    });

  const [images, setImages] =
    useState([]);

  const fetchRooms = async () => {
    try {
      const { data } =
        await getRooms();

      setRooms(data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleRoomSelect = (id) => {
    if (form.rooms.includes(id)) {
      setForm({
        ...form,
        rooms: form.rooms.filter(
          (roomId) =>
            roomId !== id
        ),
      });
    } else {
      setForm({
        ...form,
        rooms: [
          ...form.rooms,
          id,
        ],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData =
      new FormData();

    Object.keys(form).forEach(
      (key) => {
        if (
          key === "amenities"
        ) {
          formData.append(
            key,
            JSON.stringify(
              form[key]
                .split(",")
                .map((a) =>
                  a.trim()
                )
            )
          );
        } else if (
          key === "rooms"
        ) {
          formData.append(
            key,
            JSON.stringify(
              form.rooms
            )
          );
        } else {
          formData.append(
            key,
            form[key]
          );
        }
      }
    );

    images.forEach((image) => {
      formData.append(
        "images",
        image
      );
    });

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-sm"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FLOOR NUMBER */}
        <div>
          <label className="block mb-2 font-medium">
            Floor Number
          </label>

          <input
            type="number"
            name="floorNumber"
            value={form.floorNumber}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        {/* TITLE */}
        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
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
            value={form.totalRooms}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        {/* AVAILABLE ROOMS */}
        <div>
          <label className="block mb-2 font-medium">
            Available Rooms
          </label>

          <input
            type="number"
            name="availableRooms"
            value={form.availableRooms}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
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
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
          required
        />

      </div>

      {/* AMENITIES */}
      <div className="mt-6">

        <label className="block mb-2 font-medium">
          Amenities
        </label>

        <input
          type="text"
          name="amenities"
          value={form.amenities}
          onChange={handleChange}
          placeholder="WiFi, Balcony, TV"
          className="w-full border rounded-xl px-4 py-3"
        />

      </div>

      {/* SELECT ROOMS */}
      <div className="mt-6">

        <label className="block mb-4 font-medium">
          Attach Rooms
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {rooms?.map((room) => (
            <label
              key={room._id}
              className="flex items-center gap-2 border rounded-xl p-3"
            >

              <input
                type="checkbox"
                checked={form.rooms.includes(
                  room._id
                )}
                onChange={() =>
                  handleRoomSelect(
                    room._id
                  )
                }
              />

              {room.title}

            </label>
          ))}

        </div>

      </div>

      {/* IMAGES */}
      <div className="mt-6">

        <label className="block mb-2 font-medium">
          Upload Images
        </label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) =>
            setImages(
              Array.from(
                e.target.files
              )
            )
          }
          className="w-full border rounded-xl px-4 py-3"
        />

      </div>

      {/* FLAGS */}
      <div className="mt-6 flex gap-6">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />

          Featured

        </label>

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            name="booked"
            checked={form.booked}
            onChange={handleChange}
          />

          Sold Out

        </label>

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl"
      >
        Save Floor
      </button>

    </form>
  );
};

export default FloorForm;