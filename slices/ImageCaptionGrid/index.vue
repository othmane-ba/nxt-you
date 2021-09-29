<template>
  <section class="image-caption-grid">
    <div class="container mx-auto px-4 lg:px-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-start"
        v-animate
      >
        <article
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="image-caption relative w-full"
          :class="{
            'lg:text-right pl-4 lg:pl-32': i % 2 === 0,
            'lg:text-left pl-4 lg:pl-0 lg:pr-32': i % 2 !== 0,
          }"
        >
          <img
            class="w-full h-auto"
            v-lazy
            :data-src="item.image.url"
            :alt="item.image.alt"
            v-simple-parallax="{
              overflow: true,
              scale: i % 2 <= 0 ? 1.25 : 1.15,
            }"
          />
          <div
            class="absolute inline-block bottom-0 pb-8 overflow-hidden"
            :class="{
              'left-0': i % 2 === 0,
              'left-0 lg:left-auto lg:right-0': i % 2 !== 0,
            }"
          >
            <span
              class="text-white font-bold text-4xl uppercase"
              v-animate:text
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

<style lang="postcss">
.image-caption-grid .whitespace::after {
  content: '\a';
  white-space: pre;
}
</style>
