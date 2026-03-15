/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A4D8C',
          cyan: '#13A8B8',
          green: '#2BB673',
          light: '#E8F7F9',
          dark: '#0C2A44',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(10, 77, 140, 0.12)',
      },
    },
  },
  plugins: [],
}
