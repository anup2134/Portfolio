/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#0F172A",
        foregroundDark: "#e2e8f0",
        foregroundLight: "#0f172a",
        sky: "#0ea5e9",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 10s linear infinite",
      },
    },
  },
  plugins: [],
};
