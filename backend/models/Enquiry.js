import mongoose from "mongoose";

const enquirySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      mobile: {
        type: String,
        required: true,
      },

      interestedType: {
        type: String,
        enum: ["room", "floor"],
        required: true,
      },

      interestedIn: {
        type: mongoose.Schema.Types.ObjectId,

        refPath: "interestedType",
      },
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Enquiry",
  enquirySchema
);