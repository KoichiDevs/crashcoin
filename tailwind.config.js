/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Bangers'],
        secondary: ['Chilanka'],
      },
      colors: {
        primary: '#ED9320',
        grn: '#00893d',
        rd: '#ca2c16'
      },
    },
  },
  plugins: [],
};
