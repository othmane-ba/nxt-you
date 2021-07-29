<template>
  <div class="container mx-auto md:px-36" v-view.once>
    <article>
      <div class="relative max-w-2xl" :class="{ 'text-right ml-auto': rtl }">
        <div
          data-animation-box
          class="absolute left-0 top-0"
          :class="{ 'left-none right-0': rtl }"
        >
          <div
            data-parallax
            data-overflow
            class="
              text-9xl
              font-extrabold
              opacity-50
              bg-clip-text
              text-transparent
              bg-gradient-to-b
              from-blue-light
            "
          >
            {{ numberTwoDigit }}
          </div>
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

<script>
export default {
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
    numberTwoDigit() {
      const numberString = this.number.toString()
      return this.number < 10 ? '0' + numberString : numberString
    },
  },
}
</script>

<style scoped></style>
