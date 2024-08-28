/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.vue',
    './src/views/*.vue',
    './src/components/*.vue',
    './src/components/**/*.vue',
    './src/views/*.vue',
    './src/views/**/*.vue',
    './src/layouts/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};