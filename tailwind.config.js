/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eth-blue': '#3c3c3d',
        'eth-light': '#ecf0f1',
        'purple': {
          light: '#9b59b6',
          DEFAULT: '#8e44ad',
          dark: '#6c3483',
        },
      },
    },
  },
  plugins: [],
}