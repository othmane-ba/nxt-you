<template>
  <div class="tabset">
    <ul class="flex w-full items-center">
      <li
        v-for="(tab, i) in tabs"
        :key="tab.title"
        class="block flex-1 relative"
      >
        <div
          class="
            flex flex-col
            text-center
            items-center
            space-y-2
            px-4
            py-2
            w-auto
            opacity-25
          "
          :class="{ 'opacity-100': currentIndex === i }"
          @click="select(i)"
          data-pointer="large"
        >
          <div
            class="
              flex
              rounded-full
              w-8
              h-8
              items-center
              justify-center
              bg-gray-900
              text-white
            "
          >
            {{ i + 1 }}
          </div>
          <span class="block text-center">
            {{ tab.title }}
          </span>
          <div
            v-if="i < tabs.length - 1"
            class="
              absolute
              top-4
              left-1/2
              -right-1/2
              transform
              -translate-y-1/2
              -z-10
            "
          >
            <span
              class="block absolute left-8 right-8 h-px bg-white bg-opacity-50"
            >
            </span>
          </div>
        </div>
      </li>
    </ul>

    <div class="relative">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {
    this.select(0, true)
    this.$emit('init', {
      totalTabs: this.tabs.length,
      currentIndex: this.currentIndex,
    })
  },
  methods: {
    next() {
      const nextIndex =
        this.currentIndex <= this.tabs.length
          ? this.currentIndex + 1
          : this.tabs.length
      this.select(nextIndex)
    },
    prev() {
      const prevIndex =
        this.currentIndex >= this.tabs.length ? this.currentIndex - 1 : 0
      this.select(prevIndex)
    },
    select(i, force = false) {
      if (!force && this.tabs[i].disabled) {
        return
      }
      this.currentIndex = i
      this.$emit('select', {
        currentIndex: this.currentIndex,
      })

      this.tabs.forEach((tab, index) => {
        tab.active = index === i
      })
    },
  },
  created() {
    this.tabs = this.$children
  },
  data() {
    return {
      currentIndex: 0,
      tabs: [],
    }
  },
}
</script>

<style scoped lang="postcss">
input {
  @apply border-0 border-b-2 border-gray-300 w-full bg-transparent text-current;
}

input::placeholder {
  @apply text-gray-300;
}

textarea:focus,
input:focus {
  outline: none;
  box-shadow: none;
}
</style>

<style lang="postcss">
.vue-range-slider.slider-component .slider .slider-dot {
  box-shadow: none;
  border-radius: 0;
}
</style>
