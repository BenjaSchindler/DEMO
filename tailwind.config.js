/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Pumpkin: '#D06224',
        Nickel: '#717c89',
        PewterBlue: '#90baad',
        Beige:'#E9C891'
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}