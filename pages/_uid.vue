<template>
  <SliceZone type="page" :uid="$route.params.uid" />
</template>

<script>
import Transition from '~/mixins/transition'
import SliceZone from 'vue-slicezone'

export default {
  mixins: [Transition],
  components: {
    SliceZone,
  },
}
</script>

<style lang="postcss" scoped></style>
