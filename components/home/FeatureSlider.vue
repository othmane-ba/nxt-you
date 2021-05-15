<template>
  <div class="container mx-auto px-4 lg:px-16">
    <transition-group
      enter-active-class="transition-all ease-in-out duration-1000 delay-1000"
      enter-class="opacity-0"
      leave-active-class="transition-all ease-in-out duration-1000"
      leave-to-class="opacity-0"
      class="space-y-8 lg:space-y-16"
    >
      <h4
        class="text-center font-bold uppercase text-5xl"
        :key="'title-' + slideIndex"
      >
        {{ feature.title }}
      </h4>
      <div
        class="mx-auto max-w-4xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"
        :key="'intro-' + slideIndex"
      >
        <div>
          <p class="uppercase font-bold text-3xl" :key="feature.title">
            {{ feature.intro }}
          </p>
        </div>
        <div>
          <p>
            {{ feature.description }}
          </p>
        </div>
      </div>
      <div
        class="relative rounded-lg w-full overflow-hidden"
        :key="'services-' + slideIndex"
      >
        <ul
          class="relative z-10 flex flex-wrap w-full items-center justify-center p-4 lg:py-32 space-y-4 lg:space-y-0 lg:space-x-4"
        >
          <li
            class="w-2/4 flex-none lg:flex-1"
            v-for="(service, index) of feature.services"
            :key="index"
          >
            <a
              class="w-full flex flex-col justify-center items-center h-52 lg:h-72 p-4 border-4 border-transparent rounded-xl transition-all duration-700 hover:border-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 109.679 100.002"
                class="block w-12 lg:w-24"
                fill="white"
              >
                <path
                  d="M106.965,91.792,72.47,32.044c-7.777-13.47-27.518-13.41-35.261,0L2.713,91.792A20.11,20.11,0,1,0,37.546,111.9L54.839,81.949,72.133,111.9a20.11,20.11,0,1,0,34.832-20.11ZM31.441,108.378A13.062,13.062,0,1,1,26.66,90.535,13.061,13.061,0,0,1,31.441,108.378ZM39.084,95.14A20.08,20.08,0,0,0,16.461,82.079L35.937,48.346C36.8,51,36.195,49.656,50.77,74.9Zm57,18.019a13.054,13.054,0,0,1-17.842-4.781L43.742,48.63c-6.582-11.4,6.107-24.371,17.414-17.842,4.231,2.443,3.067,1.071,39.7,64.529a13.077,13.077,0,0,1-4.781,17.843Z"
                  transform="translate(0 -21.964)"
                ></path>
              </svg>
              <div
                class="py-4 text-center uppercase text-lg lg:text-xl font-bold"
              >
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
          :key="'video-' + slideIndex"
        >
          <source
            :src="require('~/assets/videos/' + feature.video)"
            type="video/mp4"
          />
        </video>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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

export default Vue.extend({
  mounted() {
    this.init()
  },
  data() {
    return {
      slideIndex: 0,
      features: [
        new Feature(
          'Branding',
          'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
          'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
          'render_of_tunnel_in_cgi_light_and_environment.mp4',
          [
            new Service('Brand Strategy', 'marketing-seo.svg', '/seo'),
            new Service('Visual Brand Identity', 'marketing-seo.svg', '/seo'),
            new Service('Content Creation', 'marketing-seo.svg', '/seo'),
            new Service('UI/UX Design', 'marketing-seo.svg', '/seo'),
            new Service('Mobile App Development', 'marketing-seo.svg', '/seo'),
          ]
        ),
        new Feature(
          'Performance',
          'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
          'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
          'render_of_light_tunnel.mp4',
          [
            new Service('Social Media Marketing', 'marketing-seo.svg', '/seo'),
            new Service('Funnel Systeme', 'marketing-seo.svg', '/seo'),
            new Service('Seo Service', 'marketing-seo.svg', '/seo'),
            new Service('Copywriting', 'marketing-seo.svg', '/seo'),
            new Service('Google Ads Campagnen', 'marketing-seo.svg', '/seo'),
          ]
        ),
      ],
    }
  },
  computed: {
    feature(): Feature {
      return this.features[this.slideIndex]
    },
  },
  methods: {
    init(): void {
      setTimeout(() => {
        this.slideIndex =
          this.slideIndex < this.features.length - 1 ? this.slideIndex + 1 : 0
        this.init()
      }, 10000)
    },
  },
})
</script>

<style scoped lang="postcss"></style>
