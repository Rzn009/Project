/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        dark_purple:"#000235",
        btn_primary:"#81689D",
        heading_color:"#abd9d9",
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography'), require('taos/plugin')],
};