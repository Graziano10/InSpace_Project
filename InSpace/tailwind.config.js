/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      
      'xs': '300px',

      's':'548px',
      

      'md': '768px',
      

      
     

      'xl': '1280px',
     

      '3xl' : '1900px',
    },
    extend: {},
  },
  plugins: [],
}
