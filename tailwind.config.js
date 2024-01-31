/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Quantum Flat Hollow (BRK)', 'sans-serif'],
      'serif': ['Lora', 'serif'],
      'mono': ['Space Mono', 'monospace'],
      'display': ['Montserrat', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
      colors:{
        dark_purple:"#000235",
        btn_primary:"#7e7ee3",
        heading_color:"#abd9d9",
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography'), require('taos/plugin')],
};