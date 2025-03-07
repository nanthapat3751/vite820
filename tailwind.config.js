/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primayTitle: '#AD8B73',
        primaryContent: '#FFFBE9',
        primarySubcontent: '#AD8B73', 
        primaryBase: '#CEAB93',
        primaryAccent: '#E5B299',
        primaryBg: '#FFF5E4',
      },
    },
  },
  plugins: [],
}

