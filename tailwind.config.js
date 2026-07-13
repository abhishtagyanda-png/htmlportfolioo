/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        navy: '#0B1B3D',
        accent: '#4A90E2',
        surface: 'rgba(11, 27, 61, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
