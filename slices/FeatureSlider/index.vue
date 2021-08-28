<template>
  <section class="feature-slider">
    <div
      class="container mx-auto p-4 lg:p-16 overflow-hidden relative"
      v-animate
    >
      <div>
        <div class="relative overflow-hidden w-full z-20">
          <div v-swiper="options" :auto-destroy="true" @ready="onReady">
            <div class="swiper-wrapper">
              <div
                v-for="(feature, index) in features"
                class="swiper-slide"
                :key="index"
              >
                <div class="w-full space-y-8 lg:space-y-16">
                  <h4 class="title text-center">
                    {{ feature.title }}
                  </h4>

                  <div
                    class="
                      relative
                      bg-gray-400
                      max-w-xl
                      mx-auto
                      mb-4
                      w-full
                      h-px
                    "
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
                  <ul
                    class="
                      relative
                      w-full
                      flex flex-wrap
                      items-center
                      justify-around
                      z-10
                    "
                  >
                    <li
                      class="
                        relative
                        flex-1 flex flex-col
                        justify-center
                        items-center
                        justify-center
                        border-4 border-transparent
                        rounded-xl
                        transition-all
                        hover:border-gray-100
                        overflow-hidden
                        p-4
                        space-y-4
                      "
                      data-pointer="large"
                      v-for="(service, j) of feature.services"
                      :key="index + j"
                    >
                      <img
                        class="w-16 xl:w-20"
                        :src="
                          require('~/assets/images/features/' + service.icon)
                        "
                      />

                      <div class="text-center uppercase font-semibold">
                        <span class="break-words">
                          {{ service.title }}
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

        <CnyVideo
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
          publicId="nxt-you/performance_geewbk"
          muted
          loop
          autoplay
        ></CnyVideo>
      </div>
    </div>
  </section>
</template>

<script>
class Service {
  constructor(title, icon, href) {
    this.title = title
    this.icon = icon
    this.href = href
  }
}

class Feature {
  constructor(title, intro, description, services) {
    this.title = title
    this.intro = intro
    this.description = description
    this.services = services
  }
}

const FEATURES = [
  new Feature(
    'Branding',
    'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
    'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
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
    [
      new Service('Social Media Marketing', 'bar-up.png', '/seo'),
      new Service('Funnel Systeme', 'dollar-bar.png', '/seo'),
      new Service('Seo Service', 'seo.png', '/seo'),
      new Service('Copywriting', 'pencil-post.png', '/seo'),
      new Service('Google Ads Campagnen', 'goal.png', '/seo'),
    ]
  ),
  new Feature(
    'Sales',
    'Der Vertrieb ist das Herz und die Seele eines jeden Unternehmens',
    'Wir arbeiten hart daran die Bedürfnisse Ihres Unternehmens zu verstehen - das ist es was wir am besten können. Wir arbeiten mit Ihnen zusammen um hochwertige, maßgeschneiderte Lösungen zu entwickeln, die sie von Punkt A zu Punkt B bringen und Ihren ROI maximieren.',
    [
      new Service('Aufbau Vertriebsstruktur', 'structure.png', '/seo'),
      new Service('Organisches Funneling', 'funnel.png', '/seo'),
      new Service('Leadership Ausbildung', 'filter.png', '/seo'),
      new Service('Medien-Platzierung', 'media.png', '/seo'),
      new Service('Produkt & Geschäftsentwicklung', 'products.png', '/seo'),
    ]
  ),
]

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
      options: {
        allowTouchMove: false,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      },
      features: FEATURES,
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
