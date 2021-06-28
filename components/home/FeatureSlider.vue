<template>
  <div class="container mx-auto px-4 lg:px-16 overflow-hidden" v-view.once>
    <div data-animation-box>
      <div
        class="overflow-hidden w-full"
        v-swiper="options"
        :auto-destroy="true"
        @ready="onReady"
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
                class="relative bg-gray-400 max-w-xl mx-auto mb-4 w-full h-px"
              >
                <div
                  data-gsap-target="featureSlider"
                  class="absolute bg-white top-0 left-0 h-full w-0"
                ></div>
              </div>

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
                  <p
                    class="font-bold uppercase lg:text-2xl"
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
                  class="
                    relative
                    w-full
                    bg-black bg-opacity-90
                    grid grid-cols-2
                    lg:grid-cols-5
                    gap-4
                    z-10
                    p-4
                    lg:py-24
                    2xl:gap-12 2xl:p-12 2xl:py-24
                  "
                >
                  <li
                    class="block w-full"
                    v-for="(service, j) of feature.services"
                    :key="index + j"
                  >
                    <a
                      class="
                        relative
                        block
                        w-full
                        border-4 border-transparent
                        rounded-xl
                        transition-all
                        duration-700
                        hover:border-gray-100
                        overflow-hidden
                      "
                      data-pointer="large"
                    >
                      <div class="aspect-h-1 aspect-w-1 w-full"></div>
                      <div
                        class="
                          absolute
                          inset-0
                          flex flex-col
                          items-center
                          justify-center
                          p-4
                        "
                      >
                        <img
                          class="block w-16 xl:w-28 h-16 xl:h-28 object-contain"
                          :src="
                            require('~/assets/images/features/' + service.icon)
                          "
                        />

                        <div class="text-center uppercase font-semibold">
                          <span class="break-words">
                            {{ service.title }}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>

                <video
                  class="
                    absolute
                    inset-2/4
                    transform
                    -translate-x-2/4 -translate-y-2/4
                    object-cover
                    w-full
                    h-full
                  "
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
import { gsap } from 'gsap'

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

const AUTOPLAY_SPEED = 10

@Component
export default class FeatureSlider extends Vue {
  clock!: any
  options = {
    centeredSlides: true,
    allowTouchMove: false,
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

  onReady(swiper: Swiper) {
    this.clock = gsap
      .timeline({ repeat: -1, paused: false })
      .fromTo(
        '[data-gsap-target="featureSlider"]',
        AUTOPLAY_SPEED,
        { width: '0%' },
        { width: '100%' }
      )
      .add(() => {
        swiper.slideNext()
      })
  }
}
</script>

<style scoped lang="postcss"></style>
