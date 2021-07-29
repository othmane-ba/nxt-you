<template>
  <transition
    enter-active-class="transition-opacity ease-in-out duration-1000"
    enter-class="opacity-0"
    leave-active-class="transition-opacity ease-in-out duration-1000"
    leave-to-class="opacity-0"
  >
    <div v-if="loaderVisible" class="fixed inset-0 z-50 bg-black">
      <div
        class="absolute top-2/3 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
      >
        <div class="relative w-20 h-1 bg-gray-900 overflow-hidden mx-auto">
          <div
            class="absolute left-0 top-0 h-full w-1/4 bg-blue-600 animate-slide"
          ></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script >


export default{
  data() {
    return {
      loaderVisible: true,
    }
  },
  mounted() {
    this.$nuxt.$on('page-loaded', () => {
      this.loaderVisible = false
    })
  },
}
</script>

<style scoped></style>
