<template>
  <div
    class="container mx-auto px-4 lg:px-16 overflow-hidden"
    v-view.once
    data-animation-box
  >
    <div>
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
              <h4 class="title text-center">
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
                    :src="require('~/assets/videos/' + feature.video + '.webm')"
                    type="video/webm"
                  />
                  <source
                    :src="require('~/assets/videos/' + feature.video + '.mp4')"
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

<script>
class Service {
  constructor(title, icon, href) {
    this.title = title
    this.icon = icon
    this.href = href
  }
}

class Feature {
  constructor(title, intro, description, video, services) {
    this.title = title
    this.intro = intro
    this.description = description
    this.video = video
    this.services = services
  }
}

const FEATURES = [
  new Feature(
    'Branding',
    'Produkte entstehen in einer Fabrik, aber Marken eintstehen im Kopf',
    'Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und Beziehungen, die zusammen genommen dafür sorgen, dass ein Kunde bestimmte Dienstleistungen anderen gegnüber bevorzugt.',
    'branding',
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
    'performance',
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
    'branding',
    [
      new Service('Aufbau Vertriebsstruktur', 'structure.png', '/seo'),
      new Service('Organisches Funneling', 'funnel.png', '/seo'),
      new Service('Leadership Ausbildung', 'filter.png', '/seo'),
      new Service('Medien-Platzierung', 'media.png', '/seo'),
      new Service('Produkt & Geschäftsentwicklung', 'products.png', '/seo'),
    ]
  ),
]
const AUTOPLAY_SPEED = 10

export default {
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
          AUTOPLAY_SPEED,
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
