/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        natural:{
           400:"#9890A6"
        }
       
      }
    },
  },
  plugins: [],
}