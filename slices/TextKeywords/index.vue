<template>
  <section class="section">
    <div class="container max-w-6xl mx-auto px-4" v-view.once>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="lg:col-span-2">
          <h2 class="title-lg text-center">
            <span :data-animation-text="slice.primary.title">{{
              slice.primary.title
            }}</span>
          </h2>
        </div>

        <div>
          <div class="delay-500 leading-relaxed" data-animation-box>
            <prismic-rich-text :field="slice.primary['text-left']" />
          </div>
        </div>

        <div>
          <div class="delay-500 leading-relaxed" data-animation-box>
            <prismic-rich-text :field="slice.primary['text-right']" />
          </div>
        </div>

        <div class="lg:col-span-2">
          <p
            class="
              text-sm text-center
              tracking-widest
              uppercase
              leading-4
              font-bold
              delay-700
            "
            data-animation-box
          >
            <span>{{ slice.primary.keywords }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextKeywords',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped></style>
