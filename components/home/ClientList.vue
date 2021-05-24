<template>
  <div class="container mx-auto max-w-6xl px-4 client-list">
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="(client, i) in clients" :key="i">
        <a
          href="#"
          class="flex align-middle justify-center p-4"
          data-pointer="large"
        >
          <div class="relative w-full aspect-h-2 aspect-w-3">
            <img
              :src="require('~/assets/images/clients/' + client.src[0])"
              :alt="client.name"
              class="client-list__item__image"
            />
            <img
              :src="require('~/assets/images/clients/' + client.src[1])"
              :alt="client.name"
              class="client-list__item__image client-list__item__image--hover"
            />
          </div>
        </a>
      </li>
      <li>
        <a
          v-view.once
          href="#"
          class="relative w-full h-full flex items-center justify-center overflow-hidden"
          data-pointer="large"
        >
          <div class="w-full aspect-h-2 aspect-w-3">
            <div
              class="text-xs lg:text-base text-center uppercase font-semibold flex flex-col items-center justify-center"
            >
              <div data-animation-text="This Spot">This Spot</div>
              <div class="delay-300" data-animation-text="Awaits">Awaits</div>
              <div class="delay-500" data-animation-text="You">You</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class Client {
  constructor(private _src: string, public name: string) {}

  get src() {
    return [this._src + '.png', this._src + '-active.png']
  }
}

export default Vue.extend({
  data() {
    return {
      clients: Array(11).fill(new Client('client-1', 'Client Name')),
    }
  },
})
</script>

<style scoped lang="postcss">
.client-list__item__image {
  @apply absolute bottom-0 left-0 w-full h-full object-contain opacity-100 transition-opacity duration-500 ease-in-out;

  &--hover {
    @apply opacity-0;
  }
}

.client-list li {
  @apply border-r border-b border-gray-400;

  &:nth-child(2n) {
    @apply border-r-0 md:border-r;
  }

  &:nth-last-child(-n + 2) {
    @apply border-b-0 md:border-b;
  }

  &:nth-child(3n) {
    @apply md:border-r-0 lg:border-r;
  }

  &:nth-last-child(-n + 3) {
    @apply md:border-b-0 lg:border-b;
  }

  &:nth-child(4n) {
    @apply lg:border-r-0;
  }

  &:nth-last-child(-n + 4) {
    @apply lg:border-b-0;
  }

  a:hover .client-list__item__image {
    @apply opacity-0;

    &.client-list__item__image--hover {
      @apply opacity-100;
    }
  }

  &:last-child {
    position: relative;

    &:before,
    &:after {
      content: '';
      width: 1px;
      height: calc(100% - 40px);
      background: blue;
      position: absolute;
      left: 20px;
      top: 20px;
      transform: scaleY(0.4) scaleX(1);
      transform-origin: top;
      transition: all 0.6s ease-in-out;
    }

    &:after {
      width: calc(100% - 40px);
      height: 1px;
      transform: scaleY(1) scaleX(0.4);
      transform-origin: left;
    }

    a {
      /*
      line-height: $line-height-base;
      font-weight: $font-weight-bold;
*/

      &:before,
      &:after {
        content: '';
        width: 1px;
        height: calc(100% - 40px);
        background: blue;
        position: absolute;
        right: 20px;
        bottom: 20px;
        transform: scaleY(0.4) scaleX(1);
        transform-origin: bottom;
        transition: all 0.6s ease-in-out !important;
      }

      &:after {
        width: calc(100% - 40px);
        height: 1px;
        transform: scaleY(1) scaleX(0.4);
        transform-origin: right;
      }
    }

    &:hover {
      &:before,
      &:after,
      a:before,
      a:after {
        transform: scaleX(1) scaleY(1);
      }
    }
  }
}
</style>
