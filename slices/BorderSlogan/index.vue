<template>
  <section class="border-slogan">
    <div class="container mx-auto px-4 lg:px-52" v-animate>
      <div
        class="relative lg:aspect-h-1 lg:aspect-w-2 border-4 border-blue-dark"
      >
        <div
          class="
            relative
            bg-black
            p-4
            max-w-64
            lg:absolute
            lg:max-w-none
            lg:left-0
            lg:top-2/4
            lg:transform
            lg:-translate-y-1/3
            lg:-translate-x-36
            lg:bottom-auto
            lg:right-auto
            lg:h-auto
            lg:w-3/4
          "
        >
          <div
            class="
              absolute
              top-0
              left-0
              h-full
              w-full
              bg-gradient-to-tr
              from-black
              via-transparent
              pointer-events-none
            "
          ></div>
          <p
            class="text-4xl font-bold leading-tight uppercase"
             v-animate:text
          >
            {{ slice.primary.slogan }}
          </p>
        </div>
        <div
          class="
            relative
            w-72
            ml-auto
            transform
            translate-x-4 translate-y-4
            lg:translate-x-32 lg:translate-y-10
            bg-black
            lg:absolute
            lg:h-full
            lg:max-h-96
            lg:w-auto
            lg:right-0
            lg:bottom-0
            lg:top-auto
            lg:left-auto
          "
        >
          <prismic-image
            :field="item.image"
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            v-simple-parallax="{
              overflow: true,
              scale: 1.6 * (i % 2 === 0 ? 1 : 1.2),
            }"
            :class="{
              'relative w-full h-auto lg:h-full lg:w-auto': i <= 0,
              'absolute top-0 left-0 h-full w-full object-contain z-10': i > 0,
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BorderSlogan',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped></style>
