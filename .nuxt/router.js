import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb861f22 = () => interopDefault(import('.\\prismic\\pages\\preview.vue' /* webpackChunkName: "" */))
const _3bba6025 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _c7bfa838 = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _1bbb24a2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e721a478 = () => interopDefault(import('..\\pages\\_uid.vue' /* webpackChunkName: "pages/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _cb861f22,
    name: "prismic-preview"
  }, {
    path: "/privacy",
    component: _3bba6025,
    name: "privacy"
  }, {
    path: "/terms",
    component: _c7bfa838,
    name: "terms"
  }, {
    path: "/",
    component: _1bbb24a2,
    name: "index"
  }, {
    path: "/:uid",
    component: _e721a478,
    name: "uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
