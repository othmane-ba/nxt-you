const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hero', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '10xl': '14rem',
      },
      colors: {
        blue: { light: '#3966e0', DEFAULT: '#0b60ac', dark: '#2D5070' },
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        '4-screen': '400vh',
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
        'ping-slow': 'ping 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
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
  purge: {
    enabled: true,
    // mode: postcss,
    content: [
      './slices/**/*.vue',
      './node_modules/swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.ts',
      './components/**/**.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/swiper/js/swiper.esm.js',
    ],
    options: {
      whitelistPatterns: [/^swiper/],
      whitelistPatternsChildren: [/^swiper/],
    },
  },
}
