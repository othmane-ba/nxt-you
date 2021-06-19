<template>
  <div class="container mx-auto px-4 lg:px-52" v-view.once>
    <div
      class="relative lg:aspect-h-1 lg:aspect-w-2 border-4 border-blue-dark"
      data-animation-box
    >
      <div
        class="relative bg-black p-4 max-w-64 lg:absolute lg:max-w-none lg:left-0 lg:top-2/4 lg:transform lg:-translate-y-1/3 lg:-translate-x-36 lg:bottom-auto lg:right-auto lg:h-auto lg:w-3/4"
      >
        <div
          class="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black via-transparent pointer-events-none"
        ></div>
        <p class="text-4xl font-bold leading-snug">
          If you don't have a strong brand, someone else will be there to fill
          that role for you
        </p>
      </div>
      <div
        class="relative w-72 ml-auto transform translate-x-4 translate-y-4 lg:translate-x-32 lg:translate-y-10 bg-black lg:absolute lg:h-full lg:max-h-96 lg:w-auto lg:right-0 lg:bottom-0 lg:top-auto lg:left-auto"
      >
        <img
          alt="If you don't have a strong brand, someone else will be there to fill that role for you"
          data-parallax
          data-overflow
          class="relative w-full h-auto lg:h-full lg:w-auto"
          src="~/assets/images/home-brand-02.png"
          data-scale="1.2"
        />
        <img
          v-for="(id, i) in ['01', '03', '04', '05']"
          :key="id"
          data-parallax
          data-overflow
          alt="If you don't have a strong brand, someone else will be there to fill that role for you"
          class="absolute top-0 left-0 h-full w-full object-contain z-10"
          :data-scale="1.4 * (i % 2 === 0 ? 1 : 1.2)"
          :src="require('~/assets/images/home-brand-' + id + '.png')"
        />
      </div>
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
