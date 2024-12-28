/** @type {import('tailwindcss').Config} */

const themeColors = {
  primary: {
    dark: "#242731",
    light: "#E0E4E7",
    purple: "#A162F7",
    blue: "#438FFE",
  },
  secondary: {
    purple: "#A162F7",
    blue: "#2884FF",
    yellow: "#F6CC0D",
    red: "#FF6370",
    green: "#70CF97",
    orange: "#FF764C",
    gray: {
      400: "#5F6165",
      700: "#72767C",
    },
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"], // Add DM Sans
      },
      colors: themeColors,
    },
  },
  plugins: [],
};
