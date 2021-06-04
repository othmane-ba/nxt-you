<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      <div v-for="(video, index) in videos" :key="index" v-view.once>
        <div
          data-animation-box
          class="video-item aspect-h-1 md:aspect-h-4 aspect-w-2 w-full relative overflow-hidden"
          data-pointer="play"
          @mouseover="play(video, index)"
          @mouseout="pause(video, index)"
        >
          <video
            ref="video"
            loop
            muted
            playsinline
            preload="auto"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source
              :src="require('~/assets/videos/' + video.src + '.webm')"
              type="video/webm; codecs=vp9,vorbis"
            />
            <source
              :src="require('~/assets/videos/' + video.src + '.mp4')"
              type="video/mp4"
            />
          </video>
          <div
            class="absolute inset-0 transform scale-105 bg-black transition-opacity ease-out-expo duration-1000 opacity-50 hover:opacity-0"
          ></div>
          <button
            class="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 transition-opacity ease-out-expo duration-1000"
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
  constructor(public title: string, public src: string) {}
}
export default Vue.extend({
  data() {
    return {
      videos: [
        new VideoItem('Pearson Loop', 'Pearson_Loop'),
        new VideoItem('Fortnite', 'FORTNITE'),
        new VideoItem('Stance', 'Stance'),
        new VideoItem('UNCSA', 'UNCSA'),
      ],
    }
  },
  methods: {
    play(videoItem: VideoItem, index: number) {
      ;(this.$refs.video as HTMLVideoElement[])[index].play()
    },
    pause(videoItem: VideoItem, index: number) {
      ;(this.$refs.video as HTMLVideoElement[])[index].pause()
    },
  },
})
</script>

<style lang="postcss" scoped>
.video-item:hover button {
  @apply opacity-0;
}
</style>
