/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
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
      'sm': '400px',
      // => @media (min-width: 400px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    },
    dropShadow: {
      'xl': '0 15px 15px #fdba74',
      '2xl': '0 35px 35px #FA760A'     
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  }
}