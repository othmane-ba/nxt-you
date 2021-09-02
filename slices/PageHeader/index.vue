<template>
  <header>
    <div class="relative h-screen w-full overflow-hidden">
      <div class="container mx-auto px-4 lg:px-32 h-full">
        <div class="relative flex items-center w-full h-full z-20">
          <h1 class="title-lg" v-animate:text>
            {{ slice.primary.title }}
          </h1>
          <div class="self-end ml-auto py-16">
            <button
              @click="scrollDown()"
              data-pointer="large"
              class="
                scroll-btn
                flex
                transform
                rotate-90
                items-center
                justify-center
                rounded-full
                text-xs
                font-bold
                uppercase
                tracking-widest
                space-x-2
              "
            >
              <span class="block">Scroll</span>
              <span class="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black z-10"></div>
        <div class="absolute inset-0 z-0" v-simple-parallax="{ scale: 1.4 }">
          <prismic-image
            data-not-lazy
            class="absolute top-0 left-0 w-full h-full object-cover"
            :field="slice.primary.image"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
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
      document.querySelector('section').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped lang="postcss">
.scroll-btn,
.scroll-btn span:first-child {
  @apply ease-in-out duration-700;
}

.scroll-btn:hover {
  @apply opacity-50;
}
.scroll-btn:hover span:first-child {
  @apply transform -translate-x-4;
}
</style>
