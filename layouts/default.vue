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

section {
  @apply py-32;

  &:first-of-type {
    @apply pt-0;
  }
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

.view-in {
  [data-animation-text]:before,
  [data-animation-text]:after,
  &[data-animation-text]:before,
  &[data-animation-text]:after {
    @apply w-full;
  }

  [data-animation-box],
  &[data-animation-box] {
    @apply opacity-100 translate-y-0;
  }
}
</style>
<style lang="postcss">
.is-virtual-scroll {
  overflow: hidden;
}

.is-native-scroll.y-scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}

.is-native-scroll.x-scroll {
  overflow-y: hidden;
  overflow-x: scroll;
}

.vs-section {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: auto;
  will-change: transform;
}

.vs-scrollbar {
  display: block;
  position: absolute;
  transition: transform 0.6s;
}

.vs-scrollbar.vs-vertical {
  top: 0;
  right: -5px;
  bottom: 0;
  width: 15px;
  height: 100%;
  transform: translate3d(5px, 0, 0);
}

.vs-scrollbar.vs-horizontal {
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  height: 15px;
  transform: translate3d(0, 5px, 0);
}

.is-dragging .vs-scrollbar.vs-horizontal,
.is-dragging .vs-scrollbar.vs-vertical,
.vs-scrollbar.vs-horizontal:hover,
.vs-scrollbar.vs-vertical:hover {
  transform: none;
}

.vs-scrollbar .vs-scrolldrag {
  width: 100%;
  height: auto;
  background: #ccc;
  cursor: pointer;
}

.vs-scroll-view {
  position: relative;
  width: 1px;
}
</style>
