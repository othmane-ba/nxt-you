<template>
  <div v-html="require('@icon/themify-icons/icons/' + src + '.svg?raw')" />
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

<style></style>
