<template>
  <section class="marketing-slider" :id="slice.primary.slug">
    <div class="container mx-auto lg:px-32" v-animate>
      <div class="relative space-y-4">
        <div
          v-swiper:marketingSwiper="contentOptions"
          @ready="onReady"
          v-simple-parallax
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, i) in slice.items"
              :key="`slice-item-${i}`"
            >
              <div class="relative">
                <div class="w-full aspect-h-4 aspect-w-7"></div>
                <img
                  v-if="item.image.url"
                  class="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    object-contain
                    swiper-lazy
                  "
                  :data-src="item.image.url"
                  :alt="item.image.alt"
                />

                <TheVideo
                  ref="video"
                  v-if="item.video"
                  :publicId="item.video"
                  class="absolute top-0 left-0 w-full h-full object-contain"
                  muted
                  loop
                  autoplay
                  :width="800"
                  :lazyOptions="{ use_native: true }"
                ></TheVideo>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            lg:absolute lg:bottom-0
            flex flex-col
            lg:flex-row
            items-center
            lg:items-end
            w-full
            z-10
          "
        >
          <div class="max-w-2xl flex-shrink-1 text-right">
            <div
              v-for="(item, i) in slice.items"
              :key="`description-slice-item-${i}`"
              v-if="activeIndex === i"
            >
              <div class="bg-black p-4 lg:p-8 space-y-4">
                <h4 class="title">{{ item.title }}</h4>

                <div>
                  <prismic-rich-text :field="item.description" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              bg-black
              flex-1
              p-4
              flex
              items-center
              space-x-4
              justify-end
              text-opacity-50 text-white
            "
          >
            <span class="proportional-nums">{{
              activeIndex < 9 ? '0' + (activeIndex + 1) : activeIndex + 1
            }}</span>
            <div class="relative bg-white bg-opacity-50 w-20 h-0.5">
              <div
                data-gsap-target="marketingSlider"
                class="absolute bg-white top-0 left-0 h-full w-0"
              ></div>
            </div>
            <span class="proportional-nums">{{
              slice.items.length < 10
                ? '0' + slice.items.length
                : slice.items.length
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MarketingSlider',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  mounted() {},
  data() {
    return {
      clock: null,
      activeIndex: 0,
      contentOptions: {
        allowTouchMove: false,
        lazy: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      },
    }
  },
  methods: {
    onReady(swiper) {
      this.clock = this.$gsap
        .timeline({ repeat: -1, paused: false })
        .fromTo(
          '[data-gsap-target="marketingSlider"]',
          this.slice.primary.autoplaySpeed,
          { width: '0%' },
          { width: '100%', ease: 'Linear.easeNone' }
        )
        .add(() => {
          this.onSlideChange(swiper)
        })
    },
    onSlideChange(swiper) {
      const previousIndex = swiper.realIndex
      const activeIndex = swiper.isEnd ? 0 : swiper.realIndex + 1
      this.activeIndex = activeIndex
      swiper.slideTo(this.activeIndex)
      if (this.$refs.video[previousIndex]) {
        this.$refs.video[previousIndex].pause()
      }
      if (this.$refs.video[activeIndex]) {
        this.$refs.video[activeIndex].play()
      }
    },
  },
}
</script>

<style scoped lang="postcss"></style>
