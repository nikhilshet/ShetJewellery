/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        popup:{
            '0%' :{
              transform:'translateY(20px)',
              opacity : '0',
            },
            '100%' : {
              transform:'traslateY(0)',
              opacity : '1',
            }
        }
      },
      fontFamily:{
        sans:["Playfair Display", "serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      animation:{
        popup : 'popup 0.4s ease-in forwards'
      }
    },
  },
  plugins: [],
}