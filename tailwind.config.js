/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF5555",
        primary: "#1677ff",
      },
    },
  },
  plugins: [],
};
