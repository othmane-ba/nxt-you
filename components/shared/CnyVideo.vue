<template>
  <video
    :playsinline="playsinline"
    :loop="loop"
    :muted="muted"
    :autoplay="autoplay"
    ref="tag"
  >
    <source
      v-for="format of types"
      :src="cnySrc(format)"
      :type="'video/' + format"
    />
    Your browser does not support HTML5 video tags.
  </video>
</template>

<script>
export default {
  data() {
    return {
      types: ['mp4', 'webm', 'ogg'],
    }
  },
  watch: {
    muted(newValue) {
      this.$refs.tag.muted = newValue
    },
  },
  props: {
    publicId: { type: String, required: true },
    width: { type: Number, default: 600 },
    loop: { type: Boolean, default: true },
    muted: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
    playsinline: { type: Boolean, default: true },
  },
  computed: {},
  methods: {
    cnySrc(format) {
      return this.$cloudinary.video.url(this.publicId, {
        crop: 'scale',
        width: this.width,
        format,
      })
    },
    play() {
      this.$refs.tag.play()
    },
    pause() {
      this.$refs.tag.pause()
    },
  },
}
</script>

<style scoped></style>
