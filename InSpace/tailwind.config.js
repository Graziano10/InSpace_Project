/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url('./assets/formBg.png')"
      },
      backgroundVideo : {
        'form-bg-video': "url('./assets/form-video.mp4')"
      }
    },
    
  },
  plugins: [],
}

