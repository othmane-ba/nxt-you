<template>
  <section v-animate>
    <div class="sticky-video-display" ref="wrapper">
      <div class="sticky top-0 left-0 w-full overflow-hidden">
        <div class="absolute h-full max-h-screen w-full">
          <button
            @click="muted = !muted"
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
              text-white
            "
            :class="{ 'border-blue': !muted }"
          >
            <svg
              class="block text-lg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
            >
              <path
                fill="currentColor"
                d="M3.587 5.933c-0.956 0-1.55 0.5-1.55 1.306v2.161c0 0.415 0.161 0.804 0.453 1.098 0.292 0.293 0.682 0.455 1.097 0.455h1.743l5.686 5.688v-16.429l-5.63 5.721h-1.799zM10.016 2.654v11.572l-4.272-4.273h-2.158c-0.303 0-0.549-0.248-0.549-0.553v-2.161c0-0.091 0-0.306 0.55-0.306h2.217l4.212-4.279zM12.005 10.987v-1c0.556 0 1.008-0.452 1.008-1.008s-0.452-1.008-1.008-1.008v-1c1.107 0 2.008 0.901 2.008 2.008s-0.901 2.008-2.008 2.008zM16.029 8.987c0 2.206-1.794 4-4 4v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3v-1c2.205 0 4 1.795 4 4z"
              />
            </svg>
          </button>
        </div>
        <div ref="container" class="w-full mx-auto">
          <img
            class="relative z-10 w-full h-auto origin-top hidden lg:block"
            :src="require('~/assets/images/mac.png')"
          />
          <CnyVideo
            :width="800"
            ref="video"
            :muted="muted"
            publicId="nxt-you/nxtyou-trailer-desktop_tkqd75"
            class="lg:absolute object-cover"
          >
          </CnyVideo>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StickyVideo',

  data() {
    return {
      muted: true,
      rect: {},
    }
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
    addListener() {
      window.addEventListener('resize', this.addListener.bind(this))

      if (window.innerWidth > 768) {
        window.addEventListener('scroll', this.onScroll.bind(this), {
          passive: true,
        })
      }
    },
    onScroll() {
      const height = this.rect.bottom - this.rect.top
      const _progress = (window.pageYOffset - this.rect.top) / height
      const progress = _progress > 0.7 ? 0.7 : _progress < 0 ? 0 : _progress
      this.$gsap.to(this.$refs.container, { scale: 1.25 - progress }, 2)
    },
  },
  mounted() {
    this.rect = this.$refs.wrapper.getBoundingClientRect()
    this.onScroll()
    this.addListener()
  },
}
</script>

<style lang="postcss">
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
