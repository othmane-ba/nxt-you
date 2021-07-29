<template>
  <div class="container mx-auto max-w-6xl px-4 client-list">
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="(client, i) in clients" :key="i">
        <a
          :href="client.href"
          target="_blank"
          rel="noopener noreferrer"
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
              :alt="client.name + ' Blau'"
              class="client-list__item__image client-list__item__image--hover"
            />
          </div>
        </a>
      </li>
      <li>
        <a
          v-view.once
          href="#"
          class="
            relative
            w-full
            h-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          data-pointer="large"
        >
          <div class="w-full aspect-h-2 aspect-w-3">
            <div
              class="
                text-xs
                lg:text-base
                text-center
                uppercase
                font-bold
                flex flex-col
                items-center
                justify-center
              "
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

<script>
class Client {
  constructor(_src, name, href) {
    this._src = _src
    this.name = name
    this.href = href
  }

  get src() {
    return [this._src + '.png', this._src + '-active.png']
  }
}

const CLIENTS = [
  new Client('berger', 'Roland Berger', 'https://www.rolandberger.com'),
  new Client('bridgestone', 'Bridgestone', 'https://www.bridgestone.com'),
  new Client('jvm', 'Jung von Matt', 'https://www.jvm.com/'),
  new Client('jeunesse', 'Jeunesse', 'https://www.jeunesseglobal.com'),
  new Client('christies', 'Christies', 'https://www.christies.com'),
  new Client('adidas', 'Adidas', 'https://www.adidas.com'),
  new Client('cito', 'Cito', 'https://www.sixt.com/'),
  new Client('sixt', 'Sixt', 'https://www.sixt.com/'),
  new Client('olympics', 'Olympic Games', 'https://olympics.com/'),
  new Client(
    'fliesenfabrik',
    'Fliesenfabrik',
    'https://www.fliesenfabrik-hamburg.de/'
  ),
  new Client('chelsea', 'Chelsea', 'https://www.chelseafc.com/'),
]

export default {
  data() {
    return {
      clients: CLIENTS,
    }
  },
}
</script>

<style scoped lang="postcss">
.client-list__item__image {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-contain opacity-100 transition-opacity duration-500 ease-in-out;
}

.client-list__item__image--hover {
  @apply opacity-0;
}
.client-list li {
  @apply border-r border-b border-gray-400;
}
.client-list li:nth-child(2n) {
  @apply border-r-0 md:border-r;
}

.client-list li:nth-last-child(-n + 2) {
  @apply border-b-0 md:border-b;
}

.client-list li:nth-child(3n) {
  @apply md:border-r-0 lg:border-r;
}

.client-list li:nth-last-child(-n + 3) {
  @apply md:border-b-0 lg:border-b;
}

.client-list li:nth-child(4n) {
  @apply lg:border-r-0;
}

.client-list li:nth-last-child(-n + 4) {
  @apply lg:border-b-0;
}

.client-list li:last-child {
  @apply relative;
}
.client-list li:last-child:before,
.client-list li:last-child:after {
  @apply absolute bg-blue w-0.5;
  content: '';
  height: calc(100% - 40px);
  left: 20px;
  top: 20px;
  transform: scaleY(0.4) scaleX(1);
  transform-origin: top;
  transition: all 0.6s ease-in-out;
}
.client-list li:last-child:after {
  @apply h-0.5;
  width: calc(100% - 40px);
  transform: scaleY(1) scaleX(0.4);
  transform-origin: left;
}

.client-list li:last-child a:before,
.client-list li:last-child a:after {
  @apply absolute bg-blue w-0.5;
  content: '';
  height: calc(100% - 40px);
  right: 20px;
  bottom: 20px;
  transform: scaleY(0.4) scaleX(1);
  transform-origin: bottom;
  transition: all 0.6s ease-in-out !important;
}

.client-list li:last-child a:after {
  @apply h-0.5;
  width: calc(100% - 40px);
  transform: scaleY(1) scaleX(0.4);
  transform-origin: right;
}

.client-list li:last-child:hover:before,
.client-list li:last-child:hover:after,
.client-list li:last-child:hover a:before,
.client-list li:last-child:hover a:after {
  transform: scaleX(1) scaleY(1);
}

.client-list li a:hover .client-list__item__image {
  @apply opacity-0;
}

.client-list
  li
  a:hover
  .client-list__item__image.client-list__item__image--hover {
  @apply opacity-100;
}
</style>
