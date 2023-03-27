/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/index.html",
    "./src/index.{html,js}",
    "./src/components/**.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
