<template>
  <div>
    <div
      data-menu-light
      class="fixed top-0 left-0 h-screen w-full bg-gray-900 z-30"
    ></div>
    <div
      data-menu-dark
      class="fixed top-0 left-0 h-screen w-full bg-black z-40 overflow-hidden"
    >
      <div class="relative container mx-auto px-4 lg:px-16">
        <nav class="relative pt-32 h-screen flex flex-col space-y-4">
          <div class="flex lg:grid lg:grid-cols-3 lg:gap-8 flex-1">
            <div class="flex-shrink lg:col-span-1 lg:flex-1 lg:p-4">
              <div class="lg:relative block w-full lg:h-full">
                <img
                  v-for="(publicId, i) in images"
                  :src="
                    $cloudinary.image.url(publicId, {
                      crop: 'scale',
                      width: 450,
                    })
                  "
                  :alt="'Navmenu Phone' + publicId"
                  :key="`nav-img-${i}`"
                  class="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <div
              class="
                col-span-full
                lg:col-span-2
                flex-1 flex flex-col
                order-first
                lg:order-last
              "
            >
              <div class="flex-1 overflow-y-auto">
                <ul class="text-4xl tracking-wider uppercase nav-list">
                  <li>
                    <NuxtLink data-pointer="right" to="/">Startseite</NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="grid lg:grid-cols-2 gap-8">
                <div class="">
                  <ul class="">
                    <li>
                      <NuxtLink class="link" to="/terms"
                        >Impressum und AGB</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink class="link" to="/privacy"
                        >Datenschutzerklärung</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <div>
                  <button
                    class="
                      px-4
                      py-2
                      border
                      uppercase
                      text-sm
                      font-bold
                      tracking-widest
                    "
                    data-pointer="large"
                  >
                    Kontakt aufnehmen
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="flex space-x-4 p-4 border-t w-full">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                >
                  <path
                    d="M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z"
                    fill="currentColor"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                >
                  <path
                    d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
                    fill="currentColor"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      images: [
        'nxt-you/home-brand-02_gbvxfq',
        'nxt-you/home-brand-01_xrdamj',
        'nxt-you/home-brand-03_ykfx4d',
        'nxt-you/home-brand-04_drxkwz',
        'nxt-you/home-brand-05_iguadj',
      ],
    }
  },
  mounted() {
    this.$nuxt.$on('toggle-menu', ({ active, ease = true }) => {
      active ? this.hide(ease) : this.show(ease)
      this.active = active
    })
  },
  methods: {
    show(ease = true) {
      this.$gsap
        .timeline({
          defaults: { duration: ease ? 1.4 : 0, ease: 'Power3.easeInOut' },
        })
        .to('[data-menu-dark]', { height: 0 })
        .to('[data-menu-dark]', { height: 0 })
        .to('[data-menu-light]', { height: 0 }, 0.4)
    },
    hide(ease = true) {
      this.$gsap
        .timeline({
          defaults: { duration: ease ? 1.4 : 0, ease: 'Power3.easeInOut' },
        })
        .to('[data-menu-light]', { transformOrigin: 'bottom', height: '100vh' })
        .to(
          '[data-menu-dark]',
          { transformOrigin: 'bottom', height: '100vh' },
          0.4
        )
    },
  },
}
</script>

<style scoped lang="postcss">
.nav-list a,
.nav-list a:after,
.nav-list a:before {
  @apply transition-all ease-in-out duration-500;
}

.nav-list a {
  @apply inline-block relative pl-4;
}

.nav-list a:after {
  @apply block absolute top-0 right-0 text-white text-opacity-30 text-sm transform translate-x-5 -translate-y-1;
  content: '01';
}

.nav-list a:before {
  @apply block absolute w-2 h-px bg-blue left-0 top-1/2 transform -translate-y-1/2;
  content: '';
}

.nav-list a.nuxt-link-exact-active,
.nav-list a:hover {
  @apply pl-10;
}

.nav-list a.nuxt-link-exact-active:before,
.nav-list a:hover:before {
  @apply w-8;
}
</style>
