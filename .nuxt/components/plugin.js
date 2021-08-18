import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HeroHeadline: () => import('../..\\components\\home\\HeroHeadline.vue' /* webpackChunkName: "components/hero-headline" */).then(c => wrapFunctional(c.default || c)),
  Sphere: () => import('../..\\components\\home\\Sphere.vue' /* webpackChunkName: "components/sphere" */).then(c => wrapFunctional(c.default || c)),
  CookieHint: () => import('../..\\components\\layout\\CookieHint.vue' /* webpackChunkName: "components/cookie-hint" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\layout\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  PageLoader: () => import('../..\\components\\layout\\PageLoader.vue' /* webpackChunkName: "components/page-loader" */).then(c => wrapFunctional(c.default || c)),
  Pointer: () => import('../..\\components\\layout\\Pointer.vue' /* webpackChunkName: "components/pointer" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../..\\components\\shared\\PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c)),
  RangeSlider: () => import('../..\\components\\shared\\RangeSlider.vue' /* webpackChunkName: "components/range-slider" */).then(c => wrapFunctional(c.default || c)),
  Tag: () => import('../..\\components\\shared\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
