/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        custom: {
          1: '#2a2a2a',
          2: '#393939',
          3: '#7a7c7f',
          4: '#caab81',
          5: '#ABABAB',
        },
      },
    },
  },
  plugins: [],
};
