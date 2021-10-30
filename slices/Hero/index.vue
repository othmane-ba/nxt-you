<template>
  <section>
    <div
      class="
        relative
        h-screen
        w-full
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div class="container px-4 space-y-4 text-center" v-animate:children>
        <prismic-image
          class="w-40 2xl: w-48 mx-auto mb-12"
          :field="slice.primary.logo"
        />
        <div v-if="slice.primary.showHeadline">
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

        <h1
          v-if="slice.primary.title"
          class="
            title-lg
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-red-600
            via-blue
            to-white
            animate-gradient-xy
          "
        >
          {{ slice.primary.title }}
        </h1>

        <div v-if="slice.primary.subtitle" class="max-w-xl mx-auto px-4">
          {{ slice.primary.subtitle }}
        </div>
        <div
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
            <span class="sr-only">Scroll Down</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      showPage: false,
    }
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
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
.hero__button__icon:nth-child(1) {
  @apply top-1/2 -translate-y-1/2 transition-none;
}
.hero__button__icon:nth-child(2) {
  @apply -top-32 translate-y-0 transition-none;
}
.hero__button:hover .hero__button__icon {
  @apply transition-all ease-out duration-150;
}
.hero__button:hover .hero__button__icon:nth-child(1) {
  @apply top-32 translate-y-0;
}
.hero__button:hover .hero__button__icon:nth-child(2) {
  @apply top-1/2 -translate-y-1/2;
}
</style>
