/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007FAB',
          dark: '#003A4F',
          tint: '#B0D2DE'
        },
        secondary: {
          DEFAULT: '#FFC37D',
          dark: '#A46039',
          tint: '#FFE2A9',
        },
        black: {
          DEFAULT: '#000000',
          800: '#CCCCCC',
          600: '#999999',
          400: '#666666',
          200: '#333333',
          0: '#FFFFFF'
        },
        highlight: {
          DEFAULT: '#FF5136',
          dark: '#CD331A',
          tint: '#FFB5A4',
        },
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
