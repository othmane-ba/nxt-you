<template>
  <component
    :is="tag"
    class="
      relative
      bg-gray-900
      border-2 border-gray-900
      rounded-3xl
      text-white text-xs
      uppercase
      font-bold
      tracking-widest
      w-60
      h-12
      overflow-hidden
      flex
      items-center
      justify-center
      text-center
      transition-all
      ease-in-out
      duration-500
      outline-none
      appearance-none
      hover:bg-transparent
      space-x-4
    "
    data-pointer="large"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  computed: {
    tag() {
      return this.href ? 'a' : 'button'
    },
  },
  data() {
    return {}
  },
  props: {
    href: { type: String, default: null },
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="postcss"></style>
