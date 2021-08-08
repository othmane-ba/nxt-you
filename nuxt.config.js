import pwa from './pwa.config'
export default {
  target: 'static',
  head: {
    title: 'NXT YOU',
    titleTemplate: '%s - Make Your Vision Come Reality.',
    htmlAttrs: {
      lang: 'de',
    },
    bodyAttrs: {
      class: 'bg-black text-white',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      /*
    { rel: 'manifest', href: '/site.webmanifest' },
    */
    ],
    script: [
      {
        src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      },
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV !== 'production',
  },
  css: ['vue-essential-slices/src/styles/styles.scss'],
  plugins: [
    '~/plugins/vue-awesome-swiper.client.js',
    '~/plugins/vue-check-view.js',
    '~/plugins/simple-parallax.client.js',
    '~/plugins/vue-range-component.client.js',
    '~/plugins/vuelidate.js',
    '~/plugins/jsonld.js',
    '~/plugins/vue-gtag.client.js',
  ],
  components: {
    dirs: ['~/components/home', '~/components/layout', '~/components/shared'],
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/svg',
    'nuxt-gsap-module',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/prismic',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/cloudinary', '@nuxtjs/prismic'],
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
  },
  toast: {
    position: 'bottom-right',
    duration: 3000,
  },
  pwa,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
    useComponent: true,
  },
  prismic: {
    endpoint: 'https://nxtyou.cdn.prismic.io/api/v2',
    modern: true,
    apiOptions: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
      ],
    },
  },
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  storybook: {
    stories: [],
  },
  ignore: ['**/*.stories.js'],
}
