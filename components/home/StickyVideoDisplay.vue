<template>
  <div class="sticky-video-display" ref="wrapper">
    <div class="sticky top-0 left-0 w-full overflow-hidden">
      <div class="absolute h-full max-h-screen w-full">
        <button
          @click="toggleMuted"
          data-pointer="large"
          class="
            absolute
            bottom-4
            right-4
            flex
            justify-center
            items-center
            w-9
            h-9
            rounded-full
            border
            z-10
          "
          :class="{ 'border-blue': !muted }"
        >
          <Icon class="block text-lg" src="volume"></Icon>
        </button>
      </div>
      <div ref="container" class="w-full mx-auto">
        <img
          class="relative z-10 w-full h-auto origin-top hidden lg:block"
          :src="require('~/assets/images/mac.png')"
        />
        <video
          loop
          muted
          autoplay
          playsinline
          preload="auto"
          ref="video"
          class="lg:absolute object-cover"
        >
          <source
            :src="require('~/assets/videos/nxtyou-trailer-desktop.mp4')"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      muted: true,
      rect: {},
    }
  },
  methods: {
    addListener() {
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', this.onScroll.bind(this), {
          passive: true,
        })
      }
    },
    onScroll() {
      const height = (this.rect as DOMRect).bottom - (this.rect as DOMRect).top
      const _progress =
        (window.pageYOffset - (this.rect as DOMRect).top) / height
      const progress = _progress > 0.7 ? 0.7 : _progress < 0 ? 0 : _progress
      ;(this as any).$gsap.to(
        this.$refs.container,
        { scale: 1.25 - progress },
        2
      )
    },
    toggleMuted() {
      this.muted = !this.muted
      ;(this.$refs.video as HTMLVideoElement).muted = this.muted
    },
  },
  mounted() {
    this.rect = (this.$refs.wrapper as Element).getBoundingClientRect()
    this.addListener()
  },
})
</script>

<style lang="postcss" scoped>
.sticky-video-display {
  @apply relative w-full lg:h-4-screen -mb-32 lg:-mt-32;
}

.sticky-video-display video {
  @media screen(lg) {
    top: 4%;
    left: 4%;
    height: calc(100% - 20%);
    width: calc(100% - 8%);
  }
}
</style>
