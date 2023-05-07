/** @type {import('tailwindcss').Config} */
const {theme} = require('./src/theme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sidebar:theme.colorsLight.sidebar,
        purple:theme.colorsLight.purple,
        pink:theme.colorsLight.pink,
        orange:theme.colorsLight.orange,
        darkPurple:theme.colorsLight.darkPurple,
        hover:theme.colorsLight.hover,
        background:theme.colorsLight.background,
      },
      fonts:{
        basic:theme.fonts.basic,
      },
      fontSize:{
        h1:theme.fontSizes.h1,
        h2:theme.fontSizes.h2,
        h3:theme.fontSizes.h3,
        p: theme.fontSizes.p,
      },
    },
  },
  plugins: [],
}

