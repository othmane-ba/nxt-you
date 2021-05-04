<template>
  <!-- HERO -->
  <div class="relative h-screen w-full">
    <!-- CONTAINER -->
    <div class="container mx-auto px-4">
      <img class="" src="~/assets/images/logo.png" alt="NXT YOU" />

      <!-- HERO TITLE  -->
      <div class="hero__inner__title mb-5 mt-5">
        <HeroHeadline
          :words="[
            'Designer',
            'Developer',
            'Videographer',
            'Analyst',
            'Manager',
            'Creative',
          ]"
        >
          I’m a
        </HeroHeadline>
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
