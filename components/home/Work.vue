<template>
  <div class="container mx-auto px-4 lg:px-32">
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(item, index) of items"
        :key="index"
        class="work-item"
        data-pointer="right"
        v-view.once
      >
        <div
          class="work-image-box relative aspect-h-1 aspect-w-1 w-full overflow-hidden"
          data-animation-box
        >
          <img
            class="absolute top-0 left-0 h-full w-full object-cover transition-opacity ease-out-expo duration-1000"
            :alt="item.title + ' Inactive'"
            :src="require('~/assets/images/' + item.image[0])"
          />
          <img
            class="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity ease-out-expo duration-1000"
            :alt="item.title"
            :src="require('~/assets/images/' + item.image[1])"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class WorkItem {
  constructor(public title: string, public src: string) {}

  get image(): string[] {
    return [this.src + '.png', this.src + '-active.png']
  }
}
export default Vue.extend({
  data() {
    return {
      items: [
        new WorkItem('The Juice', 'juice'),
        new WorkItem('Cesis', 'cesis'),
        new WorkItem('Cocoa', 'cocoa'),
        new WorkItem('Neohouse', 'neohouse'),
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.work-image-box:hover img:nth-child(1) {
  @apply opacity-0;
}

.work-image-box:hover img:nth-child(2) {
  @apply opacity-100;
}
</style>
