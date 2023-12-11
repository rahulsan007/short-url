/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#F06225",
      primaryLight: "#fcdbcc",
      secondary: "#2a5bd7",
      lightBlack: "#1d1f21",
      lightGrey: "#f5f5f5",
      white: "#ffffff",
      black: "#000000",
      grey: "#808080",
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
