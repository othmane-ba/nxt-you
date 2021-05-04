<template>
  <div
    class="box-border w-2.5 h-2.5 fixed top-4/2 -left-24 transform -translate-x-4/2 -translate-y-4/2 rounded-md overflow-hidden bg-blue-600 pointer-events-none z-50"
    :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
  >
    <i class="ti-arrow-right"></i>
    <i class="ti-search"></i>
    <i class="ti-link"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    document.addEventListener('mousemove', (event) => {
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    })
  },
})
</script>

<style>
* {
  cursor: none;
}
</style>
