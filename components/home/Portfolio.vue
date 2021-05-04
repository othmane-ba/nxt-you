<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
      <a href="#" class="block lg:mt-32 pointer-right">
        <div class="relative aspect-h-4 aspect-w-3 w-full">
          <img
            class="absolute top-0 left-0 h-full w-full object-cover"
            alt="Portfolio Image 1"
            src="~/assets/images/1.jpg"
          />
        </div>
        <div class="mt-3">
          <span class="block mb-0.5">Web Design</span>
          <h3 class="text-2xl font-bold">Slumber</h3>
        </div>
      </a>
      <a href="#" class="portfolio__card mt-4 m-lg-5 mt-lg-0 pointer-right">
        <div class="relative aspect-h-4 aspect-w-3 w-full">
          <img
            class="absolute top-0 left-0 h-full w-full object-cover"
            alt="Portfolio Image 2"
            src="~/assets/images/2.jpg"
          />
        </div>
        <div class="mt-3">
          <span class="block mb-0.5">Branding</span>
          <h3 class="text-2xl font-bold">Apple Tonik</h3>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
