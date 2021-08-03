<template>
  <footer class="w-full">
    <!--
    <div class="container mx-auto p-4 lg:py-8 lg:px-32 text-white bg-black">
      <div
        class="
          grid grid-cols-2
          lg:grid-cols-3
          gap-4
          lg:divide-x
          divide-gray-400
        "
      >
        <div class="lg:p-8 lg:pl-0">
          <p>
            NXT YOU ist die Exklusivagentur für Markenaufbau, Content-Erstellung
            und digitales Marketing
          </p>
        </div>
        <div class="lg:p-8 lg:pr-0">
          <div class="mb-16">
            <div class="text-sm uppercase mb-4">Email</div>
            <div class="text-xl">
              <a data-pointer="right" href="mailto:info@nxtyou.de"
                >info@nxtyou.de</a
              >
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm uppercase mb-4">Telefon</div>

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
            p-8
          "
        >
          <img src="~/assets/images/logo.png" alt="NXT YOU" class="w-32" />
        </div>
      </div>
    </div>
-->

    <div
      class="container mx-auto bg-white text-black px-4 lg:px-32 py-2 text-sm"
    >
      <div class="grid grid-cols-3 gap-4">
        <div class="hidden lg:block">
          <h5>&copy; NXT YOU GmbH</h5>
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
