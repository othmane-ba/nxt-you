<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:gap-y-16">
        <div class="lg:col-span-2">
          <transition
            enter-active-class="transition-all ease-in-out duration-1000"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <h4
              class="text-center font-bold uppercase text-5xl"
              :key="slideIndex"
            >
              {{ feature.title }}
            </h4>
          </transition>
        </div>
        <div>
          <p class="font-light uppercase text-4xl">
            {{ feature.intro }}
          </p>
        </div>
        <div>
          <p>
            {{ feature.description }}
          </p>
        </div>
        <div class="lg:col-span-2">
          <div class="relative rounded-lg w-full h-80 overflow-hidden">
            <transition
              enter-active-class="transition-all ease-in-out duration-1000"
              enter-class="opacity-0"
              enter-to-class="opacity-100"
              leave-class="opacity-100"
              leave-to-class="opacity-0"
              mode="out-in"
            >
              <video
                class="absolute inset-2/4 transform -translate-x-2/4 -translate-y-2/4 object-cover"
                muted
                loop
                autoplay="autoplay"
              >
                <source :src="feature.video" type="video/mp4" />
              </video>
            </transition>
          </div>
        </div>
      </div>
    </div>
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
    public video: NodeJS.Require,
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
          require('~/assets/videos/render_of_light_tunnel.mp4'),
          []
        ),
        new Feature(
          'Performance',
          'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
          'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
          require('~/assets/videos/render_of_tunnel_in_cgi_light_and_environment.mp4'),
          []
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
