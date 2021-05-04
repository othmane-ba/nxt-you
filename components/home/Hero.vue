<template>
  <!-- HERO -->
  <div class="relative h-screen w-full flex items-center justify-center">
    <div class="container px-4">
      <img
        class="w-40 2xl: w-52 mx-auto"
        src="~/assets/images/logo.png"
        alt="NXT YOU"
      />

      <div class="my-8">
        <HeroHeadline
          class="text-center"
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

      <button
        class="button button--outline button--rec hero__inner__button pointer-large js-down-button"
      >
        <i class="ti-arrow-down"></i>
        <i class="ti-arrow-down"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
