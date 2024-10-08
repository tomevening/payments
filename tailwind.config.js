/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: {
          100: '#ABABAB',
          300: '#7a7c7f',
          400: '#4D4D4D',

          500: '#393939',
          550: '#333333',
          600: '#3A3A41',
          650: '#212529',
          850: '#2a2a2a',
          900: '#282828',
        },
        fulvous: {
          300: '#E2C299',
          500: '#caab81',
          600: '#C5A67C',
        },
        transparent: {
          4: '#f6f6f6',
          10: '#0000001A',
          60: '#21252999',
        },
      },
    },
  },
  plugins: [],
};
