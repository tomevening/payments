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
          850: '#2a2a2a',
          900: '#282828',
        },
        fulvous: {
          300: '#E2C299',
          500: '#caab81',
          600: '#C5A67C',
        },
        transparent: {
          10: '#0000001A',
        },
        // custom: {
        //   1: '#2a2a2a',
        //   2: '#393939',
        //   3: '#7a7c7f',
        //   4: '#caab81',
        //   5: '#ABABAB',
        //   6: '#E2C299',
        //   7: '#C5A67C',
        // },
      },
    },
  },
  plugins: [],
};
