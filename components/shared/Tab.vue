<template>
  <div v-show="active" class="pt-4 pb-8">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
