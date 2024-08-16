/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'primary': '#201E43',
        'secondary': '#134B70',
        'tertiary': '#508C9B',
        'quaternary': '#EEEEEE',
      },
    },
  },
  plugins: [],
}