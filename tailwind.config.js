/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          navyLight: '#112240',
          navyMuted: '#1E3A8A',
          gold: '#D4AF37',
          goldHover: '#B5952F',
          goldLight: '#F5E6B3',
          slateBg: '#F8FAFC',
          slateText: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

