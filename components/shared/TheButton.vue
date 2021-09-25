<template>
  <component
    @click="(e) => $emit('click', e)"
    :is="tag"
    :type="tag === 'button' && type"
    :disabled="disabled"
    class="
      relative
      flex
      items-center
      justify-center
      text-center
      outline-none
      appearance-none
      space-x-4
      disabled:opacity-50
    "
    :class="classes"
    data-pointer="large"
  >
    <slot></slot>
  </component>
</template>

<script>
const Widths = {
  xs: 36,
  sm: 44,
  md: 52,
}

const Heights = {
  xs: 9,
  sm: 10,
  md: 12,
}

export default {
  computed: {
    tag() {
      return this.href ? 'a' : 'button'
    },
    classes() {
      if (this.fgType === 'button') {
        return [
          'w-' + Widths[this.size],
          'h-' + Heights[this.size],
          'bg-gray-900 border-2 border-gray-900 rounded-3xl text-white text-xs uppercase font-bold tracking-widest overflow-hidden transition ease-in-out duration-500 hover:bg-transparent',
        ]
      } else if (this.fgType === 'link') {
        return ['link']
      }
    },
  },
  data() {
    return {}
  },
  props: {
    href: { type: String, default: null },
    size: { type: String, default: 'md' },
    disabled: { type: Boolean, default: false },
    fgType: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="postcss"></style>
