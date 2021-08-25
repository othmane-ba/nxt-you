<template>
  <section class="qualifier">
    <div
      class="container mx-auto px-4 md:px-36 text-center"
      v-view.once="$animate.box"
    >
      <form class="pb-16" @submit.prevent="submit">
        <article>
          <h3 class="title text-center" v-view.once="$animate.text">
            {{ slice.primary.tagTitle }}
          </h3>
          <div class="pt-4 pb-16">
            <prismic-rich-text :field="slice.primary.tagDescription" />
          </div>

          <div class="flex flex-wrap justify-center">
            <Tag
              v-for="(tag, index) of tags"
              class="m-2"
              :key="index"
              :label="tag"
              :value="qualifier.tags.indexOf(tag) > -1"
              @input="updateTag(tag, $event)"
            />
          </div>
        </article>
        <article class="pt-16">
          <h3 class="title text-center" v-view.once="$animate.text">
            {{ slice.primary.contactTitle }}
          </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 pt-16 gap-8">
            <div>
              <input
                data-pointer="small"
                id="name"
                name="name"
                v-model.trim="qualifier.name"
                type="text"
                placeholder="Wie heißt du?"
                required
              />
            </div>
            <div>
              <input
                data-pointer="small"
                id="email"
                name="name"
                v-model.trim="qualifier.email"
                type="email"
                placeholder="E-mail Adresse"
                required
              />
            </div>
            <div>
              <input
                data-pointer="small"
                id="company"
                name="company"
                v-model.trim="qualifier.company"
                type="text"
                placeholder="Firmenname"
              />
            </div>
            <div>
              <input
                data-pointer="small"
                id="website"
                name="website"
                v-model.trim="qualifier.website"
                type="text"
                placeholder="Website"
              />
            </div>
            <div class="lg:col-span-2">
              <div class="text-left pl-2 pb-4">Budgetvorstellung</div>
              <div class="pb-8">
                <RangeSlider v-model="qualifier.budget"></RangeSlider>
              </div>
            </div>
            <div class="lg:col-span-2">
              <div>
                <button
                  class="
                    w-full
                    py-2
                    px-4
                    rounded
                    border
                    max-w-xs
                    flex
                    items-center
                    justify-center
                    gap-4
                  "
                  data-pointer="large"
                  type="submit"
                >
                  <svg
                    v-if="loading"
                    class="animate-spin h-5 w-5 text-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ slice.primary.submitLabel }}
                </button>
              </div>
            </div>
          </div>
        </article>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Qualifier',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
    async submit() {
      if (this.loading) {
        return
      }
      try {
        this.error = false
        this.loading = true
        const { data } = await this.$axios.post(
          '/mail',
          JSON.stringify(this.qualifier)
        )
        this.error = data.success
        this.$toast.show(data.message, {
          type: data.success ? 'success' : 'error',
        })
      } catch (err) {
        console.error(err)
        this.error = true
        this.$toast.show('Unknown Error', {
          type: 'error',
        })
      }
      this.loading = false
    },
    updateTag(tag, value) {
      if (value) {
        this.qualifier.tags.push(tag)
      } else {
        this.qualifier.tags = this.qualifier.tags.filter((t) => t !== tag)
      }
    },
  },
  data() {
    return {
      error: false,
      loading: false,
      tags: this.slice.items.map((i) => i.tag),
      qualifier: {
        tags: [],
        name: '',
        email: '',
        company: '',
        website: '',
        budget: [14000, 68000],
      },
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
