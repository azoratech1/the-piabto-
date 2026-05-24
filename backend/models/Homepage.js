import mongoose from "mongoose";

const imageSchema =
  new mongoose.Schema({

    data: Buffer,

    contentType: String,

  });

const homepageSchema =
  new mongoose.Schema({

  hero: [
  {
    subtitle: String,

    title: String,

    description: String,

    buttonText: {
      type: String,
      default: "Explore The Estate",
    },

    buttonLink: {
      type: String,
      default: "/rooms",
    },

    showButton: {
      type: Boolean,
      default: true,
    },

    showVideoButton: {
      type: Boolean,
      default: false,
    },

    videoText: {
      type: String,
      default: "Watch Video",
    },

    videoUrl: String,

    image: imageSchema,
  },
],

    about: {

      title: String,

      description: String,

      image: imageSchema,
    },

    amenities: [
      {
        title: String,

        icon: String,
      },
    ],

    

    reviews: [
      {
        name: String,

        location: String,

        review: String,

        rating: Number,
      },
    ],

  },

  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Homepage",
  homepageSchema
);