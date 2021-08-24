<template>
  <header>
    <div class="relative h-96 w-full overflow-hidden" v-view.once>
      <div class="container mx-auto px-4 lg:px-32 h-full">
        <div class="relative flex items-center w-full h-full z-20">
          <h1 class="title-lg">
            <span
              :data-animation-text="slice.primary.title"
              data-animation-text-white
            >
              {{ slice.primary.title }}</span
            >
          </h1>
        </div>
        <div class="absolute inset-0 bg-gradient-to-tr from-black z-10"></div>
        <div class="absolute inset-0 z-0" ny-animate>
          <prismic-image
            class="
              relative
              transform
              -translate-x-1/2 -translate-y-1/2
              top-1/2
              left-1/2
              w-full
              h-auto
              object-cover
            "
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
  computed: {},
}
</script>

<style scoped></style>
