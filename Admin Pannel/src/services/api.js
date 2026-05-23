import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


// ADD TOKEN IN HEADERS
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});



/* =========================
   AUTH APIs
========================= */

export const loginAdmin = (data) =>
  API.post("/auth/login", data);



/* =========================
   ROOM APIs
========================= */

// GET ALL ROOMS
export const getRooms = () =>
  API.get("/rooms");


// GET SINGLE ROOM
export const getSingleRoom = (id) =>
  API.get(`/rooms/${id}`);


// CREATE ROOM
export const createRoom = (data) =>
  API.post("/rooms/create", data);


// UPDATE ROOM
export const updateRoom = (id, data) =>
  API.put(`/rooms/update/${id}`, data);


// DELETE ROOM
export const deleteRoom = (id) =>
  API.delete(`/rooms/delete/${id}`);



/* =========================
   BOOKING APIs
========================= */

// GET BOOKINGS
export const getBookings = () =>
  API.get("/bookings");


// UPDATE BOOKING STATUS
export const updateBookingStatus = (
  id,
  data
) =>
  API.put(
    `/bookings/update-status/${id}`,
    data
  );



/* =========================
   GALLERY APIs
========================= */

// GET GALLERY
export const getGallery = () =>
  API.get("/gallery");


// ADD GALLERY IMAGE
export const addGalleryImage = (data) =>
  API.post("/gallery/create", data);


// DELETE GALLERY IMAGE
export const deleteGalleryImage = (id) =>
  API.delete(`/gallery/delete/${id}`);



/* =========================
   DASHBOARD APIs
========================= */

// GET DASHBOARD STATS
export const getDashboardStats = () =>
  API.get("/dashboard/stats");



/* =========================
   CONTENT APIs
========================= */

// GET WEBSITE CONTENT
export const getContent = () =>
  API.get("/content");


// UPDATE WEBSITE CONTENT
export const updateContent = (data) =>
  API.put("/content/update", data);
/* =========================
   HOMEPAGE APIs
========================= */

// GET HOMEPAGE
export const getHomepage = () =>
  API.get("/homepage");


// UPDATE HOMEPAGE
export const updateHomepage = (data) =>
  API.put(
    "/homepage/update",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );