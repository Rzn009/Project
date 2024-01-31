/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'quantum-flat-hollow': ['Quantum Flat Hollow (BRK)', 'sans-serif'],
        'quantum-flat': ['Quantum Flat (BRK)', 'sans-serif'],
        'quantum-round-hollow': ['Quantum Round Hollow (BRK)', 'sans-serif'],
        'quantum-round': ['Quantum Round (BRK)', 'sans-serif'],
        'quantum-taper': ['Quantum Taper (BRK)', 'sans-serif'],
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