<template>
  <header>
    <div class="relative h-screen w-full overflow-hidden">
      <div class="container mx-auto px-4 lg:px-32 h-full">
        <div class="relative flex items-center w-full h-full z-20">
          <h1 class="title-lg" v-animate:text>
            {{ slice.primary.title }}
          </h1>
        </div>
        <div class="absolute inset-0 bg-gradient-to-tr from-black z-10"></div>
        <div class="absolute inset-0 z-0">
          <prismic-image
            class="absolute top-0 left-0 w-full h-full object-cover"
            v-simple-parallax
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
