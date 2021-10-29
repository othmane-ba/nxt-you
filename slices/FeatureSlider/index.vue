<template>
  <section class="feature-slider" :id="slice.primary.slug">
    <div
      class="container mx-auto p-4 lg:p-16 overflow-hidden relative"
      v-animate
    >
      <div
        class="
          p-4
          flex
          items-center
          justify-start
          text-opacity-50 text-white
          bg-black
          relative
          space-x-1
          z-20
          w-60
          justify-items-stretch
        "
      >
        <div
          class="relative bg-white bg-opacity-50 h-0.5 w-full"
          v-for="(indicator, i) in slice.items"
          :key="i"
          ref="indicator"
        >
          <div
            class="absolute bg-white top-0 left-0 h-full w-0"
            :class="{ '!w-full': activeIndex >= i }"
            data-gsap-target="featureSwiper"
          ></div>
        </div>
      </div>

      <div>
        <div class="relative overflow-hidden w-full z-20">
          <div v-swiper:featureSwiper="options">
            <div class="swiper-wrapper">
              <div
                v-for="(feature, index) in slice.items"
                class="swiper-slide"
                :key="index"
              >
                <div class="w-full space-y-8 lg:space-y-16">
                  <h4 class="title text-center">
                    {{ feature.title }}
                  </h4>

                  <div
                    class="
                      mx-auto
                      max-w-4xl
                      grid grid-cols-1
                      gap-4
                      lg:grid-cols-2 lg:gap-8
                    "
                  >
                    <div>
                      <prismic-rich-text
                        class="font-bold uppercase lg:text-2xl"
                        :field="feature.subtitle"
                      />
                    </div>
                    <div>
                      <prismic-rich-text :field="feature.description" />
                    </div>
                  </div>
                  <ul
                    class="
                      relative
                      w-full
                      grid grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-5
                      z-10
                      gap-4
                    "
                  >
                    <li
                      class="
                        relative
                        flex-1 flex flex-col
                        items-center
                        justify-center
                        border-4 border-transparent
                        rounded-xl
                        transition-all
                        hover:border-gray-100
                        overflow-hidden
                        p-8
                        space-y-4
                      "
                      data-pointer="large"
                      v-for="(indicator, j) of [
                        'First',
                        'Second',
                        'Third',
                        'Fourth',
                        'Fifth',
                      ]"
                      :key="index + j"
                    >
                      <img
                        class="h-14 w-14 mx-auto object-contain swiper-lazy"
                        :data-src="feature['icon' + indicator].url"
                        :alt="feature['icon' + indicator].alt"
                      />

                      <div class="text-center uppercase font-bold">
                        <span class="break-words">
                          {{ feature['text' + indicator] }}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-b
            via-black
            from-black
            z-10
          "
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"
          ></div>
        </div>

        <TheVideo
          class="
            absolute
            top-1/2
            left-1/2
            w-full
            h-full
            transform
            -translate-x-1/2 -translate-y-1/2
            object-cover
          "
          :publicId="slice.primary.video"
          muted
          loop
          autoplay
        ></TheVideo>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureSlider',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      clock: null,
      activeIndex: 0,
      options: {
        allowTouchMove: false,
        loop: true,
        lazy: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(this.initClock.bind(this))
  },
  methods: {
    initClock() {
      this.clock = this.$gsap
        .timeline({ repeat: -1, paused: false })
        .fromTo(
          '[data-gsap-target="featureSwiper"]',
          this.slice.primary.autoplaySpeed,
          { width: '0%' },
          { width: '100%', ease: 'Linear.easeNone' }
        )
        .add(this.nextSlide.bind(this))
    },
    nextSlide() {
      const index = this.featureSwiper.realIndex + 1
      this.activeIndex = index < this.slice.items.length ? index : 0
      this.featureSwiper.slideNext()
    },
  },
}
</script>

<style scoped lang="postcss"></style>
