import pwa from './pwa.config'
import smConfig from './sm.json'
import Prismic from '@prismicio/client'

const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

const getPages = async () => {
  const allPages = await Prismic.getApi(process.env.PRISMIC_API_URL)
    .then((api) =>
      api.query(Prismic.Predicates.any('document.type', ['page', 'homepage']))
    )
    .then((p) => p.results)
  const disallowedPages = [
    '/preview',
    ...allPages.flatMap((p) => (!p.data.crawlable ? [`/${p.uid || ''}`] : [])),
  ]
  return { allPages, disallowedPages }
}

const getStructuredData = (pages) => {
  const jsonld = {
    logo: {
      url: 'https://nxtyou.de/',
      logo: 'https://nxtyou.de/logo.png',
    },
    breadcrumbs: pages.flatMap((p) =>
      p.data.crawlable
        ? [
            {
              url: `https://nxtyou.de/${p.uid || ''}`,
              text: p.data.breadcrumbTitle,
            },
          ]
        : []
    ),
  }

  const items = jsonld.breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.text,
    item: item.url,
  }))

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: jsonld.logo.url,
      logo: jsonld.logo.logo,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    },
  ]
}

export default async () => {
  const { allPages, disallowedPages } = await getPages()
  const structuredData = getStructuredData(allPages)

  return {
    target: 'static',
    head: {
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
      ],
      script: [
        {
          src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
        },
        {
          src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=nxtyou',
        },
        { type: 'application/ld+json', json: structuredData },
      ],
    },
    env: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
      dev: process.env.NODE_ENV !== 'production',
    },

    css: ['splitting/dist/splitting.css'],

    plugins: [
      '~/plugins/vue-awesome-swiper.client.js',
      '~/plugins/simple-parallax.client.js',
      '~/plugins/vuelidate.js',
      '~/plugins/jsonld.js',
      '~/plugins/vue-gtag.client.js',
      '~/plugins/animate.client.js',
      '~/plugins/lazy-load.client.js',
    ],
    components: {
      dirs: ['~/components/home', '~/components/layout', '~/components/shared'],
    },

    buildModules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/device',
      'nuxt-gsap-module',
      '@nuxtjs/pwa',
      'cookie-universal-nuxt',
      '@nuxtjs/prismic',
      'nuxt-sm',
    ],

    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/cloudinary',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap', // If you use other modules, always declare the sitemap module at end of array
    ],

    axios: {
      baseURL: process.env.BASE_URL,
      headers: {
        post: {
          'Content-Type': 'application/json',
        },
      },
    },

    generate: {
      routes: [...allPages.map((p) => (p.uid ? `/${p.uid}` : '/'))],
    },

    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUDNAME,
    },
    pwa,
    tailwindcss: {
      cssPath: '~/assets/css/tailwind.css',
    },

    prismic: {
      endpoint: smConfig.apiEndpoint,
      modern: true,
      apiOptions: {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        routes: [
          {
            type: 'homepage',
            path: '/',
          },
          {
            type: 'page',
            path: '/:uid',
          },
        ],
      },
    },

    build: {
      transpile: ['vue-slicezone', 'nuxt-sm', 'splitting'],
    },
    storybook: {
      stories: [...getStoriesPaths()],
    },
    ignore: ['**/*.stories.js'],

    robots: {
      UserAgent: '*',

      Disallow: disallowedPages,
      Sitemap: 'http://nxtyou.de/sitemap.xml',
    },

    sitemap: {
      hostname: 'https://nxtyou.de',
      exclude: disallowedPages,
      routes: allPages.map((p) => (p.uid ? `/${p.uid}` : '/')),
    },
  }
}
