/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        custom: {
          1: '#2a2a2a',
          2: '#393939',
          3: '#7a7c7f',
        },
      },
    },
  },
  plugins: [],
};
