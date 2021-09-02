<template>
  <video>
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
  props: {
    publicId: { type: String, required: true },
  },
  computed: {},
  methods: {
    cnySrc(format) {
      return this.$cloudinary.video.url(this.publicId, {
        crop: 'scale',
        width: 600,
        format,
      })
    },
  },
}
</script>

<style scoped></style>
