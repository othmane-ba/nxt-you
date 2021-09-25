<template>
  <section class="qualifier">
    <div
      class="container text-center mx-auto px-4 lg:px-36 space-y-8"
      v-animate
    >
      <h3 class="title" v-animate:text>
        {{ slice.primary.title }}
      </h3>

      <div class="lg:px-18">
        <prismic-rich-text :field="slice.primary.description" />
      </div>

      <form @submit.prevent="submit">
        <Tabset @init="onInit" @select="onSelect" ref="tabset">
          <Tab
            :title="slice.primary.tagStepTitle"
            :key="slice.primary.tagStepTitle"
          >
            <article>
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
          </Tab>
          <Tab
            :title="slice.primary.contactStepTitle"
            :key="slice.primary.contactStepTitle"
          >
            <article>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    placeholder="E-Mail Adresse"
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
                    <RangeSlider
                      v-model="qualifier.budget"
                      :lowerLimit="slice.primary.budgetLowerLimit"
                      :upperLimit="slice.primary.budgetUpperLimit"
                    ></RangeSlider>
                  </div>
                </div>
              </div>
            </article>
          </Tab>
        </Tabset>

        <div
          class="
            flex flex-col
            lg:flex-row
            items-center
            lg:justify-between
            space-y-4
            lg:space-y-0
          "
        >
          <div
            class="flex items-center justify-center lg:justify-start space-x-4"
          >
            <div
              :class="[
                tabset.current < tabset.total - 1 ? 'visible' : 'invisible',
              ]"
            >
              <TheButton
                :class="[tabset.current > 0 ? 'visible' : 'invisible']"
                data-pointer="large"
                fgType="link"
                @click="$refs.tabset.prev()"
                :disabled="tabset.current <= 0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ slice.primary.prevLabel }}</span>
              </TheButton>
            </div>
            <div
              :class="[
                tabset.current < tabset.total - 1 ? 'visible' : 'invisible',
              ]"
            >
              <TheButton
                data-pointer="large"
                fgType="link"
                @click="$refs.tabset.next()"
              >
                <span>{{ slice.primary.nextLabel }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </TheButton>
            </div>
          </div>
          <div
            :class="[
              tabset.current >= tabset.total - 1 ? 'visible' : 'invisible',
            ]"
          >
            <TheButton data-pointer="large" type="submit">
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
              <span class="block">
                {{ slice.primary.submitLabel }}
              </span>
            </TheButton>
          </div>
        </div>
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
    onSelect({ currentIndex }) {
      this.tabset.current = currentIndex
    },
    onInit({ currentIndex, totalTabs }) {
      this.tabset.current = currentIndex
      this.tabset.total = totalTabs
    },
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
      tabset: {
        total: 0,
        current: 0,
      },
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
  @apply border-0 border-b border-gray-300 w-full bg-transparent text-current ease-in-out duration-300;
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
