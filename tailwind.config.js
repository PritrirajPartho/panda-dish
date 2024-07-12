/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1vw',
      base: '1.5vw',
      xl: '2vw',
      '2xl': '3vw',
      '3xl': '4vw',
      '4xl': '5vw',
      '5xl': '6vw',
    },
    extend: {
      colors: {
        orange: {
          300: '#fdba74',
          500: '#FB923C',
          800: '#FA760A',
        },
        black: '#020617',
        white: '#fafafa',
    },
    screens: {
      'mobile': '400px',
      // => @media (min-width: 400px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }
      'desktop': '992px',
      // => @media (min-width: 992px) { ... }
    },
  },
  plugins: [],
  }
}