<template>
  <div>
    <div
      v-show="active"
      class="pointer"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      :class="{
        'pointer--small': small,
        'pointer--play': play,
        'pointer--right': right,
        'pointer--large': large,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="pointer__right h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
      <svg
        class="pointer__play"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
      >
        <path
          d="M3 2.692v11.618l11.618-5.837-11.618-5.781zM4 4.308l8.382 4.17-8.382 4.211v-8.381z"
          fill="currentColor"
        />
      </svg>
    </div>
    <slot></slot>
  </div>
</template>

<script>
class PointerEvent {
  constructor(selector, onMouseEnter, onMouseLeave) {
    this.selector = selector
    this.onMouseEnter = onMouseEnter
    this.onMouseLeave = onMouseLeave
  }

  init() {
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

export default {
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
        "[data-pointer='large'], .noUi-handle, .link",
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

    if (
      this.$device.isDesktop &&
      !document.querySelectorAll('[data-pointer="initial"]').length > 0
    ) {
      this.active = true
      document.addEventListener('mousemove', (event) => {
        this.mouseX = event.clientX
        this.mouseY = event.clientY

        events.forEach((e) => e.init())
      })
    } else {
      this.active = false
    }
  },
}
</script>

<style lang="postcss">
* {
  cursor: none !important;
}
</style>

<style scoped lang="postcss">
.pointer {
  @apply box-border w-2.5 h-2.5 fixed top-2/4 -left-2/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-blue-light pointer-events-none z-70 transition-size duration-500 ease-out-expo;
}

[data-pointer='initial'] .pointer {
  @apply hidden;
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
