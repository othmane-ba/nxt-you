import Vue from 'vue'
import simpleParallax from 'simple-parallax-js'

Vue.directive('simple-parallax', {
  inserted: function (el, binding) {
    new simpleParallax(el, binding.value)
  },
})
