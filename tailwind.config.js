const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}" , "./src/js/theme.js","./src/js/dark.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
    screens: {
      'xs': '200px',
      's': '400px',
      // => @media (min-width: 200px) { ... }
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  
};
