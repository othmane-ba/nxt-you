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
      fallbackLink: `<div class='relative w-full h-screen overflow-hidden flex items-center justify-center'><div class='container p-4 mx-auto text-center'><a href="/" class="flex items-center justify-start space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg><span class="block">Homepage</span></a><h1 class="title mb-2 mt-4">${this.slice.primary.media.name}</h1><p>Falls der Download nicht automatisch beginnt bitte <a class='link' href='[url]'>hier klicken</a>.</p></div></div>`,
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
