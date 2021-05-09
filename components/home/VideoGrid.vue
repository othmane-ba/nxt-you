<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="aspect-h-3 aspect-w-2 w-full bg-blue-600"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class VideoItem {
  constructor(public src: string, public poster: string) {}
}
export default Vue.extend({
  data() {
    return {
      videos: [
        new VideoItem('', ''),
        new VideoItem('', ''),
        new VideoItem('', ''),
        new VideoItem('', ''),
      ],
    }
  },
})
</script>

<style scoped></style>
