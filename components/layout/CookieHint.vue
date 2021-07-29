<template>
  <div class="fixed bottom-0 left-0 w-full z-40 px-4">
    <div
      v-if="active"
      class="
        container
        bg-white
        text-black
        py-2
        px-4
        mx-auto
        flex
        items-center
        justify-between
      "
    >
      <div>
        <p>
          Diese Seite verwendet Cookies um Dienste bereitzustellen und Traffic
          zu analysieren.
        </p>
      </div>
      <div class="flex space-x-4">
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
          @click="grant()"
          class="
            px-4
            h-10
            inline-flex
            items-center
            justify-center
            rounded
            border border-blue
            text-blue
          "
          data-pointer="large"
        >
          Verstanden
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  data() {
    return {
      active: true,
    }
  },
  mounted() {
    const hasConsent = this.$cookies.get('ny_consent')
    this.active = !hasConsent
  },
  methods: {
    async grant() {
      await bootstrap()
      this.$gtag.pageview({
        page_path: this.$route.path,
      })
      this.$cookies.set('ny_consent', true, {
        maxAge: 2147483647,
      })
      this.active = false
    },
  },
}
</script>

<style scoped></style>
