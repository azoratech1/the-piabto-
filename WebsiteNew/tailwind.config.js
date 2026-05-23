/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {

    extend: {

      colors: {

        background: "#f6f1e8",

        primary: "#1f170f",

        secondary: "#6d6254",

        gold: "#b08a57",

        "gold-light": "#d4af6d",

        green: "#1f3a2c",

        "green-soft": "#294838",

        cream: "#efe7dc",

      },

      fontFamily: {

        heading: [
          "Cormorant Garamond",
          "serif",
        ],

        body: [
          "HelveticaNowMTText",
          "Lucida Sans",
          "Lucida Grande",
          "Lucida Sans Unicode",
          "Trebuchet MS",
          "sans-serif",
        ],

      },

      boxShadow: {

        luxury:
          "0 20px 60px rgba(0,0,0,0.08)",

        gold:
          "0 15px 45px rgba(176,138,87,0.14)",

        soft:
          "0 8px 30px rgba(0,0,0,0.05)",

      },

      backgroundImage: {

        luxuryGradient:
          "linear-gradient(135deg,#1f170f,#b08a57)",

      },

    },

  },

  plugins: [],
};