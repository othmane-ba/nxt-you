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
  mounted() {},
})
</script>
<style lang="postcss">
::selection {
  @apply bg-transparent text-blue-light;
}

::-moz-selection {
  @apply bg-transparent text-blue-light;
}

.section {
  @apply py-32;
}
.section-top {
  @apply pt-0;
}
.section-bottom {
  @apply pb-0;
}
</style>

<style lang="postcss">
[data-animation-box],
[data-animation-text] {
  animation-fill-mode: both;
}

[data-animation-box] {
  @apply block opacity-0 transform translate-y-4 transition-all ease-out-expo duration-1000;
}

[data-animation-text] {
  @apply whitespace-nowrap text-transparent relative inline-block;
}

[data-animation-text]:before,
[data-animation-text]:after {
  @apply absolute top-1/2 left-0 text-blue w-0 transform -translate-y-1/2 overflow-hidden whitespace-nowrap transition-all ease-out-expo duration-1000;
  content: attr(data-animation-text);
}

[data-animation-text]:after {
  @apply text-blue bg-transparent delay-300;
}

[data-animation-text][data-animation-text-white]:after,
[data-animation-text][data-animation-text-white]:before {
  @apply text-white;
}

.view-in [data-animation-text]:before,
.view-in [data-animation-text]:after,
.view-in[data-animation-text]:before,
.view-in[data-animation-text]:after {
  @apply w-full;
}

.view-in [data-animation-box],
.view-in[data-animation-box] {
  @apply opacity-100 translate-y-0;
}
</style>

<style>
@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Light.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Bold.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Regular.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Bold.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Light.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hero';
  src: url('~/assets/fonts/Hero-Regular.woff2') format('woff2'),
    url('~/assets/fonts/Hero-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>
