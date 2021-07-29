<template>
  <div>
    <Sphere></Sphere>

    <div>
      <section class="section-top">
        <Hero></Hero>
      </section>

      <section class="section">
        <StickyVideoDisplay></StickyVideoDisplay>
      </section>

      <section class="section">
        <IntroText></IntroText>
      </section>

      <section class="section">
        <BrandTeaser></BrandTeaser>
      </section>

      <section class="section">
        <NumText title="Kreationen" :number="1" action-text="Projekte">
          Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
          etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
        </NumText>
      </section>

      <section class="section">
        <VideoGrid> </VideoGrid>
      </section>

      <section class="section">
        <FeatureSlider> </FeatureSlider>
      </section>

      <section class="section">
        <NumText title="Unsere Arbeit" :number="2" action-text="Projekte">
          Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
          etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
        </NumText>
      </section>

      <section class="section">
        <Work></Work>
      </section>

      <section class="section">
        <MarketingSlider> </MarketingSlider>
      </section>

      <section class="section">
        <NumText
          title="Unser Team"
          :number="3"
          rtl
          action-text="Projekte ansehen"
        >
          Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
          etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
        </NumText>
      </section>

      <section class="a-c-preview section">
        <div class="container mx-auto px-4 lg:px-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-start"
          >
            <CaptionImage
              src="andreas-kueffner.png"
              alt="Andreas Küffner"
              rtl
              :parallaxDelay="1"
              >Andreas<br />Küffner</CaptionImage
            >
            <CaptionImage
              src="clemens-kauschke.png"
              alt="Clemens Kauschke"
              :parallaxDelay="1.4"
              >Clemens<br />Kauschke</CaptionImage
            >
          </div>
        </div>
      </section>

      <!--
      <section class="testimonial">
        <TestimonialSlider></TestimonialSlider>
      </section>
-->

      <section class="section">
        <div class="container px-4 mx-auto">
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              v-view.once
              data-animation-box
              class="w-full"
              src="~/assets/images/sb-01.png"
              alt="Studio Bernard Teaser 01"
            />
            <img
              v-view.once
              class="w-full"
              data-animation-box
              src="~/assets/images/sb-02.png"
              alt="Studio Bernard Teaser 02"
            />
          </div>
        </div>
      </section>

      <section class="section">
        <Intersection></Intersection>
      </section>

      <section class="section">
        <ClientList></ClientList>
      </section>

      <section class="section">
        <Qualifier></Qualifier>
      </section>
    </div>
  </div>
</template>

<script >

import FeatureSlider from '~/components/home/FeatureSlider.vue'
import Transition from '~/mixins/transition.js'

export default{
  components: { FeatureSlider },
  mixins: [Transition],
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
