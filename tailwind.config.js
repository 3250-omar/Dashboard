/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "serif"],
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
