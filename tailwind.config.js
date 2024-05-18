/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx,ts,js,jsx}",
    "./components/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f8941c",
      }
    },
  },
  plugins: [],
}

