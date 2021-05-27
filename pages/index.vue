<template>
  <div>
    <Sphere></Sphere>

    <section>
      <Hero></Hero>
    </section>

    <section>
      <IntroText></IntroText>
    </section>

    <section>
      <BrandTeaser></BrandTeaser>
    </section>

    <section>
      <NumText title="Kreationen" :number="1" action-text="Projekte">
        Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
        etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
      </NumText>
    </section>

    <section>
      <VideoGrid> </VideoGrid>
    </section>

    <section>
      <FeatureSlider> </FeatureSlider>
    </section>

    <section>
      <NumText
        title="Unser Team"
        :number="2"
        rtl
        action-text="Projekte ansehen"
      >
        Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
        etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
      </NumText>
    </section>

    <section id="portfolio" data-animation-container class="portfolio">
      <Portfolio></Portfolio>
    </section>

    <section class="client">
      <ClientList></ClientList>
    </section>

    <section class="testimonial">
      <TestimonialSlider></TestimonialSlider>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FeatureSlider from '~/components/home/FeatureSlider.vue'

export default Vue.extend({
  components: { FeatureSlider },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
