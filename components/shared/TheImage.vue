<template>
  <div class="img-container">
    <img
      v-lazy
      :data-src="src"
      :alt="alt"
      :sizes="sizes"
      :width="width && width"
      :height="height && height"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: Number, default: null },
    height: { type: Number, required: null },
    sizes: { type: String, default: 'md:360px lg:580px xl:840px' },
  },
  computed: {},
  methods: {
    cnySrc(format) {

    },
  },
}
</script>

<style scoped></style>
