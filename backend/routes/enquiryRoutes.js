import express from "express";

import {
  createEnquiry,
  getEnquiries,
} from "../controllers/enquiryController.js";

const router =
  express.Router();

/* =========================
   CREATE ENQUIRY
========================= */

router.post(
  "/create",
  createEnquiry
);

/* =========================
   GET ENQUIRIES
========================= */

router.get(
  "/all",
  getEnquiries
);

export default router;