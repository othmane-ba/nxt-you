<template>
  <div class="container mx-auto px-4 lg:px-52">
    <div class="relative lg:aspect-h-1 lg:aspect-w-2 border-4 border-blue-800">
      <div
        class="relative bg-black p-4 max-w-64 lg:absolute lg:max-w-none lg:left-0 lg:top-2/4 lg:transform lg:-translate-y-1/4 lg:-translate-x-36 lg:bottom-auto lg:right-auto lg:h-auto lg:w-3/4"
      >
        <div
          class="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black opacity-80 pointer-events-none"
        ></div>
        <p class="text-4xl font-bold leading-snug">
          If you don't have a strong brand, someone else will be there to fill
          that role for you
        </p>
      </div>
      <img
        alt="You need a strong brand"
        class="w-2/3 max-w-64 ml-auto transform translate-x-4 translate-y-4 lg:translate-x-36 lg:translate-y-8# bg-black lg:absolute lg:h-full lg:w-auto lg:right-0 lg:bottom-0 lg:top-auto lg:left-auto"
        src="~/assets/images/home-brand-teaser.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  mounted() {},
  methods: {},
})
</script>

<style scoped></style>
