<template>
  <div class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      <div v-for="(video, index) in videos" :key="index" v-view.once>
        <div
          data-animation-box
          class="
            video-item
            aspect-h-1
            md:aspect-h-4
            aspect-w-2
            w-full
            relative
            overflow-hidden
          "
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
            :poster="require('~/assets/images/' + video.src + '.jpg')"
            class="
              absolute
              top-1/2
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              object-cover
            "
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
            class="
              absolute
              inset-0
              transform
              scale-105
              bg-black
              transition-opacity
              ease-out-expo
              duration-1000
              opacity-50
              hover:opacity-0
            "
          ></div>
          <button
            class="
              flex
              justify-center
              items-center
              absolute
              top-1/2
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              w-16
              h-16
              rounded-full
              border-2
              transition-opacity
              ease-out-expo
              duration-1000
            "
          >
            <svg
              class="block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 17 17"
            >
              <path
                d="M3 2.692v11.618l11.618-5.837-11.618-5.781zM4 4.308l8.382 4.17-8.382 4.211v-8.381z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class VideoItem {
  constructor(title, src) {
    this.title = title
    this.src = src
  }
}
export default {
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
    play(videoItem, index) {
      this.$refs.video[index].play()
    },
    pause(videoItem, index) {
      this.$refs.video[index].pause()
    },
  },
}
</script>

<style lang="postcss" scoped>
.video-item:hover button {
  @apply opacity-0;
}
</style>
