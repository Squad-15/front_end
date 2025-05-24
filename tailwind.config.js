/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontSize: {
        h1: '50px',
        h2: '40px',
        h3: '30px',
        h4: '25px',
        h5: '20px',
        h6: '16px',
      },
      colors: {
        primary: '#BC1F1B',
        secondary: '#2B2522',
        assets: '#F5EDEB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
