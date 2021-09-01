let firstPaint = true
let tlLoaderOverlay = null

export default {
  mounted() {
    tlLoaderOverlay = this.$gsap
      .timeline({
        paused: true,
        defaults: { duration: 1.4, ease: 'Power2.easeInOut' },
      })
      .set('[data-transition-layout]', {
        autoAlpha: 0,
        marginTop: '20px',
      })
      .to('[data-transition-dark]', { height: 0 }, 0.1)
      .to('[data-transition-light]', { height: 0 }, 0.5)
      .to('[data-transition-layout]', {
        autoAlpha: 1,
        marginTop: 0,
      })
  },
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
      if (firstPaint) {
        firstPaint = false
        this.$nuxt.$emit('layout-loaded', {
          tlLoaderOverlay,
        })
      }

    },
  },
}
