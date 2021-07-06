<template>
  <div class="container mx-auto px-4 lg:px-32">
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <HoverImage title="Cesis" src="cesis" />
      <HoverImage title="Juice" src="juice" />
      <div
        v-view.once
        class="
          flex flex-col
          justify-center
          items-center
          lg:text-right
          order-0
          lg:order-none
          col-span-2
          lg:col-span-1
        "
        data-animation-box
      >
        <h3 class="font-bold text-2xl uppercase mb-2">
          Marketingplan, Slogan, Identität
        </h3>
        <p class="mt-2">
          Marken sind das wertvollste immatrielle Gut, das ein Unternehmen
          besitzen kann. Durch Branding hebt sich Ihr Unternehmen nicht nur von
          der Konkurrenz ab, sondern es hebt sich auch in den Köpfen der
          Verbraucher über Zeit und Entfernung hinweg hinab.
        </p>
      </div>
      <div
        class="
          flex flex-col
          justify-center
          items-center
          text-left
          order-4
          lg:order-none
          col-span-2
          lg:col-span-1
        "
        v-view.once
        data-animation-box
      >
        <h3 class="font-bold text-2xl uppercase mb-2">
          Produkte entstehen in einer Fabrik
        </h3>
        <p class="mt-2">
          NXT YOU ist eine Exklusivagentur, die sich auf Markenaufbau,
          Content-Erstellung und digitales Marketing spezialisiert hat. Unsere
          Projekte sind immer auf die Bedürfnisse unserer Kunden zugeschnitten.
          NXT YOU hat bereits zahlreichen Unternhmen bei ihren Brand-Strategien,
          Produktentwicklungen, Social-Media-Kampagnen und vielem mehr geholfen.
        </p>
      </div>
      <HoverImage title="Statio" src="statio" />
      <HoverImage title="Neohaus" src="neohouse" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped></style>
