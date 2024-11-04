import { faItalic } from '@fortawesome/free-solid-svg-icons';

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
              transform:'translateY(40px)',
              opacity : '0',
            },
            '100%' : {
              transform:'traslateY(0)',
              opacity : '1',
            }
        }
      },
      fontFamily:{
        sans:["Cormorant Garamond", "serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontStyle:{
        italic: 'italic',
        normal: 'normal',
      },
      animation:{
        popup : 'popup 0.4s ease-in forwards'
      }
    },
  },
  plugins: [],
}