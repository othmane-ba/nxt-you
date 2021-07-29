<template>
  <div
    class="icon"
    v-html="require('@icon/themify-icons/icons/' + src + '.svg?raw')"
  />
</template>

<script >


export default{
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss">
.icon svg,
.icon path {
  fill: currentColor !important;
}
</style>
