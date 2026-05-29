/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f7fb",
          100: "#e7edf7",
          500: "#2d5b9a",
          700: "#173b6d",
          900: "#071d3a",
        },
        gold: "#b8944d",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(7, 29, 58, 0.10)",
      },
    },
  },
  plugins: [],
};