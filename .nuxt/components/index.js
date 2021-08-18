import { wrapFunctional } from './utils'

export { default as HeroHeadline } from '../..\\components\\home\\HeroHeadline.vue'
export { default as Sphere } from '../..\\components\\home\\Sphere.vue'
export { default as CookieHint } from '../..\\components\\layout\\CookieHint.vue'
export { default as Footer } from '../..\\components\\layout\\Footer.vue'
export { default as PageLoader } from '../..\\components\\layout\\PageLoader.vue'
export { default as Pointer } from '../..\\components\\layout\\Pointer.vue'
export { default as PageHeader } from '../..\\components\\shared\\PageHeader.vue'
export { default as RangeSlider } from '../..\\components\\shared\\RangeSlider.vue'
export { default as Tag } from '../..\\components\\shared\\Tag.vue'

export const LazyHeroHeadline = import('../..\\components\\home\\HeroHeadline.vue' /* webpackChunkName: "components/hero-headline" */).then(c => wrapFunctional(c.default || c))
export const LazySphere = import('../..\\components\\home\\Sphere.vue' /* webpackChunkName: "components/sphere" */).then(c => wrapFunctional(c.default || c))
export const LazyCookieHint = import('../..\\components\\layout\\CookieHint.vue' /* webpackChunkName: "components/cookie-hint" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\layout\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyPageLoader = import('../..\\components\\layout\\PageLoader.vue' /* webpackChunkName: "components/page-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyPointer = import('../..\\components\\layout\\Pointer.vue' /* webpackChunkName: "components/pointer" */).then(c => wrapFunctional(c.default || c))
export const LazyPageHeader = import('../..\\components\\shared\\PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const LazyRangeSlider = import('../..\\components\\shared\\RangeSlider.vue' /* webpackChunkName: "components/range-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyTag = import('../..\\components\\shared\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => wrapFunctional(c.default || c))
