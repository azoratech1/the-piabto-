import express from "express";

import {
  createRoom,
  getRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
  getRoomImage,
} from "../controllers/roomController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


// CREATE ROOM
router.post(
  "/create",
  authMiddleware,
  upload.array("images"),
  createRoom
);


// GET ALL ROOMS
router.get("/", getRooms);


// GET SINGLE ROOM
router.get("/:id", getSingleRoom);


// UPDATE ROOM
router.put(
  "/update/:id",
  authMiddleware,
  upload.array("images"),
  updateRoom
);


// DELETE ROOM
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteRoom
);


// GET ROOM IMAGE
router.get("/:id/image/:index", getRoomImage);

export default router;