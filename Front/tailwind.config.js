/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: {
        

          'gradient-primary': 'linear-gradient(135.3deg, #AA5BFF 24.87%, #F317FF 132.39%)',
          'gradient-secondary': 'linear-gradient(135.3deg, #FFB35B 24.87%, #F317FF 132.39%)',
        },
        fontFamily: {
        }
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  };
