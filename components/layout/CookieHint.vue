<template>
  <div class="fixed bottom-0 left-0 w-full z-40">
    <div
      v-if="active"
      class="
        container
        bg-white
        text-black
        p-4
        my-4
        mx-auto
        flex
        items-center
        justify-between
      "
    >
      <p>
        Diese Seite verwendet Cookies von Google um Dienste bereitzustellen und
        Traffic zu analysieren.
      </p>
      <div class="flex ml-auto space-x-4">
        <button
          class="
            px-4
            h-10
            inline-flex
            items-center
            justify-center
            rounded
            border
          "
          data-pointer="large"
        >
          Mehr erfahren
        </button>

        <button
          @click="active = false"
          class="
            w-10
            h-10
            inline-flex
            items-center
            justify-center
            rounded-full
            border-blue
            text-blue
          "
          data-pointer="large"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.$nuxt.$on('page-loaded', () => {
      this.active = true
    })
  },
}
</script>

<style scoped></style>
