<template>
  <div class="hover-image" data-pointer="right" v-view.once>
    <div
      class="
        hover-image-box
        relative
        aspect-h-1 aspect-w-1
        w-full
        overflow-hidden
      "
      data-animation-box
    >
      <img
        class="
          absolute
          top-0
          left-0
          h-full
          w-full
          object-cover
          transition-opacity
          ease-in-out
          duration-1000
        "
        :alt="title + ' Inactive'"
        :src="require('~/assets/images/' + image[0])"
      />
      <img
        class="
          absolute
          top-0
          left-0
          h-full
          w-full
          object-cover
          opacity-0
          transition-opacity
          ease-in-out
          duration-1000
        "
        :alt="title"
        :src="require('~/assets/images/' + image[1])"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    image() {
      return [this.src + '.png', this.src + '-active.png']
    },
  },
}
</script>

<style lang="postcss" scoped>
.hover-image-box:hover img:nth-child(1) {
  @apply opacity-0;
}

.hover-image-box:hover img:nth-child(2) {
  @apply opacity-100;
}
</style>
