import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

Vue.directive('lazy', {
  inserted(el, binding, { context: ctx }) {
    const defaultOptions = {
      callback_loaded: () => {
        ctx.$gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            clearProps: 'opacity',
            duration: 0.4,
            ease: 'Power3.easeInOut',
          }
        )
      },
    }
    el.lazyOptions = { ...defaultOptions, ...binding.value }
    el.item = []
    el.item.push(el)
    el.instance = new LazyLoad(el.lazyOptions, el.item)
  },
  unbind(el) {
    el.instance.destroy()
  },
})
