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

<style lang="postcss">
/* 9.1. Loading animations */
[data-animation-box],
[data-animation-text] {
  animation-fill-mode: both;
}

[data-animation-box] {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
}

[data-animation-text]:before,
[data-animation-text]:after,
[data-animation-text] {
  opacity: 1;
}

[data-animation-text] {
  white-space: nowrap;
  color: transparent;
  position: relative;
  display: inline-block;
}

[data-animation-text]:before,
[data-animation-text]:after {
  content: attr(data-animation-text);
  position: absolute;
  top: 50%;
  color: white;
  transform: translateY(-50%);
  left: 0;
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}

[data-animation-text]:after {
  color: blue;
  background: transparent;
  transition-delay: 0.3s;
}

.view-in {
  [data-animation-text]:before,
  [data-animation-text]:after {
    width: 100%;
  }

  [data-animation-box] {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
