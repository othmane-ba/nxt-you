<template>
  <div class="header-menu">
    <div
      data-menu-light
      class="fixed top-0 left-0 w-0 h-screen bg-gray-900 z-30"
    ></div>
    <div
      data-menu-dark
      class="fixed top-0 left-0 w-0 h-screen bg-black z-40 overflow-hidden"
    >
      <div class="relative w-screen h-full pt-32 mx-auto px-4 lg:px-16">
        <nav class="relative h-full flex flex-col space-y-4">
          <div class="flex lg:grid lg:grid-cols-3 lg:gap-8 flex-1">
            <div class="flex-shrink lg:col-span-1 lg:flex-1 lg:p-4">
              <div
                class="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-full
                  lg:relative
                  block
                  -z-10
                "
              >
                <div
                  class="
                    absolute
                    lg:hidden
                    inset-0
                    bg-gradient-to-t
                    from-black
                    z-10
                  "
                ></div>
                <img
                  v-lazy
                  ref="phoneImg"
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
                  <li
                    v-for="primaryLink in menuData.primaryLinks"
                    :key="primaryLink.id"
                  >
                    <NuxtLink
                      data-pointer="large"
                      :to="primaryLink.link.uid || '/'"
                      >{{ primaryLink.label }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>

              <div class="grid lg:grid-cols-2 gap-4">
                <div class="">
                  <ul class="">
                    <li v-for="secondaryLink in menuData.secondaryLinks">
                      <NuxtLink
                        class="link"
                        :to="secondaryLink.link.uid || '/'"
                        >{{ secondaryLink.label }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <div>
                  <div class="button">
                    <TheButton href="mailto:info@nxtyou.de">
                      {{ menuData.buttonLabel }}
                    </TheButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="flex space-x-4 p-4 border-t w-full items-center">
              <li>
                <a
                  class="
                    block
                    transition-opacity
                    ease-in-out
                    duration-500
                    hover:opacity-75
                  "
                  data-pointer="right"
                  href="https://www.instagram.com/nxtyou.de/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <path
                      d="M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z"
                      fill="currentColor"
                    /></svg
                ></a>
              </li>
              <li>
                <a
                  class="
                    block
                    transition-opacity
                    ease-in-out
                    duration-500
                    hover:opacity-75
                  "
                  data-pointer="right"
                  href="https://de.linkedin.com/company/nxt-you-gmbh/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
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
                </a>
              </li>
              <li class="">
                <a href="mailto:info@nxtyou.de" class="link text-sm">
                  info@nxtyou.de
                </a>
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
      active: false,
      menuData: {},
      images: [
        'nxt-you/home-brand-02_gbvxfq',
        'nxt-you/home-brand-01_xrdamj',
        'nxt-you/home-brand-03_ykfx4d',
        'nxt-you/home-brand-04_drxkwz',
        'nxt-you/home-brand-05_iguadj',
      ],
    }
  },
  async fetch() {
    this.menuData = await this.$prismic.api
      .getSingle('menu')
      .then((m) => m.data)
  },
  mounted() {
    this.$nuxt.$on('toggle-menu', ({ active, ease = true }) => {
      active ? this.show(ease) : this.hide(ease)
      this.active = active
    })
  },
  methods: {
    hide(ease = true) {
      this.$gsap
        .timeline({
          defaults: { duration: ease ? 1.4 : 0, ease: 'Power3.easeInOut' },
        })
        .to('.header-menu ul li, .header-menu .button, .header-menu img', {
          y: 40,
          autoAlpha: 0,
          stagger: { amount: 0.4 },
        })
        .to('[data-menu-dark]', { width: 0 }, 0)
        .to('[data-menu-light]', { width: 0 }, 0.4)
    },
    show(ease = true) {
      this.$gsap
        .timeline({
          defaults: { duration: ease ? 1.4 : 0, ease: 'Power3.easeInOut' },
        })
        .set('.header-menu ul li, .header-menu .button, .header-menu img', {
          y: 40,
          autoAlpha: 0,
        })
        .to('[data-menu-light]', {
          transformOrigin: 'center left',
          width: '100vw',
        })
        .to(
          '[data-menu-dark]',
          { transformOrigin: 'center left', width: '100vw' },
          0.4
        )
        .to(
          '.header-menu ul li, .header-menu .button, .header-menu img',
          {
            y: 0,
            autoAlpha: 1,
            stagger: { amount: 0.4 },
          },
          0.4
        )
    },
  },
}
</script>

<style scoped lang="postcss">
.nav-list ul {
  counter-reset: item;
}
.nav-list li {
  counter-increment: item;
}

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
  content: '0' counter(item);
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
