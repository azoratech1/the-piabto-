import mongoose from "mongoose";

const imageSchema =
  new mongoose.Schema({

    data: Buffer,

    contentType: String,

  });

const homepageSchema =
  new mongoose.Schema({

    hero: {

      subtitle: String,

      title: String,

      description: String,

      image: imageSchema,
    },

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

    floors: [
      {
        title: String,

        subtitle: String,

        description: String,

        price: String,

        image: imageSchema,
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