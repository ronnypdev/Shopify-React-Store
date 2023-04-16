/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{liquid}",
    "./sections/**/*.{liquid}",
    "./snippets/**/*.{liquid}",
    "./templates/**/*.{liquid,json}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}