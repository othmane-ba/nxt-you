<template>
  <div
    class="icon"
    v-html="require('@icon/themify-icons/icons/' + src + '.svg?raw')"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="postcss">
.icon svg,
.icon path {
  fill: currentColor !important;
}
</style>
