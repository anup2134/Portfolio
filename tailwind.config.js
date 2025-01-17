/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#0F172A",
        foregroundDark: "#e2e8f0",
        foregroundLight: "#0f172a",
        sky: "#0ea5e9",
      },
    },
  },
  plugins: [],
};
