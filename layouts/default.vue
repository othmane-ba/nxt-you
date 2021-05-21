<template>
  <div>
    <PageLoader />
    <Pointer />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    setTimeout(() => {
      document.body.classList.remove('fixed', 'overflow-y-scroll')
      this.$nuxt.$emit('page-loaded')
    }, 1000)
  },
})
</script>
<style lang="postcss">
section {
  @apply py-32;

  &:first-of-type {
    @apply pt-0;
  }
}
</style>
