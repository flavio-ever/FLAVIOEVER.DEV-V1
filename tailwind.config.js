module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor'
    },
    textColor: {
      dark: {
        50: '#1B1C1F',
        100: '#25272E',
        200: '#3D3F51',
        300: '#959BBB',
        400: '#D9DDF4'
      },
      purple: {
        50: '#512DE3'
      },
      yellow: {
        50: '#FFD600'
      }
    },
    extend: {
      colors: {
        dark: {
          50: '#1B1C1F',
          100: '#25272E',
          200: '#3D3F51',
          300: '#959BBB',
          400: '#D9DDF4'
        },
        purple: {
          50: '#512DE3'
        },
        yellow: {
          50: '#FFD600'
        }
      },
      backgroundImage: {}
    },
    fontFamily: {
      Heebo: ['Heebo', 'system-ui'],
      Montserrat: ['Montserrat', 'system-ui']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
