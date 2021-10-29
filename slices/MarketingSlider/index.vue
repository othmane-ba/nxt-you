<template>
  <section class="marketing-slider" :id="slice.primary.slug">
    <div class="container mx-auto lg:px-32" v-animate>
      <div class="relative space-y-4">
        <div
          class="overflow-hidden"
          v-swiper:marketingControlSwiper="options"
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
                  :width="1000"
                  :lazyOptions="{ use_native: true }"
                ></TheVideo>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            lg:absolute lg:bottom-0
            w-full
            flex flex-col
            lg:flex-row
            z-10
            lg:items-end
          "
        >
          <div class="w-full max-w-2xl lg:text-right p-4 lg:p-8 bg-black">
            <div
              class="overflow-hidden"
              v-swiper:marketingDescriptionSwiper="options"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="(item, i) in slice.items"
                  :key="`description-slice-item-${i}`"
                  class="swiper-slide"
                >
                  <div class="space-y-4">
                    <h4 class="title">{{ item.title }}</h4>

                    <div>
                      <prismic-rich-text :field="item.description" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              p-4
              flex
              items-center
              space-x-4
              justify-center
              lg:justify-end
              text-opacity-50 text-white
              bg-black
              flex-1
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
  mounted() {
    this.$nextTick(() => {
      this.marketingControlSwiper.controller.control =
        this.marketingDescriptionSwiper
      this.initClock()
    })
  },
  data() {
    return {
      clock: null,
      activeIndex: 0,
      options: {
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
    initClock() {
      this.clock = this.$gsap
        .timeline({ repeat: -1, paused: false })
        .fromTo(
          '[data-gsap-target="marketingSlider"]',
          this.slice.primary.autoplaySpeed,
          { width: '0%' },
          { width: '100%', ease: 'Linear.easeNone' }
        )
        .add(() => this.nextSlide())
    },
    nextSlide() {
      const swiper = this.marketingControlSwiper
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
