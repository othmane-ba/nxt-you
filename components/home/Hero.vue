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
        <div class="mt-4 mb-4" v-show="showPage">
          <HeroHeadline
            class="text-center"
            :words="[
              'Designer.',
              'Developer.',
              'Videographers.',
              'Analysts.',
              'Managers.',
              'Doers.',
              'Creatives.',
              'Thinkers.',
            ]"
          >
            We are
          </HeroHeadline>
        </div>
      </transition>
      <transition
        enter-active-class="transition-all duration-1000 delay-700"
        enter-class="opacity-0"
        mode="out-in"
      >
        <div
          class="mt-4 mb-12 text-center max-w-xl mx-auto px-4"
          v-show="showPage"
        >
          <p>
            Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen,
            etwas wirklich Einzigartiges und Außergewöhnliches zu schaffen.
          </p>
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
            <svg
              v-for="icon in 2"
              class="hero__button__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: false,
    }
  },
  methods: {
    scrollDown() {
      document
        .querySelector('section:nth-child(2)')
        .scrollIntoView({ behavior: 'smooth' })
    },
  },
  mounted() {
    this.$nuxt.$on('page-loaded', () => {
      this.showPage = true
    })
  },
}
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
