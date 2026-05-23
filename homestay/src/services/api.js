const BASE = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

const headers = () => ({
  "Content-Type": "application/json",
  ...(getToken() ? { Authorization: getToken() } : {}),
});

const api = async (method, path, body = null) => {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: headers(),
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
};

export const getRooms = () => api("GET", "/rooms");
export const getSingleRoom = (id) => api("GET", `/rooms/${id}`);
export const createRoom = (data) => api("POST", "/rooms/create", data);
export const updateRoom = (id, data) => api("PUT", `/rooms/update/${id}`, data);
export const deleteRoom = (id) => api("DELETE", `/rooms/delete/${id}`);

export const getBookings = () => api("GET", "/bookings");
export const updateBookingStatus = (id, data) => api("PUT", `/bookings/update-status/${id}`, data);

export const getGallery = () => api("GET", "/gallery");
export const addGalleryImage = (data) => api("POST", "/gallery/create", data);
export const deleteGalleryImage = (id) => api("DELETE", `/gallery/delete/${id}`);

export const getDashboardStats = () => api("GET", "/dashboard/stats");

export const getContent = () => api("GET", "/content");
export const updateContent = (data) => api("PUT", "/content/update", data);

export const loginAdmin = (data) => api("POST", "/auth/login", data);

export const createBooking = (data) => api("POST", "/bookings/create", data);
