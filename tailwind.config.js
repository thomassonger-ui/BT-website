/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bear: {
          navy: "#1b2a41",
          gold: "#c9a227",
          cream: "#faf7f0",
          slate: "#4a5568",
        },
      },
    },
  },
  plugins: [],
};
