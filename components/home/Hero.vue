<template>
  <!-- HERO -->
  <div class="relative h-screen w-full flex items-center justify-center">
    <div class="container px-4">
      <transition
        enter-active-class="transition-all duration-1000"
        enter-class="opacity-0 transform translate-y-4"
        mode="out-in"
      >
        <img
          v-if="showPage"
          class="w-40 2xl: w-52 mx-auto"
          src="~/assets/images/logo.png"
          alt="NXT YOU"
        />
      </transition>

      <transition
        enter-active-class="transition-all duration-1000 delay-700"
        enter-class="opacity-0 transform translate-y-4"
        mode="out-in"
      >
        <div class="my-8" v-if="showPage">
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
      </transition>
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

export default Vue.extend({
  data() {
    return {
      showPage: false,
    }
  },
  mounted() {
    this.$nuxt.$on('page-loaded', () => {
      this.showPage = true
    })
  },
})
</script>

<style scoped></style>
