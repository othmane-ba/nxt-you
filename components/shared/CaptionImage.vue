<template>
  <article
    class="image-caption relative w-full"
    :class="{
      'lg:text-right pl-4 lg:pl-32': rtl,
      'lg:text-left pl-4 lg:pl-0 lg:pr-32': !rtl,
    }"
    v-view.once
    data-animation-box
  >
    <img
      :alt="alt"
      data-parallax
      :data-scale="parallaxScale"
      :data-delay="parallaxDelay"
      class="w-full h-auto"
      :src="require('~/assets/images/' + src)"
    />
    <div
      class="absolute inline-block bottom-0 pb-8 max-w-56 overflow-hidden"
      :class="{ 'left-0': rtl, 'left-0 lg:left-auto lg:right-0': !rtl }"
    >
      <span
        class="text-white font-bold text-4xl uppercase"
        data-parallax
        data-overflow
        data-orientation="down"
      >
        <slot></slot>
      </span>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    parallaxScale: {
      type: Number,
      default: 1.2,
    },
    parallaxDelay: {
      type: Number,
      default: 1,
    },
  },
})
</script>

<style scoped></style>
