<template>
  <section class="marketing-slider" :id="slice.primary.slug">
    <div class="container mx-auto lg:px-32" v-animate>
      <div class="relative space-y-4">
        <div
          v-simple-parallax
          v-swiper="options"
          :auto-destroy="true"
          @ready="onReady"
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
                  v-if="item.image"
                  v-lazy
                  class="absolute top-0 left-0 w-full h-full object-contain"
                  :data-src="item.image.url"
                  :alt="item.image.alt"
                />

                <CnyVideo
                  ref="video"
                  v-if="item.video"
                  :publicId="item.video"
                  class="absolute top-0 left-0 w-full h-full object-contain"
                  muted
                  loop
                  autoplay
                ></CnyVideo>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            lg:absolute lg:bottom-0
            flex flex-col
            lg:flex-row
            items-start
            lg:items-end
            w-full
            z-10
          "
        >
          <div
            class="max-w-2xl flex-shrink-1"
            v-swiper="options"
            :auto-destroy="true"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, i) in slice.items"
                :key="`description-slice-item-${i}`"
              >
                <div class="bg-black p-4 lg:py-8 space-y-4">
                  <h4 class="font-bold text-xl">
                    {{ item.title }}
                  </h4>

                  <div>
                    <prismic-rich-text :field="item.description" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-black flex-1 p-4 lg:py-8">
            <div class="relative bg-gray-400 w-32 h-0.5 ml-auto">
              <div
                data-gsap-target="marketingSlider"
                class="absolute bg-white top-0 left-0 h-full w-0"
              ></div>
            </div>
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
  data() {
    return {
      clock: null,
      options: {
        allowTouchMove: false,
        loop: true,
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
          swiper.slideNext()
        })
    },
  },
}
</script>

<style scoped lang="postcss"></style>
