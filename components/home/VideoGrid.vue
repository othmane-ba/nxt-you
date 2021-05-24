<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      <div v-for="(video, index) in videos" :key="index" v-view.once>
        <div
          data-animation-box
          class="aspect-h-1 md:aspect-h-2 xl:aspect-h-3 aspect-w-2 w-full relative overflow-hidden rounded-xl"
          data-pointer="play"
        >
          <img
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            :src="video.poster"
            :alt="video.title"
          />
          <div
            class="absolute inset-0 transform scale-105 bg-black transition-opacity ease-out-expo duration-1000 opacity-50 hover:opacity-0"
          ></div>
          <button
            v-if="btnActive"
            class="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2"
          >
            <Icon class="block text-lg" src="control-play"></Icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class VideoItem {
  constructor(
    public title: string,
    public src: string,
    public poster: string
  ) {}
}
export default Vue.extend({
  data() {
    return {
      videos: [
        new VideoItem('Video 1', '', 'https://picsum.photos/200/300'),
        new VideoItem('Video 2', '', 'https://picsum.photos/300/300'),
        new VideoItem('Video 3', '', 'https://picsum.photos/400/300'),
        new VideoItem('Video 4', '', 'https://picsum.photos/500/300'),
      ],
    }
  },
  computed: {
    btnActive(): boolean {
      return !(this as any).$device.isDesktop
    },
  },
})
</script>

<style scoped></style>
