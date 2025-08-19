/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand", "cursive"],
      },
      colors: {
        primary: "#1E40AF", // xanh đậm
        secondary: "#FACC15", // vàng
        accent: "#F43F5E", // hồng
        pinky: "#E0807D",
      },
    },
  },
  plugins: [],
};
