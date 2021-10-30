<template>
  <section class="feature-slider" :id="slice.primary.slug">
    <div
      class="container mx-auto py-4 lg:px-16 overflow-hidden relative"
      v-animate
    >
      <div>
        <div
          class="
            relative
            overflow-hidden
            w-full
            z-20
            pt-12
            md:pt-32
            pr-4
            lg:pr-0
          "
        >
          <div class="flex items-center">
            <div
              class="
                flex flex-col
                text-opacity-50 text-white
                relative
                p-4
                z-20
                h-40
                space-y-2
                items-center
              "
            >
              <div
                class="relative bg-white bg-opacity-50 flex-grow w-0.5"
                v-for="(indicator, i) in slice.items"
                :key="i"
                ref="indicator"
              >
                <div
                  class="absolute bg-white top-0 left-0 h-0 w-full"
                  :class="{
                    '!h-0': activeIndex < i,
                    '!h-full': activeIndex > i,
                  }"
                  data-gsap-target="featureSlider"
                ></div>
              </div>
            </div>
            <div class="absolute left-0 top-0 w-full overflow-hidden">
              <div
                v-simple-parallax="{ overflow: true }"
                class="
                  text-7xl
                  md:text-9xl
                  leading-none
                  font-extrabold
                  bg-clip-text
                  text-transparent
                  opacity-50
                  bg-gradient-to-b
                  from-white
                  to-blue-dark
                  via-blue
                  tracking-tighter
                "
              >
                {{ slice.items[activeIndex].title }}
              </div>
            </div>

            <div v-swiper:featureSlider="options">
              <div class="swiper-wrapper items-center">
                <div
                  v-for="(feature, index) in slice.items"
                  class="swiper-slide space-y-4 lg:space-y-8"
                  :key="index"
                >
                  <div
                    class="
                      max-w-4xl
                      mx-auto
                      grid grid-cols-1
                      gap-4
                      lg:grid-cols-2 lg:gap-8
                      relative
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
                        overflow-hidden
                        space-y-4
                      "
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
                        class="h-10 w-10 mx-auto object-contain swiper-lazy"
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
            from-black
            z-10
          "
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"
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
          '[data-gsap-target="featureSlider"]',
          this.slice.primary.autoplaySpeed,
          { height: '0%' },
          { height: '100%', ease: 'Linear.easeNone' }
        )
        .add(this.nextSlide.bind(this))
    },
    nextSlide() {
      const index = this.featureSlider.realIndex + 1
      this.activeIndex = index < this.slice.items.length ? index : 0
      this.featureSlider.slideTo(this.activeIndex)
    },
  },
}
</script>

<style scoped lang="postcss"></style>
