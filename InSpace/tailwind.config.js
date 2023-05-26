/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url('./assets/formBg.png')",
        'form-bg2' : "url('./assets/bg-3.webp')"
      },
      
    },
    
  },
  plugins: [],
}

