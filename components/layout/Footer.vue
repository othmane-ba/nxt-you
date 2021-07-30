<template>
  <footer class="sticky bottom-0 left-0 w-full">
    <div class="container mx-auto lg:px-32 text-white p-4">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p>
            NXT YOU ist die Exklusivagentur für Markenaufbau, Content-Erstellung
            und digitales Marketing
          </p>
        </div>
        <div class="">
          <div class="mb-4 lg:mb-8">
            <div class="text-sm uppercase mb-2 lg:mb-4">Email</div>
            <div class="text-xl">
              <a data-pointer="right" href="mailto:info@nxtyou.de"
                >info@nxtyou.de</a
              >
            </div>
          </div>
          <div class="mb-4 lg:mb-8">
            <div class="text-sm uppercase mb-2 lg:mb-4">Telefon</div>

            <div class="text-xl">
              <a data-pointer="right" href="mailto:info@nxtyou.de"
                >info@nxtyou.de</a
              >
            </div>
          </div>
        </div>
        <div
          class="
            order-first
            lg:order-last
            col-span-2
            lg:col-span-1
            justify-self-center
            lg:justify-self-start
            pb-4
            lg:pb-0
          "
        >
          <div
            class="
              flex
              items-center
              justify-center
              p-4
              bg-gradient-to-tr
              from-blue-dark
              h-28
              w-28
              rounded-full
            "
          >
            <img src="~/assets/images/logo.png" alt="NXT YOU" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto lg:px-32 bg-white text-black px-4 py-2 text-sm"
    >
      <div class="grid grid-cols-3 gap-4">
        <div class="hidden lg:block">
          <h5>NXT YOU GmbH</h5>
        </div>
        <div class="flex col-span-3 lg:col-span-2 space-x-4 lg:space-x-16">
          <NuxtLink to="terms" data-pointer="large">Impressum und AGB</NuxtLink>
          <NuxtLink to="privacy" data-pointer="large"
            >Datenschutzerklärung</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="postcss" scoped></style>
