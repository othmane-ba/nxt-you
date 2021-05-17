const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-10': '-10',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      animation: {
        slide: 'slide 2s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { left: '-1px', transform: 'translateX(-100%)' },
          '100%': { left: 'calc(100% + 1px)', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
