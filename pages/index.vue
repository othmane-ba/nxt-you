<template>
  <div>
    <Sphere></Sphere>
    <div>
      <SliceZone type="homepage" queryType="single" />
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Transition from '~/mixins/transition.js'

export default {
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
  components: { SliceZone },
  mixins: [Transition],
  async asyncData({ $prismic, params, error }) {
    return { page: await $prismic.api.getSingle('homepage') }
  },
}
</script>

<style></style>
