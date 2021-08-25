import Vue from 'vue'
import enterView from 'enter-view'
import Animation from '~/assets/scripts/animation'

Vue.directive('animate', {
  inserted(el, binding) {
    console.log('binding.arg', binding.arg)
    const a = new Animation(el, binding.arg || 'box')
    enterView({
      selector: [el],
      enter: () => a.start(),
      offset: 0.125,
      once: true,
    })
  },

  update(el, binding) {},

  unbind(el) {},
})
