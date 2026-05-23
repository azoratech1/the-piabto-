import express from "express";

import {

  getHomepage,

  updateHomepage,
getHomepageImage
} from "../controllers/homepageController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get(
  "/",
  getHomepage
);
router.get(
  "/image/:type/:id?/:index?",

  getHomepageImage
);
router.put(

  "/update",

  upload.fields([

    {
      name: "heroImage",
      maxCount: 1,
    },

    {
      name: "aboutImage",
      maxCount: 1,
    },

    {
      name: "floorImages",
      maxCount: 10,
    },
  ]),

  updateHomepage
);

export default router;