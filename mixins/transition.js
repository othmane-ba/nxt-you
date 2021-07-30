export default {
  transition: {
    css: false,
    mode: 'out-in',
    appear: true,
    leave(el, done) {
      done()
    },
    enter(el, done) {
      done()
    },
    afterEnter() {
      setTimeout(() => {
        this.$nuxt.$emit('page-loaded')
      }, 1000)
    },
  },
}
