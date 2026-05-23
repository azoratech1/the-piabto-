import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    heroTitle: {
      type: String,
      default: "",
    },

    heroSubtitle: {
      type: String,
      default: "",
    },

    aboutText: {
      type: String,
      default: "",
    },

    contactNumber: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Content", contentSchema);