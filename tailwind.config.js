/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      colors: {
        'customBrand': {
          100 : '#0a192f',
          200 : '#00141e',
          300 : '#0a192f',
          400 : '#010a0f',
          500 : '#0a192f',
        },
        customGreen: {
          200: '#008357',
        }

      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        200:  '200px',
        300: '300px',
        400: '400px',
        760: '760px',
        600: '600px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://unsplash.com/photos/vKk7thmr9Mc')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

