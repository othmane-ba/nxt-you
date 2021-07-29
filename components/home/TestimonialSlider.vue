<template>
  <div class="container mx-auto px-4" v-view.once>
    <div
      data-animation-box
      data-cursor=""
      data-cursor-label="DRAG"
      class="overflow-hidden"
      v-swiper="options"
      :auto-destroy="false"
    >
      <div class="swiper-pagination pt-4 mb-48"></div>

      <div class="swiper-wrapper">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="swiper-slide"
        >
          <div
            class="
              mx-auto
              max-w-4xl
              flex flex-col
              justify-content-center
              text-center
            "
          >
            <p class="text-4xl md:text-2xl sm:text-xl font-bold leading-xl">
              {{ testimonial.quote }}
            </p>

            <div class="mt-16">
              <img
                class="mx-auto h-24 w-24 rounded-full"
                :alt="testimonial.author.name"
                :src="require('~/assets/images/' + testimonial.author.picture)"
              />
              <div class="mt-4">
                <h5 class="text-lg capitalize text-white font-semibold">
                  {{ testimonial.author.name }}
                </h5>
                <p class="capitalize text-gray-400">
                  {{ testimonial.author.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Author {
  constructor(name, picture, role) {
    this.name = name
    this.picture = picture
    this.role = role
  }
}

class Testimonial {
  constructor(author, quote) {
    this.author = author
    this.quote = quote
  }
}

export default {
  mounted() {},
  data() {
    return {
      options: {
        autoplay: {
          delay: 5000,
        },
        /*
        pagination: {
          el: '.swiper-pagination',
        },
*/
      },
      testimonials: new Array(4).fill(
        new Testimonial(
          new Author('Gary Wood', 'author.jpg', 'Graphic Designer'),
          'Nor themselves introduced themselves unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position.'
        )
      ),
    }
  },
  methods: {
    init() {},
  },
}
</script>

<style scoped lang="postcss"></style>
