import express from "express";

import {
  addGalleryImage,
  getGallery,
  getGalleryImage,
  deleteGalleryImage,
} from "../controllers/galleryController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


// ADD GALLERY IMAGE
router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  addGalleryImage
);


// GET GALLERY
router.get("/", getGallery);


// GET SINGLE GALLERY IMAGE
router.get("/:id/image", getGalleryImage);


// DELETE GALLERY IMAGE
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteGalleryImage
);

export default router;