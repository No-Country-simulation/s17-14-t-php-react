/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      medium: '600',
    },
    colors: {
      'blanco': '#ffffff',
      'blancoVioleta': '#FFCAFB',
      'gris': '#545557',
      'violeta': '#AA5BFF',
      'violeta2': '#F317FF',
    },
    extend: {
      fontFamily: {
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
