/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, css}'],
  theme: {
    extend: {
      screens: {
        mb: { max: '869px' },
      },
      colors: {
        black: '#000000',
        white: '#F0F2F5',
        gray: {
          500: '#837E9F',
          700: '#302F3D',
          800: '#22212C',
        },
        green: {
          300: '#00FD00',
          400: '#00793365',
        },
        yellow: {
          300: '#E7DE79',
        },
        pink: {
          300: '#CB92B1',
        },
      },
      backgroundImage: {
        loader: 'linear-gradient(45deg,#F0F2F5,transparent)',
      },
      keyframes: {
        SHOW_UP: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        showup: 'SHOW_UP 750ms 1 cubic-bezier(0.7,0.7,0.7,0.7)',
      },
    },
  },
  plugins: [],
}
