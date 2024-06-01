/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
      },
      colors: {
        p1: "#F52F3B", //primary color
        n900: "#141414",
        n500: "#4A4A4A",
      },
      padding: {
        30: "120px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
