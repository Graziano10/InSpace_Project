/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      s: "548px",

      md: "768px",

      mdd: "857px",

      x: "1025",

      xl: "1280px",

      "3xl": "1900px",
    },
    extend: {
      boxShadow:{
        "sxl" : "2px 36px 50px -8px rgba(167,166,166,0.75)"
      },
      backgroundImage: {
        "logo": "url('./assets/inspace_logo.png')",
        "form-bg": "url('./assets/formBg.png')",
        "form-bg2": "url('./assets/bg-3.webp')",
        "form-bg3": "url('./assets/spacewalk.jpg')",
        "form-bg4": "url('./assets/shuttle.webp')",
        "form-bg5": "url('./assets/shuttle.launching.webp')",
        "form-bg6": "url('./assets/donna_blue.webp')",
        "form-bg7": "url('./assets/rocket.jpeg')",
        "Wiki-bg": "url('./assets/WikiBackground.png')"
      },
      
    },
  },
  plugins: [],
};
