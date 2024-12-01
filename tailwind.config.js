/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e1f1',
          200: '#b3c3e3',
          300: '#8da5d5',
          400: '#6687c7',
          500: '#4069b9',
          600: '#334f8c',
          700: '#1a2844',
          800: '#111c2f',
          900: '#080e17',
        }
      }
    },
  },
  plugins: [],
};