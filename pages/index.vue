<template>
  <div>
    <Sphere></Sphere>

    <div>
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

      <!--
    <section id="portfolio" data-animation-container class="portfolio">
      <Portfolio></Portfolio>
    </section>
-->

      <section id="work">
        <Work></Work>
      </section>

      <section class="teaser-01">
        <div class="container mx-auto px-4">
          <img
            v-view.once
            data-animation-box
            class="w-full max-w-4xl mx-auto"
            src="~/assets/images/kueffner.png"
            alt="Andreas Küffner Teaser"
          />
        </div>
      </section>

      <!--
      <section class="testimonial">
        <TestimonialSlider></TestimonialSlider>
      </section>
-->

      <section class="teaser-02">
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

      <section class="client">
        <ClientList></ClientList>
      </section>

      <section class="qualifier">
        <Qualifier></Qualifier>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FeatureSlider from '~/components/home/FeatureSlider.vue'
import Transition from '~/mixins/transition.js'

export default Vue.extend({
  components: { FeatureSlider },
  mixins: [Transition],
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
