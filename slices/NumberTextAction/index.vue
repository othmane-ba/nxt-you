<template>
  <section class="number-text-action">
    <div class="container mx-auto md:px-36">
      <article>
        <div
          class="relative max-w-2xl"
          :class="{ 'text-right ml-auto': slice.primary.rtl }"
        >
          <div
            class="absolute left-0 top-0"
            :class="{ 'left-none right-0': slice.primary.rtl }"
          >
            <div
              v-simple-parallax="{ overflow: true }"
              class="
                text-10xl
                leading-none
                font-extrabold
                opacity-50
                bg-clip-text
                text-transparent
                bg-gradient-to-b
                from-white
                to-blue-dark
                via-blue
                tracking-tighter
              "
            >
              {{ numberTwoDigit }}
            </div>
          </div>
          <div
            class="relative space-y-4 p-4 pt-16 md:px-16"
            v-view.once="$animate.children"
          >
            <h3 class="title" v-view.once="$animate.text">
              {{ slice.primary.title }}
            </h3>
            <div>
              <prismic-rich-text :field="slice.primary.description" />
            </div>
            <div>
              <button
                class="w-full py-2 px-4 rounded border max-w-xs"
                data-pointer="large"
              >
                {{ slice.primary.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumberTextAction',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    numberTwoDigit() {
      const numberString = this.slice.primary.number.toString()
      return this.slice.primary.number < 10 ? '0' + numberString : numberString
    },
  },
}
</script>

<style scoped></style>
