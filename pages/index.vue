<template>
  <div>
    <Sphere></Sphere>

    <section id="hero" class="hero js-page-enter-animated">
      <Hero></Hero>
    </section>

    <section class="intro-text">
      <IntroText></IntroText>
    </section>

    <section id="portfolio" data-animation-container class="portfolio">
      <Portfolio></Portfolio>
    </section>

    <section class="client">
      <ClientList></ClientList>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact text-center" data-animation-container>
      <Contact></Contact>
    </section>
    <!-- /CONTACT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
