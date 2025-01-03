/** @type {import('tailwindcss').Config} */

const themeColors = {
  primary: {
    dark: "#242731",
    light: "#E0E4E7",
    purple: "#A162F7",
    blue: "#438FFE",
    red: "#D43B3B",
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
      500: "#7C7C8D",
      600: "#E9EAEC",
      700: "#72767C",
      800: "#A4A5A6",
      900: "#F5F5F5",
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
