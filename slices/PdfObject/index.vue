<template>
  <div data-pointer="initial"></div>
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
    PDFObject.embed(this.slice.primary.media.url, document.body, {
      fallbackLink:
        "<div class='relative w-screen h-screen overflow-hidden'><div class='absolute top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2 max-h-full w-full text-center'><p>Falls der Download nicht automatisch beginnt bitte <a class='link' href='[url]'>hier klicken</a>.</p></div></div>",
    })
    if (!PDFObject.supportsPDFs) {
      this.$axios
        .get(this.slice.primary.media.url, {
          responseType: 'blob',
        })
        .then((res) =>
          this.download(
            window.URL.createObjectURL(new Blob([res.data])),
            this.slice.primary.media.name
          )
        )
        .catch((error) => console.log(error))
    }
  },
  methods: {
    download(url, name) {
      const link = document.createElement('a')
      link.href = url
      link.download = name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style></style>
