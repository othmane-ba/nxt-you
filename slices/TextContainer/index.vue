<template>
  <section class="text-container" :id="slice.primary.slug">
    <div class="container mx-auto px-4 lg:px-32">
      <prismic-rich-text :field="slice.primary.text" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextContainer',
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
.text-container {
  @apply w-full overflow-hidden;
}

.text-container h2 {
  @apply my-4;
}

.text-container h3 {
  @apply my-2;
}
</style>
