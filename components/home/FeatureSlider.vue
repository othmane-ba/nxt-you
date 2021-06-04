<template>
  <div
    class="container mx-auto px-4 lg:px-16 overflow-hidden"
    v-view.once
    v-view="onView"
  >
    <div data-animation-box>
      <div
        class="overflow-hidden w-full"
        v-swiper="options"
        :auto-destroy="false"
        @ready="featureSlider = $event"
        @activeIndexChange="slideIndex = $event.realIndex"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(feature, index) in features"
            class="swiper-slide"
            :key="index"
          >
            <div class="w-full space-y-8 lg:space-y-16">
              <h4 class="text-center font-bold uppercase text-3xl lg:text-4xl">
                {{ feature.title }}
              </h4>
              <div
                class="mx-auto max-w-4xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"
              >
                <div>
                  <p
                    class="font-bold uppercase lg:text-xl"
                    :key="feature.title"
                  >
                    {{ feature.intro }}
                  </p>
                </div>
                <div>
                  <p>
                    {{ feature.description }}
                  </p>
                </div>
              </div>
              <div class="relative rounded-lg w-full overflow-hidden">
                <ul
                  class="relative w-full grid grid-cols-2 lg:grid-cols-5 gap-4 z-10 p-4 lg:py-12"
                >
                  <li
                    class="block w-full"
                    v-for="(service, index) of feature.services"
                    :key="index"
                  >
                    <a
                      class="w-full flex flex-col items-center justify-center h-44 lg:h-54 p-4 border-4 border-transparent rounded-xl transition-all duration-700 hover:border-gray-100 overflow-hidden"
                      data-pointer="large"
                    >
                      <div>
                        <img
                          class="block w-16 lg:w-20 h-16 lg:h-20 object-cover"
                          :src="
                            require('~/assets/images/features/' + service.icon)
                          "
                        />
                      </div>

                      <div class="text-center uppercase font-semibold">
                        <span class="break-words">
                          {{ service.title }}
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>

                <video
                  class="absolute inset-2/4 transform -translate-x-2/4 -translate-y-2/4 object-cover w-full h-full opacity-25"
                  muted
                  loop
                  autoplay="autoplay"
                >
                  <source
                    :src="require('~/assets/videos/' + feature.video)"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Swiper from 'swiper'

class Service {
  constructor(public title: string, public icon: string, public href: string) {}
}

class Feature {
  constructor(
    public title: string,
    public intro: string,
    public description: string,
    public video: string,
    public services: Service[]
  ) {}
}

@Component
export default class FeatureSlider extends Vue {
  featureSlider!: Swiper
  slideIndex = 0
  interval!: NodeJS.Timeout
  autoplayDelay = 10000
  options = {
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  }
  features = [
    new Feature(
      'Branding',
      'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
      'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
      'render_of_tunnel_in_cgi_light_and_environment.mp4',
      [
        new Service('Brand Strategy', 'lightbulb.png', '/seo'),
        new Service('Visual Brand Identity', 'pencil-settings.png', '/seo'),
        new Service('Content Creation', 'play.png', '/seo'),
        new Service('UI/UX Design', 'ux-ui.png', '/seo'),
        new Service('Mobile App Development', 'geometry.png', '/seo'),
      ]
    ),
    new Feature(
      'Performance',
      'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
      'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
      'render_of_light_tunnel.mp4',
      [
        new Service('Social Media Marketing', 'bar-up.png', '/seo'),
        new Service('Funnel Systeme', 'dollar-bar.png', '/seo'),
        new Service('Seo Service', 'seo.png', '/seo'),
        new Service('Copywriting', 'pencil-post.png', '/seo'),
        new Service('Google Ads Campagnen', 'goal.png', '/seo'),
      ]
    ),
  ]

  onView(event: any): void {
    if (this.interval && event.type === 'exit') {
      clearInterval(this.interval)
    } else if (!this.interval && event.type === 'enter') {
      this.interval = setInterval(() => {
        this.featureSlider.slideNext()
      }, this.autoplayDelay)
    }
  }

  onSwiperProgress(swiper: Swiper): void {}
}
</script>

<style scoped lang="postcss"></style>
