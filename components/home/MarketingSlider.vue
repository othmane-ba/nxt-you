<template>
  <div
    class="container mx-auto px-4 lg:px-32 overflow-hidden"
    v-view.once
    data-animation-box
  >
    <div
      class="overflow-hidden w-full"
      v-swiper="options"
      :auto-destroy="true"
      @ready="onReady"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
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
                Marketingplan, Slogan, identität
              </h4>

              <p>
                Marken sind das wertvollste immatrielle Gut, das ein Unternehmen
                besitzen kann. Durch Branding hebt sich Ihr Unternehmen nicht
                nur von der Konkurrenz ab, sondern es hebt sich auch in den
                Köpfen der Verbraucher über Zeit und Entfernung hinweg hinab.
              </p>
            </div>
            <div>
              <video
                class="relative object-cover"
                muted
                loop
                autoplay="autoplay"
              >
                <source
                  :src="require('~/assets/videos/marketing.webm')"
                  type="video/webm"
                />
                <source
                  :src="require('~/assets/videos/marketing.mp4')"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
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
                Marketingplan, Slogan, identität
              </h4>

              <p>
                Marken sind das wertvollste immatrielle Gut, das ein Unternehmen
                besitzen kann. Durch Branding hebt sich Ihr Unternehmen nicht
                nur von der Konkurrenz ab, sondern es hebt sich auch in den
                Köpfen der Verbraucher über Zeit und Entfernung hinweg hinab.
              </p>
            </div>
            <div>
              <img
                class="w-full"
                src="~/assets/images/kueffner.png"
                alt="Andreas Küffner Teaser"
              />
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

const AUTOPLAY_SPEED = 10
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
