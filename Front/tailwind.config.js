/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Escanea todos los archivos en 'src' y subdirectorios
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#AA5BFF',
      'purple2': '#F317FF',
    }
  },
  plugins: [],
};
