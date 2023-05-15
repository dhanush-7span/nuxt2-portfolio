/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '856px',
        },
        padding: {
          DEFAULT: '16px',
          lg: '0px',
        },
      },
      colors: {
        primary: {
          50: '#FFF0F0',
          100: '#FFE0E0',
          200: '#FFC2C2',
          300: '#FFA3A3',
          400: '#FF8585',
          500: '#FF6464',
          600: '#FF1F1F',
          700: '#D60000',
          800: '#8F0000',
          900: '#470000',
          950: '#240000',
        },
        secondary: {
          50: '#EDF7FA',
          100: '#70E6FF',
          200: '#47DFFF',
          300: '#1FD7FF',
          400: '#00CAF5',
          500: '#00A8CC',
          600: '#007A94',
          700: '#004C5C',
          800: '#001D24',
          900: '#000000',
          950: '#000000',
        },
        dark: {
          50: '#E5E6F1',
          100: '#CACCE2',
          200: '#9297C4',
          300: '#5D64A7',
          400: '#3F4474',
          500: '#21243D',
          600: '#1B1D32',
          700: '#141524',
          800: '#0D0E17',
          900: '#07080D',
          950: '#040407',
        },
        light: {
          50: '#F3F5F6',
          100: '#E8EBED',
          200: '#CDD4DA',
          300: '#B6BFC8',
          400: '#9FABB7',
          500: '#8695A4',
          600: '#677889',
          700: '#4D5966',
          800: '#323B43',
          900: '#1A1F23',
          950: '#0D0F11',
        },
      },
      lineHeight: {
        15: '60px',
      },
    },
  },
  plugins: [],
}
