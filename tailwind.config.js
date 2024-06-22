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
        r75: "#FBAAAF",
        r50: "#FEEAEB",
        o300: "#FEA11F",
        n900: "#141414",
        n0: "#1E1E1E",
        n500: "#4A4A4A",
        n20: "#F6F6F6",
        n30: "#ECECEC",
        n40: "#E0E0E0",
        n50: "#C4C4C4",
        n90: "#8E8E8E",

        // dark mode
        blackN30: "#202020",
        blackN40: "#2E2E2E",
        blackN50: "#3E3E3E",
        blackN60: "#585858",
        blackN500: "#B6B6B6",
      },
      padding: {
        30: "120px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
