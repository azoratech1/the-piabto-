import express from "express";

import {
  getHomepage,
  updateHomepage,
  getHomepageImage,
} from "../controllers/homepageController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* =========================
   GET HOMEPAGE
========================= */

router.get(
  "/",
  getHomepage
);

/* =========================
   GET HOMEPAGE IMAGE
========================= */

router.get(
  "/image/:type/:index?",
  getHomepageImage
);

/* =========================
   UPDATE HOMEPAGE
========================= */

router.put(
  "/update",

  upload.fields([
    {
      name: "heroImages",
      maxCount: 20,
    },

    {
      name: "aboutImage",
      maxCount: 1,
    },
  ]),

  updateHomepage
);

export default router;