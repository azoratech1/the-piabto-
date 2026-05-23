import express from "express";

import {
  createBooking,
  getBookings,
  getSingleBooking,
  updateBookingStatus,
  deleteBooking,
} from "../controllers/bookingController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE BOOKING
router.post("/create", createBooking);


// GET ALL BOOKINGS
router.get("/", authMiddleware, getBookings);


// GET SINGLE BOOKING
router.get("/:id", authMiddleware, getSingleBooking);


// UPDATE BOOKING STATUS
router.put(
  "/update-status/:id",
  authMiddleware,
  updateBookingStatus
);


// DELETE BOOKING
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteBooking
);

export default router;