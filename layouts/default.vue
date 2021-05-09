<template>
  <div>
    <PageLoader />
    <Pointer />
    <Nuxt />
  </div>
</template>

<style lang="postcss">
section {
  @apply py-32;

  &:first-of-type {
    @apply pt-0;
  }

  /*
  &:last-of-type {
    @apply mb-0;
  }
*/
}
</style>
