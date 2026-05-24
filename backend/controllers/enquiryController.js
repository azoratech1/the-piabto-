import Enquiry from "../models/Enquiry.js";

import Room from "../models/Room.js";

import Floor from "../models/Floor.js";

import {
  sendEnquiryEmails,
} from "../utils/sendEnquiryEmail.js";

/* =========================
   CREATE ENQUIRY
========================= */

export const createEnquiry =
  async (req, res) => {

    console.log(
      "\n========== ENQUIRY API HIT =========="
    );

    try {

      console.log(
        "REQ BODY:",
        req.body
      );

      const {
        name,
        email,
        mobile,
        interestedType,
        interestedIn,
      } = req.body;

      console.log(
        "Extracted Values:",
        {
          name,
          email,
          mobile,
          interestedType,
          interestedIn,
        }
      );

      let interestedItem;

      /* =========================
         CHECK TYPE
      ========================= */

      if (
        interestedType === "room"
      ) {

        console.log(
          "Searching ROOM with ID:",
          interestedIn
        );

        interestedItem =
          await Room.findById(
            interestedIn
          );

        console.log(
          "ROOM FOUND:",
          interestedItem
        );
      }

      if (
        interestedType === "floor"
      ) {

        console.log(
          "Searching FLOOR with ID:",
          interestedIn
        );

        interestedItem =
          await Floor.findById(
            interestedIn
          );

        console.log(
          "FLOOR FOUND:",
          interestedItem
        );
      }

      /* =========================
         ITEM NOT FOUND
      ========================= */

      if (!interestedItem) {

        console.log(
          "NO ITEM FOUND"
        );

        return res.status(404).json({
          success: false,
          message:
            "Selected item not found",
        });
      }

      /* =========================
         SAVE ENQUIRY
      ========================= */

      console.log(
        "Creating enquiry in DB..."
      );

      const enquiry =
        await Enquiry.create({
          name,
          email,
          mobile,
          interestedType,
          interestedIn,
        });

      console.log(
        "ENQUIRY SAVED:",
        enquiry
      );

      /* =========================
         SEND EMAIL
      ========================= */

      console.log(
        "Sending Emails..."
      );

      await sendEnquiryEmails({
        name,
        email,
        mobile,
        interestedType,
        interestedItem,
      });

      console.log(
        "EMAILS SENT SUCCESSFULLY"
      );

      /* =========================
         SUCCESS RESPONSE
      ========================= */

      console.log(
        "========== SUCCESS ==========\n"
      );

      res.status(201).json({
        success: true,
        message:
          "Enquiry submitted successfully",
        enquiry,
      });

    } catch (error) {

      console.log(
        "\n========== ERROR =========="
      );

      console.log(
        "ERROR MESSAGE:",
        error.message
      );

      console.log(
        "FULL ERROR:",
        error
      );

      console.log(
        "STACK:",
        error.stack
      );

      console.log(
        "========== ERROR END ==========\n"
      );

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* =========================
   GET ENQUIRIES
========================= */

export const getEnquiries =
  async (req, res) => {

    console.log(
      "\n========== GET ENQUIRIES API HIT =========="
    );

    try {

      const enquiries =
        await Enquiry.find()
          .populate("interestedIn")
          .sort({
            createdAt: -1,
          });

      console.log(
        "TOTAL ENQUIRIES:",
        enquiries.length
      );

      res.status(200).json({
        success: true,
        enquiries,
      });

    } catch (error) {

      console.log(
        "GET ENQUIRIES ERROR:",
        error
      );

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };