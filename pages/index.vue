<template>
  <div>
    <Sphere></Sphere>
    <div>
      <SliceZone type="homepage" queryType="single" />
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Transition from '~/mixins/transition.js'

export default {
  components: { SliceZone },
  mixins: [Transition],
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
