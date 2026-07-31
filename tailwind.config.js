/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#F0F6FF',
            100: '#E0EDFF',
            200: '#C7DDFF',
            300: '#9FBEFF',
            400: '#6E96FF',
            500: '#3B66F6', // Vibrant Trust Blue
            600: '#254EDB',
            700: '#1E3A8A', // Deep Trust Blue
            800: '#1C3473',
            900: '#182B5C',
            950: '#0F1836',
          },
          emerald: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669', // Conversion CTA Green
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
            950: '#022C22',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
