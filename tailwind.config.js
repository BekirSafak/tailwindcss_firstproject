/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      // Burada container yazılan her yerin kendisini ortalaması sağlandı.
      center: true,
    },

    extend: {
      fontFamily: {
        // Burada custom font eklendi.
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        // Burada custom color eklendi.
        'flower-yellow': '#FFE873',
        'flower-green': '#91A561',
        'flower-pink': '#E4C2D2',
        'flower-blue': '#3F6E9E',
        'flower-light-blue': '#97BEC9',
        'flower-light-green': '#C1E39E'
      },

      spacing: {
        512: '32rem',
      }
    },
  },
  plugins: [],
}

