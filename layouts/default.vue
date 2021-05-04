<template>
  <div>
    <PageLoader />
    <Pointer />
    <Nuxt />
  </div>
</template>

<style lang="postcss">
section {
  @apply my-40;

  &:first-of-type {
    @apply mt-0;
  }

  /*
  &:last-of-type {
    @apply mb-0;
  }
*/
}
</style>
