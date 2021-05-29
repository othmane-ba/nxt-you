<template>
  <div class="container mx-auto md:px-36" v-view.once>
    <article>
      <div class="relative max-w-2xl" :class="{ 'text-right ml-auto': rtl }">
        <div
          data-animation-box
          class="absolute text-9xl font-extrabold opacity-50 bg-clip-text text-transparent bg-gradient-to-b from-blue-light left-0 top-0"
          :class="{ 'left-none right-0': rtl }"
        >
          {{ numberTwoDigit }}
        </div>
        <div class="relative space-y-4 p-4 pt-16 md:px-16">
          <h3 class="text-3xl lg:text-4xl font-bold uppercase">
            <span :data-animation-text="title" data-animation-text-white="">
              {{ title }}</span
            >
          </h3>
          <div data-animation-box class="delay-300">
            <p><slot></slot></p>
          </div>
          <div data-animation-box class="delay-500">
            <button
              class="w-full py-2 px-4 rounded border max-w-xs"
              data-pointer="large"
            >
              {{ actionText }}
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 1,
    },
    actionText: {
      type: String,
      default: '',
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    numberTwoDigit(): string {
      const numberString = this.number.toString()
      return this.number < 10 ? '0' + numberString : numberString
    },
  },
})
</script>

<style scoped></style>
