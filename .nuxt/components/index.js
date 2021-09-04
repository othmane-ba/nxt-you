export { default as HeroHeadline } from '../..\\components\\home\\HeroHeadline.vue'
export { default as Sphere } from '../..\\components\\home\\Sphere.vue'
export { default as CookieHint } from '../..\\components\\layout\\CookieHint.vue'
export { default as Footer } from '../..\\components\\layout\\Footer.vue'
export { default as Header } from '../..\\components\\layout\\Header.vue'
export { default as HeaderMenu } from '../..\\components\\layout\\HeaderMenu.vue'
export { default as PageLoader } from '../..\\components\\layout\\PageLoader.vue'
export { default as Pointer } from '../..\\components\\layout\\Pointer.vue'
export { default as CnyVideo } from '../..\\components\\shared\\CnyVideo.vue'
export { default as RangeSlider } from '../..\\components\\shared\\RangeSlider.vue'
export { default as Tag } from '../..\\components\\shared\\Tag.vue'
export { default as TheButton } from '../..\\components\\shared\\TheButton.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
