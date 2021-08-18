<template>
  <section class="image-caption-grid">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-start">
        <article
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="image-caption relative w-full"
          :class="{
            'lg:text-right pl-4 lg:pl-32': i % 2 === 0,
            'lg:text-left pl-4 lg:pl-0 lg:pr-32': i % 2 !== 0,
          }"
          v-view.once
          data-animation-box
        >
          <prismic-image
            data-parallax
            class="w-full h-auto"
            :field="item.image"
          />
          <div
            class="absolute inline-block bottom-0 pb-8 max-w-56 overflow-hidden"
            :class="{
              'left-0': i % 2 === 0,
              'left-0 lg:left-auto lg:right-0': i % 2 !== 0,
            }"
          >
            <span
              class="text-white font-bold text-4xl uppercase"
              data-parallax
              data-overflow
              data-orientation="down"
            >
              {{ item.caption }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageCaptionGrid',
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

<style scoped></style>
