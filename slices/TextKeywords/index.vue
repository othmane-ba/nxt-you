<template>
  <section class="text-keywords-section">
    <div class="container max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" v-animate:children>
        <div class="lg:col-span-2">
          <h2
            class="title-lg text-center text-blue block w-full max-w-md mx-auto"
            v-animate:text
          >
            {{ slice.primary.title }}
          </h2>
        </div>

        <div>
          <div class="leading-relaxed">
            <prismic-rich-text :field="slice.primary['text-left']" />
          </div>
        </div>

        <div>
          <div class="leading-relaxed">
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
            "
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

<style lang="postcss">
.text-keywords-section h2 .word:last-of-type {
  counter-reset: text-bg;
}

.text-keywords-section h2 .word:last-of-type .char:nth-child(1) {
  @apply text-yellow-800;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(2) {
  @apply text-yellow-700;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(3) {
  @apply text-yellow-600;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(4) {
  @apply text-yellow-500;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(5) {
  @apply text-red-600;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(6) {
  @apply text-red-700;
}
.text-keywords-section h2 .word:last-of-type .char:nth-child(7) {
  @apply text-red-800;
}
</style>
