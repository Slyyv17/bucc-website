/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20448F",
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#FBDD3B", 
        blockBg: "#e9ecf4",
        grey: "#D9D9D9",
      },
      fontFamily: {
        primaryFF: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'heroImage': "url('../src/assets/hero-image.jpg')",
        'about-us': "url('../src/assets/about-us.jpg')",
      },
      flex: {
        '7': '0 0 70%',
        '5': '0 0 50%',
      }
    },
  },
  plugins: [],
}
