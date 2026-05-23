import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      data: Buffer,

      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);