module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],

    extend: {
      animation: ['motion-safe']
    }
  },
  theme: {
    keyframes: {
      'jump-in-up': {
        from: {
          transform: 'translateY(0px)'
        },
        to: {
          transform: 'translateY(-5px)'
        }
      },
      'jump-out-down': {
        '0%': {
          transform: 'translateY(-5px)'
        },
        '100%': {
          transform: 'translateY(0)'
        }
      }
    },
    animation: {
      'jump-in-up': 'jump-in-up 0.5s ease-out forwards',
      'jump-out-down': 'jump-out-down 0.2s ease-out'
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
      },
      carmesim: {
        50: '#FF005C'
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
        },
        carmesim: {
          50: '#FF005C'
        }
      },
      backgroundImage: {}
    },
    fill: {
      current: 'currentColor'
    },
    fontFamily: {
      Heebo: ['Heebo', 'system-ui'],
      Montserrat: ['Montserrat', 'system-ui']
    }
  },
  plugins: []
}
