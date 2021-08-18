import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_43c2c5b6 from 'nuxt_plugin_plugin_43c2c5b6' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_smresolver_514cc237 from 'nuxt_plugin_smresolver_514cc237' // Source: .\\prismic\\sm-resolver.js (mode: 'all')
import nuxt_plugin_prismic_e1396b9e from 'nuxt_plugin_prismic_e1396b9e' // Source: .\\prismic\\plugins\\prismic.js (mode: 'all')
import nuxt_plugin_prismiccomponents_2462af9a from 'nuxt_plugin_prismiccomponents_2462af9a' // Source: .\\prismic\\plugins\\prismic-components.js (mode: 'all')
import nuxt_plugin_axios_4946ca4e from 'nuxt_plugin_axios_4946ca4e' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_b0412efe from 'nuxt_plugin_cookieuniversalnuxt_b0412efe' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_metaplugin_429ba596 from 'nuxt_plugin_metaplugin_429ba596' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_394c5aae from 'nuxt_plugin_iconplugin_394c5aae' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_toast_b0e630f0 from 'nuxt_plugin_toast_b0e630f0' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_gsapModule_02a5d218 from 'nuxt_plugin_gsapModule_02a5d218' // Source: .\\gsapModule.js (mode: 'all')
import nuxt_plugin_deviceplugin_a6876d38 from 'nuxt_plugin_deviceplugin_a6876d38' // Source: .\\device.plugin.js (mode: 'all')
import nuxt_plugin_vueawesomeswiperclient_06965d5d from 'nuxt_plugin_vueawesomeswiperclient_06965d5d' // Source: ..\\plugins\\vue-awesome-swiper.client.js (mode: 'client')
import nuxt_plugin_vuecheckview_535e18b0 from 'nuxt_plugin_vuecheckview_535e18b0' // Source: ..\\plugins\\vue-check-view.js (mode: 'all')
import nuxt_plugin_simpleparallaxclient_52ca400c from 'nuxt_plugin_simpleparallaxclient_52ca400c' // Source: ..\\plugins\\simple-parallax.client.js (mode: 'client')
import nuxt_plugin_vuerangecomponentclient_12480e64 from 'nuxt_plugin_vuerangecomponentclient_12480e64' // Source: ..\\plugins\\vue-range-component.client.js (mode: 'client')
import nuxt_plugin_vuelidate_4be431c8 from 'nuxt_plugin_vuelidate_4be431c8' // Source: ..\\plugins\\vuelidate.js (mode: 'all')
import nuxt_plugin_jsonld_2ff766e1 from 'nuxt_plugin_jsonld_2ff766e1' // Source: ..\\plugins\\jsonld.js (mode: 'all')
import nuxt_plugin_vuegtagclient_0490790e from 'nuxt_plugin_vuegtagclient_0490790e' // Source: ..\\plugins\\vue-gtag.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"NXT YOU","titleTemplate":"%s - Make Your Vision Come Reality.","htmlAttrs":{"lang":"de"},"bodyAttrs":{"class":"bg-black text-white"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"}],"script":[{"src":"https:\u002F\u002Fcdn.polyfill.io\u002Fv2\u002Fpolyfill.min.js?features=Element.prototype.classList"},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Ffocus-visible@5.0.2\u002Fdist\u002Ffocus-visible.min.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_43c2c5b6 === 'function') {
    await nuxt_plugin_plugin_43c2c5b6(app.context, inject)
  }

  if (typeof nuxt_plugin_smresolver_514cc237 === 'function') {
    await nuxt_plugin_smresolver_514cc237(app.context, inject)
  }

  if (typeof nuxt_plugin_prismic_e1396b9e === 'function') {
    await nuxt_plugin_prismic_e1396b9e(app.context, inject)
  }

  if (typeof nuxt_plugin_prismiccomponents_2462af9a === 'function') {
    await nuxt_plugin_prismiccomponents_2462af9a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_4946ca4e === 'function') {
    await nuxt_plugin_axios_4946ca4e(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_b0412efe === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_b0412efe(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_429ba596 === 'function') {
    await nuxt_plugin_metaplugin_429ba596(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_394c5aae === 'function') {
    await nuxt_plugin_iconplugin_394c5aae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_b0e630f0 === 'function') {
    await nuxt_plugin_toast_b0e630f0(app.context, inject)
  }

  if (typeof nuxt_plugin_gsapModule_02a5d218 === 'function') {
    await nuxt_plugin_gsapModule_02a5d218(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_a6876d38 === 'function') {
    await nuxt_plugin_deviceplugin_a6876d38(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomeswiperclient_06965d5d === 'function') {
    await nuxt_plugin_vueawesomeswiperclient_06965d5d(app.context, inject)
  }

  if (typeof nuxt_plugin_vuecheckview_535e18b0 === 'function') {
    await nuxt_plugin_vuecheckview_535e18b0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_simpleparallaxclient_52ca400c === 'function') {
    await nuxt_plugin_simpleparallaxclient_52ca400c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuerangecomponentclient_12480e64 === 'function') {
    await nuxt_plugin_vuerangecomponentclient_12480e64(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelidate_4be431c8 === 'function') {
    await nuxt_plugin_vuelidate_4be431c8(app.context, inject)
  }

  if (typeof nuxt_plugin_jsonld_2ff766e1 === 'function') {
    await nuxt_plugin_jsonld_2ff766e1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuegtagclient_0490790e === 'function') {
    await nuxt_plugin_vuegtagclient_0490790e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
