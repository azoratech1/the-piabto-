import axios from "axios";

/* =========================
   AXIOS INSTANCE
========================= */

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

/* =========================
   ROOM APIs
========================= */

// GET ALL ROOMS
export const getRooms = async () => {
  return await API.get("/rooms");
};

// GET SINGLE ROOM
export const getSingleRoom = async (
  roomId
) => {
  return await API.get(
    `/rooms/${roomId}`
  );
};

// CREATE ROOM
export const createRoom = async (
  roomData
) => {
  return await API.post(
    "/rooms",
    roomData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

// UPDATE ROOM
export const updateRoom = async (
  roomId,
  roomData
) => {
  return await API.put(
    `/rooms/${roomId}`,
    roomData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

// DELETE ROOM
export const deleteRoom = async (
  roomId
) => {
  return await API.delete(
    `/rooms/${roomId}`
  );
};

// ROOM IMAGE URL
export const getRoomImage = (
  roomId,
  imageIndex = 0
) => {
  return `http://localhost:5000/api/rooms/${roomId}/image/${imageIndex}`;
};
/* =========================
   GALLERY APIs
========================= */

export const getGallery = async () => {
  return await API.get("/gallery");
};

/* =========================
   BOOKING APIs
========================= */

// CREATE BOOKING
export const createBooking =
  async (bookingData) => {
    return await API.post(
      "/bookings",
      bookingData
    );
  };

// GET BOOKINGS
export const getBookings =
  async () => {
    return await API.get(
      "/bookings"
    );
  };

/* =========================
   CONTENT APIs
========================= */

// GET CONTENT
export const getContent =
  async () => {
    return await API.get(
      "/content"
    );
  };

// UPDATE CONTENT
export const updateContent =
  async (contentData) => {
    return await API.put(
      "/content",
      contentData
    );
  };

/* =========================
   AUTH APIs
========================= */

// LOGIN
export const loginAdmin =
  async (loginData) => {
    return await API.post(
      "/auth/login",
      loginData
    );
  };
/* =========================
   HOMEPAGE APIs
========================= */

// GET HOMEPAGE
export const getHomepage =
  async () => {

    return await API.get(
      "/homepage"
    );
  };


// GET HOMEPAGE IMAGE
export const getHomepageImage =
  (
    type,
    id = "",
    index = 0
  ) => {

    return `http://localhost:5000/api/homepage/image/${type}/${id}/${index}`;
  };
export default API;