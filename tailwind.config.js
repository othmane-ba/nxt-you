const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: { light: '#3966e0', DEFAULT: '#0b60ac', dark: '#074073' },
      },
      zIndex: {
        '-10': '-10',
      },
      boxShadow: {
        highlight: `0 0 30px rgba(57, 102, 224, 0.8)`,
      },
      transitionProperty: {
        size: 'width, height',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      delay: {
        1500: '1500ms',
      },
      animation: {
        slide: 'slide 1s ease-in-out infinite',
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
