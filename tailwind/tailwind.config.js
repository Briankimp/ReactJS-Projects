/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this matches your file structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800", 
        blue: {
          450: '#5F99F7'
        },
      },
    },
  },
  plugins: [],
}
