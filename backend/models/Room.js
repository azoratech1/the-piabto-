import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    pricePerRoom: {
      type: Number,
      required: true,
    },

    pricePerPerson: {
      type: Number,
      required: true,
    },

    maxGuests: {
      type: Number,
      required: true,
    },

    totalRooms: {
      type: Number,
      required: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    images: [
      {
        data: Buffer,

        contentType: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);