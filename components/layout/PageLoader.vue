<template>
  <div>
    <div
      data-transition-light
      class="fixed top-0 left-0 h-screen w-full bg-gray-900 z-60"
    ></div>
    <div
      data-transition-dark
      class="fixed top-0 left-0 h-screen w-full bg-black z-70 overflow-hidden"
    >
      <div
        ref="loaderContent"
        class="absolute top-0 left-0 w-full h-screen opacity-0 invisible"
      >
        <div
          class="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        >
          <img
            class="w-40"
            data-not-lazy
            alt="NXTYOU Logo"
            src="~/assets/images/logo.png"
          />
        </div>
        <div
          class="
            absolute
            bottom-1/4
            left-1/2
            transform
            -translate-x-1/2
            translate-y-1/2
          "
          v-show="firstPaint"
        >
          <div class="relative w-36 h-0.5 overflow-hidden mx-auto">
            <div
              ref="bar"
              class="absolute left-0 top-0 h-full bg-blue-dark"
            ></div>
          </div>
          <div class="tracking-wider text-center pt-2">
            <span>{{ progress.var }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstPaint: true,
      tlLoaderInit: null,
      progress: { var: 0 },
    }
  },
  mounted() {
    this.initTl()
    this.$nuxt.$on('layout-loaded', (onPageEnter) => {
      this.tlLoaderInit
        .add(onPageEnter())
        .play()
        .then(() => {
          this.firstPaint = false
        })
    })
  },
  methods: {
    initTl() {
      this.tlLoaderInit = this.$gsap
        .timeline({
          paused: true,
          defaults: { delay: 0.1, ease: 'Power2.easeInOut' },
        })
        .to(this.$refs.loaderContent, {
          autoAlpha: 1,
          duration: 0.4,
          ease: 'Power2.easeInOut',
        })
        .to(this.progress, {
          var: 100,
          duration: 1.4,
          ease: 'steps(100)',
          onUpdate: () => {
            this.$gsap.to(this.$refs.bar, 0, {
              width: this.progress.var + '%',
            })
          },
        })
    },
  },
}
</script>

<style scoped></style>
