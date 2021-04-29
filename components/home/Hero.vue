<template>
  <!-- HERO INNER -->
  <div class="hero__inner">
    <!-- CONTAINER -->
    <div class="container">
      <img
        class="hero__inner__logo mb-4 mt-4"
        src="~/assets/images/logo.png"
        alt="NXT YOU"
      />

      <!-- HERO TITLE  -->
      <div class="hero__inner__title mb-5 mt-5">
        <h1 class="cd-headline clip home-headline">
          I’m a
          <span class="cd-words-wrapper single-headline"
            ><b class="is-visible">Developer</b><b>Designer</b
            ><b>Freelancer</b></span
          >
        </h1>
      </div>
      <!-- /HERO TITLE -->

      <!-- HERO BUTTON -->
      <button
        class="button button--outline button--rec hero__inner__button pointer-large js-down-button"
      >
        <i class="ti-arrow-down"></i>
        <i class="ti-arrow-down"></i>
      </button>
      <!-- /HERO BUTTON -->
    </div>
    <!-- /CONTAINER -->
  </div>
  <!-- /HERO INNER -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
