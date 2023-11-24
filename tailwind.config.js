/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b3b3b",
      },
      backgroundImage: {
        "nav-pattern": "url('/src/assets/Navbg.png')",
      },
    },
  },
  plugins: [],
}

