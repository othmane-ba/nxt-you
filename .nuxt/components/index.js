import { wrapFunctional } from './utils'

export { default as BrandTeaser } from '../..\\components\\home\\BrandTeaser.vue'
export { default as ClientList } from '../..\\components\\home\\ClientList.vue'
export { default as FeatureSlider } from '../..\\components\\home\\FeatureSlider.vue'
export { default as Hero } from '../..\\components\\home\\Hero.vue'
export { default as HeroHeadline } from '../..\\components\\home\\HeroHeadline.vue'
export { default as IntroText } from '../..\\components\\home\\IntroText.vue'
export { default as Portfolio } from '../..\\components\\home\\Portfolio.vue'
export { default as Sphere } from '../..\\components\\home\\Sphere.vue'
export { default as TestimonialSlider } from '../..\\components\\home\\TestimonialSlider.vue'
export { default as VideoGrid } from '../..\\components\\home\\VideoGrid.vue'
export { default as Work } from '../..\\components\\home\\Work.vue'
export { default as PageLoader } from '../..\\components\\layout\\PageLoader.vue'
export { default as Pointer } from '../..\\components\\layout\\Pointer.vue'
export { default as Contact } from '../..\\components\\shared\\Contact.vue'
export { default as Icon } from '../..\\components\\shared\\Icon.vue'
export { default as NumText } from '../..\\components\\shared\\NumText.vue'

export const LazyBrandTeaser = import('../..\\components\\home\\BrandTeaser.vue' /* webpackChunkName: "components/brand-teaser" */).then(c => wrapFunctional(c.default || c))
export const LazyClientList = import('../..\\components\\home\\ClientList.vue' /* webpackChunkName: "components/client-list" */).then(c => wrapFunctional(c.default || c))
export const LazyFeatureSlider = import('../..\\components\\home\\FeatureSlider.vue' /* webpackChunkName: "components/feature-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../..\\components\\home\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroHeadline = import('../..\\components\\home\\HeroHeadline.vue' /* webpackChunkName: "components/hero-headline" */).then(c => wrapFunctional(c.default || c))
export const LazyIntroText = import('../..\\components\\home\\IntroText.vue' /* webpackChunkName: "components/intro-text" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolio = import('../..\\components\\home\\Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const LazySphere = import('../..\\components\\home\\Sphere.vue' /* webpackChunkName: "components/sphere" */).then(c => wrapFunctional(c.default || c))
export const LazyTestimonialSlider = import('../..\\components\\home\\TestimonialSlider.vue' /* webpackChunkName: "components/testimonial-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoGrid = import('../..\\components\\home\\VideoGrid.vue' /* webpackChunkName: "components/video-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyWork = import('../..\\components\\home\\Work.vue' /* webpackChunkName: "components/work" */).then(c => wrapFunctional(c.default || c))
export const LazyPageLoader = import('../..\\components\\layout\\PageLoader.vue' /* webpackChunkName: "components/page-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyPointer = import('../..\\components\\layout\\Pointer.vue' /* webpackChunkName: "components/pointer" */).then(c => wrapFunctional(c.default || c))
export const LazyContact = import('../..\\components\\shared\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const LazyIcon = import('../..\\components\\shared\\Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const LazyNumText = import('../..\\components\\shared\\NumText.vue' /* webpackChunkName: "components/num-text" */).then(c => wrapFunctional(c.default || c))
