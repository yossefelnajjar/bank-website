/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/index.{html,js}",
    "./src/components/**.{html,js}",
  ],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
    },
    extend: {},
  },
  plugins: [],
};
