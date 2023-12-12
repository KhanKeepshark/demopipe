/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF5555",
        primary: "#1677ff",
        brand: {
          primary: "#225e9c",
          secondary: "#d3ffff",
          gradient1: "#1d7cd4",
          gradient2: "#bcccef",
          orange: "#ff8765",
          dark: "#01438e",
          aqua: "#b9fefe",
          aqua2: "#00f9f9",
          aqua3: "#67ecec",
          aquaLigt: "#f2f7fa",
        },
        gray: "#535353",
      },
      fontFamily: {
        sansArial: "Arial,sans-serif",
      },
      boxShadow: {
        all: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        exerciseBgImg: "url('/src/shared/assets/images/exerciseBgImg.jpeg')",
      },
    },
  },
  plugins: [],
};
