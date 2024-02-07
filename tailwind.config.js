/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode : 'class',
  theme: {
    extend: {
      keyframes: {
        neon: {
          "0%": {
            textShadow: "0 0 10px #00B9FC",
          },
          "100%": {
            textShadow: "0 0 10px #ff0000",
          },
        },
      colors:{
        dark_purple:"#000235",
        btn_primary:"#81689D",
        heading_color:"#abd9d9",
        background : "#4A00E0",
        background1 : "#8E2DE2",
        background2:"#82589F"
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography'), require('taos/plugin')],
}
};