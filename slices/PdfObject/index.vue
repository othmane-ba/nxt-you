<template>
  <div data-pointer="initial"></div>
</template>

<script>
import PDFObject from 'pdfobject'
export default {
  name: 'PdfObject',
  data() {
    return {
      supportsPDFs: true,
    }
  },
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
    this.supportsPDFs = PDFObject.supportsPDFs
    PDFObject.embed(this.slice.primary.media.url, document.body, {
      fallbackLink: `<div class='relative w-full h-screen overflow-hidden flex items-center justify-center'><div class='container p-4 mx-auto text-center'><a data-pointer='right' href="/" class="flex items-center justify-start space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg><span class="block">Startseite</span></a><a data-pointer='large' class='flex items-center justify-center w-full max-w-sm p-4 mb-4 mt-16 space-x-4 mx-auto outline-none appearance-none bg-gray-900 border-2 border-gray-900 rounded-3xl text-white text-xs uppercase font-bold tracking-widest overflow-hidden transition ease-in-out duration-500 hover:bg-transparent' href='[url]'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><h1>${this.slice.primary.media.name}</h1></a><p>Falls der Download nicht automatisch beginnt bitte <a class='link' href='[url]'>hier klicken</a>.</p></div></div>`,
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
