<template>
  <div data-pointer="initial">
    <div class="relative z-60 h-screen w-screen top-0 left-0"></div>
  </div>
</template>

<script>
import PDFObject from 'pdfobject'
export default {
  name: 'PdfObject',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  mounted() {
    PDFObject.embed(this.slice.primary.media.url)
  },
}
</script>

<style></style>
