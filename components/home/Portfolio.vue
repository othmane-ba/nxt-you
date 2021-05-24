<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <a
        v-for="(item, index) of items"
        :key="index"
        :href="item.href"
        class="block"
        :class="{ 'lg:mt-32': index % 2 === 0 }"
        data-pointer="right"
        v-view.once
      >
        <div class="relative aspect-h-4 aspect-w-3 w-full" data-animation-box>
          <img
            class="absolute top-0 left-0 h-full w-full object-cover"
            alt="Portfolio Image 1"
            :src="require('~/assets/images/' + item.image)"
          />
        </div>
        <div class="mt-3">
          <span
            data-animation-text-white
            :data-animation-text="item.subHeading"
            class="mb-0.5"
            >{{ item.subHeading }}</span
          ><br />
          <h3
            data-animation-text-white
            class="text-2xl font-bold delay-300"
            :data-animation-text="item.heading"
          >
            {{ item.heading }}
          </h3>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class PortfolioItem {
  constructor(
    public heading: string,
    public subHeading: string,
    public image: string,
    public href: string
  ) {}
}
export default Vue.extend({
  data() {
    return {
      items: [
        new PortfolioItem('Slumber', 'Web Design', '1.jpg', '#'),
        new PortfolioItem('Apple Tonik', 'Branding', '2.jpg', '#'),
      ],
    }
  },
})
</script>

<style scoped></style>
