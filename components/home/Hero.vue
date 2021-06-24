<template>
  <!-- HERO -->
  <div class="relative h-screen w-full flex items-center justify-center">
    <div class="container px-4">
      <transition
        enter-active-class="transition-all duration-1000 delay-500"
        enter-class="opacity-0 transform translate-y-4"
        mode="out-in"
      >
        <img
          v-show="showPage"
          class="w-40 2xl: w-52 mx-auto"
          src="~/assets/images/logo.png"
          alt="NXT YOU"
        />
      </transition>

      <transition
        enter-active-class="transition-all duration-1000 delay-1000"
        enter-class="opacity-0 transform translate-y-4"
        mode="out-in"
      >
        <div class="my-12" v-show="showPage">
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
      <transition
        enter-active-class="transition-all duration-1000 delay-700"
        enter-class="opacity-0"
        mode="out-in"
      >
        <div
          v-show="showPage"
          class="
            absolute
            bottom-1/4
            left-1/2
            transform
            -translate-x-1/2
            translate-y-full
          "
        >
          <button
            class="hero__button"
            data-pointer="large"
            @click="scrollDown()"
          >
            <Icon class="hero__button__icon" src="arrow-down"></Icon>
            <Icon class="hero__button__icon" src="arrow-down"></Icon>
          </button>
        </div>
      </transition>
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
  methods: {
    scrollDown() {
      const section = document.querySelector('section:nth-child(3)')
      console.log('scrollIntoView', section)
      section?.scrollIntoView({ behavior: 'smooth' })
    },
  },
  mounted() {
    this.$nuxt.$on('page-loaded', () => {
      this.showPage = true
    })
  },
})
</script>

<style lang="postcss" scoped>
.hero__button {
  @apply relative block w-16 h-16 border-4 overflow-hidden;
}
.hero__button__icon {
  @apply absolute left-1/2 transform -translate-x-1/2 transition-all ease-out-expo duration-500;
}
.hero__button__icon:first-child {
  @apply top-1/2 -translate-y-1/2 transition-none;
}
.hero__button__icon:last-child {
  @apply -top-32 translate-y-0 transition-none;
}
.hero__button:hover .hero__button__icon {
  @apply transition-all ease-out duration-150;
}
.hero__button:hover .hero__button__icon:first-child {
  @apply top-32 translate-y-0;
}
.hero__button:hover .hero__button__icon:last-child {
  @apply top-1/2 -translate-y-1/2;
}
</style>
