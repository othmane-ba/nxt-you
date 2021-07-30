<template>
  <div class="relative h-96 w-full overflow-hidden" v-view.once>
    <header class="container mx-auto px-4 lg:px-32 h-full">
      <div class="relative flex items-center w-full h-full z-20">
        <h1 class="text-3xl lg:text-5xl font-bold">
          <span :data-animation-text="title" data-animation-text-white>
            {{ title }}</span
          >
        </h1>
      </div>
      <div class="absolute inset-0 bg-gradient-to-tr from-black z-10"></div>
      <div class="absolute inset-0 z-0" data-parallax data-scale="1.2">
        <video
          class="
            absolute
            opacity-75
            inset-2/4
            transform
            -translate-x-2/4 -translate-y-2/4
            object-cover
            w-full
            h-full
          "
          muted
          loop
          autoplay="autoplay"
        >
          <source
            :src="require('~/assets/videos/' + videoSrc + '.webm')"
            type="video/webm"
          />
          <source
            :src="require('~/assets/videos/' + videoSrc + '.mp4')"
            type="video/mp4"
          />
        </video>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    videoSrc: {
      type: String,
      default: '',
    },
  },
  computed: {},
}
</script>

<style scoped></style>
