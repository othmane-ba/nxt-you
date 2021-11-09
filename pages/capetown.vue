<template>
  <div data-pointer="initial">
    <embed
      src="/NXTYOU_Capetown.pdf"
      class="relative top-0 left-0 w-screen h-screen z-60"
    />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
}
</script>

<style></style>
