<template>
  <div class="fixed bottom-0 left-0 w-full z-40 lg:px-4">
    <div
      v-if="active"
      class="
        container
        bg-white
        text-black
        lg:py-2
        p-4
        mx-auto
        flex flex-col
        lg:flex-row lg:items-center
        justify-between
      "
    >
      <div>
        <p>
          Diese Seite verwendet Cookies um Dienste bereitzustellen und Traffic
          zu analysieren.
        </p>
      </div>
      <div class="flex space-x-4 pt-4 lg:pt-0">
        <NuxtLink
          to="/privacy"
          class="py-2 px-4 rounded border"
          data-pointer="large"
        >
          Mehr erfahren
        </NuxtLink>

        <button
          @click="grant()"
          class="py-2 px-4 rounded border border-blue text-blue"
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
