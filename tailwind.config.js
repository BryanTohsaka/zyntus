/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'rich-black': '#0D0F11',
      'anti-flash': '#EFF1F3',
      'caribean': '#00BA76'
    },
    extend: {
      fontFamily:{
        "inter":['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}