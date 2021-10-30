<template>
  <header class="top-0 w-full fixed z-50 pointer-events-none">
    <div class="container mx-auto px-4 lg:px-16">
      <ul class="relative h-32">
        <li class="absolute left-0 bottom-1/2 translate-y-1/2">
          <NuxtLink class="pointer-events-auto" data-pointer="large" to="/">
            <img
              class="w-16"
              data-not-lazy
              alt="NXTYOU Brand"
              src="~/assets/images/logo.png"
            />
          </NuxtLink>
        </li>
        <li class="absolute right-0 bottom-1/2 translate-y-1/2">
          <button
            class="relative w-12 h-7 pointer-events-auto"
            :class="{ 'menu-active': menuActive }"
            data-pointer="large"
            @click="$nuxt.$emit('toggle-menu', { active: !menuActive })"
          >
            <span></span>
            <span></span>
            <span class="sr-only">Toggle Menu</span>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    }
  },
  mounted() {
    this.$nuxt.$on('toggle-menu', ({ active }) => {
      this.menuActive = active
    })
  },
  methods: {},
}
</script>

<style lang="postcss" scoped>
button span {
  @apply absolute block h-px left-2 right-2 bg-white transition-all ease-in-out duration-500;
}

button span:nth-child(1) {
  @apply top-2;
}

button span:nth-child(2) {
  @apply bottom-2;
}

button.menu-active span {
  @apply transform;
}
button.menu-active span:nth-child(1) {
  @apply rotate-45 top-1/2 -translate-y-1/2;
}

button.menu-active span:nth-child(2) {
  @apply -rotate-45 bottom-1/2 translate-y-1/2;
}
</style>
