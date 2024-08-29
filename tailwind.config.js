/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
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
       fontSize: {
        xs: '0.2',
        sm: '0.3vw',
        base: '0.5vw',
        lg: '1vw',
        xl: '1.5vw',
        '2xl': '2vw',
        '3xl': '3vw',
        '4xl': '4vw',
        '5xl': '5vw',
        '6xl': '6vw',
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
      },
    fontFamily:{
      garamond: ['EB Garamond', 'serif'],
      poppins:  ['Poppins', 'sans-serif'],
      agdasima: ['Agdasima','sans-serif'],
      agufina:  ['Aguafina Script','cursive']
    }
  },

  plugins: [
    require('flowbite/plugin')
  ],
  }
}