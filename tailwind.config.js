/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#0F172A",
        foregroundDark: "#e2e8f0",
        foregroundLight: "#1e293b",
        paraDark: "#94a3b8",
        para: "#64748b",
        sky: "#0ea5e9",
        darkButton: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
