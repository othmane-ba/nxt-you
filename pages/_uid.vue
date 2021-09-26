<template>
  <SliceZone type="page" :uid="$route.params.uid" />
</template>

<script>
import Transition from '~/mixins/transition'
import SliceZone from 'vue-slicezone'

export default {
  mixins: [Transition],
  head() {
    return {
      title: this.page.data.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.data.metaDescription,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.data.metaDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.data.socialCards[0].socialCardImage.url,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content:
            this.page.data.socialCards[0].socialCardImage.dimensions.width,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content:
            this.page.data.socialCards[0].socialCardImage.dimensions.height,
        },
      ],
    }
  },
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.uid)
    if (document) {
      return {
        page: document,
        sliceContent: document.data.body,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="postcss" scoped></style>
