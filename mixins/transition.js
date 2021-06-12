let firstPaint = true

export default {
  transition: {
    css: false,
    mode: 'out-in',
    appear: true,
    leave(el, done) {
      this.$smooth.destroy()
      document.body.classList.add('fixed', 'overflow-y-scroll')
      done()
    },
    enter(el, done) {
      done()
    },
    afterEnter() {
      /*
      if (firstPaint) {
        firstPaint = false
        this.$smooth.init()
      } else {
        this.$smooth.reload()
      }
*/

      setTimeout(() => {
        document.body.classList.remove('fixed', 'overflow-y-scroll')
        this.$nuxt.$emit('page-loaded')
      }, 1000)

      setTimeout(() => {
        /*
        this.$smooth.resize() // Fix for https://github.com/baptistebriel/this.$smooth-scrolling/issues/104
*/
      }, 2000)
    },
  },
}
