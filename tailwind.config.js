
const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        cyan: colors.cyan,
      }
    },
  },
  variants: {
    extend: {
      hidden: ['group-hover'],
    },
  },
  plugins: [],
}
