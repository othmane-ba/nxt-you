<template>
  <section class="reveal-grid">
    <div
      class="container mx-auto px-4 lg:px-32 grid gap-4"
       v-animate:children
    >
      <div
        class="grid grid-cols-2 lg:grid-cols-3 gap-4"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
      >
        <div
          class="
            flex flex-col
            justify-center
            items-center
            order-0
            col-span-2
            lg:col-span-1
          "
          :class="{ 'lg:order-last lg:text-right': item.rtl }"
        >
          <div>
            <h3 class="font-bold text-2xl text-blue uppercase my-2">
              {{ item.title }}
            </h3>
            <prismic-rich-text :field="item.description" />
          </div>
        </div>
        <div
          data-pointer="right"
          class="
            hover-image-box
            relative
            aspect-h-1 aspect-w-1
            w-full
            overflow-hidden
          "
          v-for="(image, j) in ['imageFirst', 'imageSecond']"
          :key="j"
          v-simple-parallax="{ overflow: true }"
        >
          <prismic-image
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
            :field="item[image]"
          />
          <prismic-image
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
            :field="item[image + 'Reveal']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RevealGrid',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="postcss">
.reveal-grid .hover-image-box:hover img:nth-child(1) {
  @apply opacity-0;
}

.reveal-grid .hover-image-box:hover img:nth-child(2) {
  @apply opacity-100;
}
</style>
