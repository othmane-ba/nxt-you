<template>
  <div data-pointer="initial">
    <div
      ref="pdfEmbed"
      class="relative z-60 h-screen w-screen top-0 left-0"
    ></div>
  </div>
</template>

<script>
import PDFObject from 'pdfobject'
export default {
  props: {
    path: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  mounted() {
    PDFObject.embed(this.path, this.$refs.pdfEmbed)
  },
}
</script>

<style></style>
