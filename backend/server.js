import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import homepageRoutes
from "./routes/homepageRoutes.js";
dotenv.config();

const app = express();


// MIDDLEWARES
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("DB Connection Error:", error.message);
  });


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/rooms", roomRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/gallery", galleryRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use(
  "/api/homepage",
  homepageRoutes
);
// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Homestay Backend Running");
});


// START SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on port ${process.env.PORT || 5000}`
  );
});