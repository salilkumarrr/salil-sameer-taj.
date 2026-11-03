/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      wine: { 950: '#310a12', 900: '#54121d', 800: '#6c1b29', 700: '#84283a' },
      saffron: { 300: '#f0d18a', 400: '#d9b15f', 500: '#bd9140' },
      cream: { 50: '#fffdf8', 100: '#fff8ed', 200: '#f6ecdc' }
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      display: ['Playfair Display', 'serif']
    },
    boxShadow: { soft: '0 18px 55px rgba(75, 27, 25, .09)' }
  }},
  plugins: []
}