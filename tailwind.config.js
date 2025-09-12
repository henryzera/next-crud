/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ou "./app/**/*.{js,ts,jsx,tsx}" se usar app directory
  ],
  safelist: [
    "from-blue-400", "to-blue-700",
    "from-green-400", "to-green-700",
    "from-gray-400", "to-gray-700",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
