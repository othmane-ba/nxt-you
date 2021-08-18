<template>
  <section class="intersection m-0">
    <div class="relative h-64 w-full overflow-hidden" v-view.once>
      <div
        class="
          absolute
          w-full
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <prismic-image class="w-full" :field="slice.primary.image" />
      </div>

      <div
        class="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <div data-animation-box>
          <a
            class="
              flex
              w-20
              h-20
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
            "
            data-pointer="right"
          >
            <span class="block relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right icon str-width-lg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span
              class="
                animate-ping-slow
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-white
                opacity-75
              "
            ></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intersection',
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

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
