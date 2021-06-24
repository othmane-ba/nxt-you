<template>
  <transition
    enter-active-class="transition-size duration-1000 delay-500 ease-out-expo"
    enter-class="w-0 h-0"
    mode="out-in"
  >
    <div
      v-show="active"
      class="pointer"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      :class="{
        'pointer--play': play,
        'pointer--right': right,
        'pointer--large': large,
      }"
    >
      <Icon class="pointer__right" src="arrow-right"></Icon>
      <Icon class="pointer__play" src="control-play"></Icon>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

class PointerEvent {
  constructor(
    public selector: string,
    public onMouseEnter: any,
    public onMouseLeave: any
  ) {}

  init(): void {
    document.querySelectorAll(this.selector).forEach((elem) => {
      elem.addEventListener('mouseenter', () => {
        this.onMouseEnter()
      })
      elem.addEventListener('mouseleave', () => {
        this.onMouseLeave()
      })
    })
  }
}

export default Vue.extend({
  data: () => {
    return {
      active: false,
      mouseX: 0,
      mouseY: 0,
      large: false,
      play: false,
      right: false,
      small: false,
    }
  },
  mounted() {
    const events = [
      new PointerEvent(
        "[data-pointer='large']",
        () => {
          this.large = true
        },
        () => {
          this.large = false
        }
      ),
      new PointerEvent(
        "[data-pointer='play']",
        () => {
          this.play = true
        },
        () => {
          this.play = false
        }
      ),
      new PointerEvent(
        "[data-pointer='right']",
        () => {
          this.right = true
        },
        () => {
          this.right = false
        }
      ),
      new PointerEvent(
        "[data-pointer='small']",
        () => {
          this.small = true
        },
        () => {
          this.small = false
        }
      ),
    ]

    this.$nuxt.$on('page-loaded', () => {
      if ((this as any).$device.isDesktop) {
        this.active = true
        document.addEventListener('mousemove', (event) => {
          this.mouseX = event.clientX
          this.mouseY = event.clientY

          events.forEach((e) => e.init())
        })
      }
    })
  },
})
</script>

<style lang="postcss">
* {
  cursor: none !important;
}
</style>

<style scoped lang="postcss">
.pointer {
  @apply box-border w-2.5 h-2.5 fixed top-2/4 -left-2/4 transform -translate-x-2/4 -translate-y-2/4 rounded-full overflow-hidden bg-blue-light pointer-events-none z-50 transition-size duration-500 ease-out-expo;
}

.pointer--large {
  @apply w-16 h-16 bg-blue-light bg-opacity-25 border-2 border-blue-light shadow-highlight;
}

.pointer--small {
  @apply w-1 h-1 bg-blue-light bg-opacity-100 border-2 border-blue-light shadow-highlight;
}

.pointer--right,
.pointer--play {
  @apply w-16 h-16 bg-black bg-opacity-50 border-2 border-blue-light shadow-highlight;
}

.pointer .pointer__right,
.pointer .pointer__play {
  @apply text-white text-lg absolute top-2/4 left-2/4 transform -translate-x-full -translate-y-2/4 opacity-0 transition-all duration-500 ease-out-expo;
}

.pointer--right .pointer__right,
.pointer--play .pointer__play {
  @apply -translate-x-2/4 opacity-100 delay-200;
}
</style>
