export default {
  target: 'static',

  head: {
    title: 'NXTYOU - Make Your Vision Come Reality.',
    htmlAttrs: {
      lang: 'de',
    },
    bodyAttrs: {
      class: 'bg-black text-white fixed overflow-y-scroll',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Make Your Vision Come Reality.',
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
  },

  css: [],

  plugins: [
    '~/plugins/vue-awesome-swiper.client.ts',
    '~/plugins/vue-check-view.ts',
    '~/plugins/simple-parallax.client.ts',
    '~/plugins/vue-range-component.client.ts',
    '~/plugins/vuelidate.ts',
  ],

  components: {
    dirs: ['~/components/home', '~/components/layout', '~/components/shared'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/svg',
    'nuxt-gsap-module',
    '@nuxtjs/toast',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL,
    headers: { post: { 'Content-Type': 'application/json' } },
  },

  toast: {
    position: 'bottom-right',
    duration: 3000,
  },

  build: {},
}
