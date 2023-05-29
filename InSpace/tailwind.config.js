/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo' : "url('./assets/inspace_logo.png')",
        'form-bg': "url('./assets/formBg.png')",
        'form-bg2' : "url('./assets/bg-3.webp')",
        'form-bg3' : "url('./assets/spacewalk.jpg')",
        'form-bg4' : "url('./assets/shuttle.webp')",
        'form-bg5' : "url('./assets/shuttle.launching.webp')",
        'form-bg6' : "url('./assets/donna_blue.webp')",
      },
      
    },
    
  },
  plugins: [],
}

