/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   /*  container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
    }, */
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

