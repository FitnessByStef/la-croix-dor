/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         background: "#2B2B2D",
          surface: "#1F1F20",
          light: "#FFFFFF",
          greyLight: "#9FA1A4",
          gold: "#DCB253",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
