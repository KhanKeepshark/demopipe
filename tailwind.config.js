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
        darkBlue: "#0067C6",
        secondary: "#d9d9d9",
      },
      fontFamily: {
        sansArial: "Arial, sans-serif",
        mulish: "Mulish, Arial, sans-serif",
      },
      boxShadow: {
        all: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        exerciseBgImg: "url('/src/shared/assets/images/exerciseBgImg.jpeg')",
      },
      spacing: {
        0.1: "1px",
      },
      rotate: {
        120: "120deg",
      },
      fontSize: {
        Regular10: [
          "0.625rem",
          {
            lineHeight: ".75rem",
            fontWeight: "400",
          },
        ],
        Regular11: [
          "0.6875rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        Regular12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        Regular14: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        Regular16: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        Medium12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
          },
        ],
        Medium14: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
          },
        ],
        Medium16: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],
        Medium32: [
          "2rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "500",
          },
        ],
        Semibold11: [
          "0.6875rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        Semibold12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        Semibold16: [
          "1rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        Semibold20: [
          "1.25rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        Semibold48: [
          "3rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        Bold11: [
          "0.6875rem",
          {
            lineHeight: "1rem",
            fontWeight: "700",
          },
        ],
        Bold12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "700",
          },
        ],
        Bold14: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "700",
          },
        ],
        Bold16: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "700",
          },
        ],
        Bold20: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        Bold24: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
          },
        ],
        Bold32: [
          "2rem",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        Bold42: [
          "2.625rem",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
