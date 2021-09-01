<template>
  <section class="marketing-slider">
    <div class="container mx-auto px-4 lg:px-32 overflow-hidden" v-animate>
      <div
        class="overflow-hidden w-full"
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <div
                  class="relative bg-gray-400 max-w-xl mx-auto mb-4 w-full h-px"
                >
                  <div
                    data-gsap-target="featureSlider"
                    class="absolute bg-white top-0 left-0 h-full w-0"
                  ></div>
                </div>

                <h4 class="font-bold uppercase text-4xl mb-4">
                  {{ item.title }}
                </h4>

                <prismic-rich-text :field="item.description" />
              </div>
              <div>
                <prismic-image
                  class="w-full"
                  v-if="item.image"
                  :field="item.image"
                />

                <video
                  v-if="item.video"
                  class="relative object-cover"
                  muted
                  loop
                  autoplay="autoplay"
                >
                  <source
                    :src="require('~/assets/videos/' + item.video + '.webm')"
                    type="video/webm"
                  />
                  <source
                    :src="require('~/assets/videos/' + item.video + '.mp4')"
                    type="video/mp4"
                  />
                </video>
              </div>
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
        lazy: true,
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
          '[data-gsap-target="featureSlider"]',
          this.slice.primary.autoplaySpeed,
          { width: '0%' },
          { width: '100%' }
        )
        .add(() => {
          swiper.slideNext()
        })
    },
  },
}
</script>

<style scoped lang="postcss"></style>
