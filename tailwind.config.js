/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F1A5F",
        themeOrange: "#FF6B00",
        lightPink: "#FEF1E0",
        lightBlue: "#E8E7FF",
        themeBlack: "#01002B",
      },
    },
  },
  plugins: [],
};
