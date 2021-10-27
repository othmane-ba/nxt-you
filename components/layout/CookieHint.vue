<template>
  <div>
    <div
      v-if="active"
      class="
        fixed
        right-4
        bottom-4
        w-72
        md:w-96
        bg-blue-dark
        text-white
        p-4
        text-xs
        z-40
      "
    >
      <div>
        <p>
          Wir nutzen Cookies um Dienste bereitzustellen und Traffic zu
          analysieren.
        </p>
      </div>
      <div
        class="
          flex
          items-center
          justify-between
          space-y-2
          md:space-y-0 md:space-x-4
          pt-4
        "
      >
        <NuxtLink to="/privacy" class="link" data-pointer="large">
          Mehr erfahren
        </NuxtLink>

        <TheButton @click="grant()" size="xs" data-pointer="large">
          Verstanden
        </TheButton>
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
