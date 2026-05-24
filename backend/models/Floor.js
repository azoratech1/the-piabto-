import mongoose from "mongoose";

const floorSchema = new mongoose.Schema(
  {
    floorNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    totalRooms: {
      type: Number,
      required: true,
    },

    availableRooms: {
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

    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ],

    booked: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Floor", floorSchema);