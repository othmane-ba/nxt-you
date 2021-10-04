<template>
  <section class="marketing-slider" :id="slice.primary.slug">
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
            <div class="grid lg:grid-cols-5 gap-4 items-center">
              <div class="lg:col-span-2">
                <h4 class="font-bold uppercase text-4xl">
                  {{ item.title }}
                </h4>

                <div
                  class="
                    relative
                    transform
                    lg:translate-x-8
                    z-10
                    bg-black
                    p-4
                    mb-4
                  "
                >
                  <prismic-rich-text :field="item.description" />
                </div>

                <div class="relative bg-gray-400 mr-auto mb-4 w-24 h-px">
                  <div
                    data-gsap-target="marketingSlider"
                    class="absolute bg-white top-0 left-0 h-full w-0"
                  ></div>
                </div>
              </div>
              <div class="lg:col-span-3">
                <img
                  v-if="item.image"
                  v-lazy
                  class="w-full"
                  :data-src="item.image.url"
                  :alt="item.image.alt"
                />

                <CnyVideo
                  v-if="item.video"
                  :publicId="item.video"
                  class="relative object-cover"
                  muted
                  loop
                  autoplay
                ></CnyVideo>
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
          '[data-gsap-target="marketingSlider"]',
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
