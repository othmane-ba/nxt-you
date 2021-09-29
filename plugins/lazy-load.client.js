import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

Vue.directive('lazy', {
  inserted(el, binding, { context }) {
    if (!binding.modifiers.noAnim) {
      context.$gsap.set(el, { opacity: 0 })
    }
    el.item = []
    el.item.push(el)
    el.instance = new LazyLoad(
      {
        callback_loaded: () => {
          if (!binding.modifiers.noAnim) {
            context.$gsap.to(el, {
              opacity: 1,
              clearProps: 'opacity',
              duration: 0.4,
              ease: 'Power3.easeInOut',
            })
          }
        },
      },
      el.item
    )
  },
  unbind(el) {
    el.instance.destroy()
  },
})
