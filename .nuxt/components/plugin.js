import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BrandTeaser: () => import('../..\\components\\home\\BrandTeaser.vue' /* webpackChunkName: "components/brand-teaser" */).then(c => wrapFunctional(c.default || c)),
  ClientList: () => import('../..\\components\\home\\ClientList.vue' /* webpackChunkName: "components/client-list" */).then(c => wrapFunctional(c.default || c)),
  FeatureSlider: () => import('../..\\components\\home\\FeatureSlider.vue' /* webpackChunkName: "components/feature-slider" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../..\\components\\home\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  HeroHeadline: () => import('../..\\components\\home\\HeroHeadline.vue' /* webpackChunkName: "components/hero-headline" */).then(c => wrapFunctional(c.default || c)),
  IntroText: () => import('../..\\components\\home\\IntroText.vue' /* webpackChunkName: "components/intro-text" */).then(c => wrapFunctional(c.default || c)),
  MarketingSlider: () => import('../..\\components\\home\\MarketingSlider.vue' /* webpackChunkName: "components/marketing-slider" */).then(c => wrapFunctional(c.default || c)),
  Qualifier: () => import('../..\\components\\home\\Qualifier.vue' /* webpackChunkName: "components/qualifier" */).then(c => wrapFunctional(c.default || c)),
  Sphere: () => import('../..\\components\\home\\Sphere.vue' /* webpackChunkName: "components/sphere" */).then(c => wrapFunctional(c.default || c)),
  StickyVideoDisplay: () => import('../..\\components\\home\\StickyVideoDisplay.vue' /* webpackChunkName: "components/sticky-video-display" */).then(c => wrapFunctional(c.default || c)),
  TestimonialSlider: () => import('../..\\components\\home\\TestimonialSlider.vue' /* webpackChunkName: "components/testimonial-slider" */).then(c => wrapFunctional(c.default || c)),
  VideoGrid: () => import('../..\\components\\home\\VideoGrid.vue' /* webpackChunkName: "components/video-grid" */).then(c => wrapFunctional(c.default || c)),
  Work: () => import('../..\\components\\home\\Work.vue' /* webpackChunkName: "components/work" */).then(c => wrapFunctional(c.default || c)),
  CookieHint: () => import('../..\\components\\layout\\CookieHint.vue' /* webpackChunkName: "components/cookie-hint" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\layout\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  PageLoader: () => import('../..\\components\\layout\\PageLoader.vue' /* webpackChunkName: "components/page-loader" */).then(c => wrapFunctional(c.default || c)),
  Pointer: () => import('../..\\components\\layout\\Pointer.vue' /* webpackChunkName: "components/pointer" */).then(c => wrapFunctional(c.default || c)),
  CaptionImage: () => import('../..\\components\\shared\\CaptionImage.vue' /* webpackChunkName: "components/caption-image" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../..\\components\\shared\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  HoverImage: () => import('../..\\components\\shared\\HoverImage.vue' /* webpackChunkName: "components/hover-image" */).then(c => wrapFunctional(c.default || c)),
  Intersection: () => import('../..\\components\\shared\\Intersection.vue' /* webpackChunkName: "components/intersection" */).then(c => wrapFunctional(c.default || c)),
  NumText: () => import('../..\\components\\shared\\NumText.vue' /* webpackChunkName: "components/num-text" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../..\\components\\shared\\PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c)),
  RangeSlider: () => import('../..\\components\\shared\\RangeSlider.vue' /* webpackChunkName: "components/range-slider" */).then(c => wrapFunctional(c.default || c)),
  Tag: () => import('../..\\components\\shared\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
