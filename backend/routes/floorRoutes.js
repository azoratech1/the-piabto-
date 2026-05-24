import express from "express";

import multer from "multer";

import {
  createFloor,
  getFloors,
  getSingleFloor,
  updateFloor,
  deleteFloor,
  getFloorImage,
} from "../controllers/floorController.js";

const router = express.Router();

// MULTER STORAGE
const storage = multer.memoryStorage();

const upload = multer({ storage });

// CREATE FLOOR
router.post(
  "/create-floor",
  upload.array("images", 10),
  createFloor
);

// GET ALL FLOORS
router.get("/get-floors", getFloors);

// GET SINGLE FLOOR
router.get(
  "/get-floor/:id",
  getSingleFloor
);

// UPDATE FLOOR
router.put(
  "/update-floor/:id",
  upload.array("images", 10),
  updateFloor
);

// DELETE FLOOR
router.delete(
  "/delete-floor/:id",
  deleteFloor
);

// GET FLOOR IMAGE
router.get(
  "/floor-image/:id/:index",
  getFloorImage
);

export default router;