<template>
  <div class="container mx-auto md:px-36 text-center" v-view.once>
    <form class="pb-16" @submit.prevent="submit">
      <article>
        <h3 class="text-3xl lg:text-4xl font-bold uppercase">
          <span
            data-animation-text="Wie können wir dir helfen?"
            data-animation-text-white=""
          >
            Wie können wir dir helfen?</span
          >
        </h3>
        <div class="pt-4 pb-16">
          <p>
            Eine Marke besteht aus Erwartungen, Erinnerungen, Geschichten und<br />
            Beziehungen, die zusammengenommen dafür sorgen.
          </p>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <Tag
            v-for="(tag, index) of tags"
            :key="index"
            :label="tag"
            :value="qualifier.tags.indexOf(tag) > -1"
            @input="updateTag(tag, $event)"
          />
        </div>
      </article>
      <article class="pt-16">
        <h3 class="text-3xl lg:text-4xl font-bold uppercase">
          <span
            data-animation-text="Kontakt aufnehmen"
            data-animation-text-white
          >
            Kontakt aufnehmen</span
          >
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
              type="url"
              placeholder="Website"
            />
          </div>
          <!--        <div class="lg:col-span-2">
          <div class="text-left">Budgetvorstellung</div>
          <client-only>
            <vue-range-slider
              v-model.trim="qualifier.budget"
              :enable-cross="false"
            >
              <div slot="tooltip" slot-scope="{ value }">{{ value }}k</div>
            </vue-range-slider>
          </client-only>
        </div>-->
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
                Abschicken
              </button>
            </div>
          </div>
        </div>
      </article>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  required,
  maxLength,
  minLength,
  url,
  email,
} from 'vuelidate/lib/validators'

export default Vue.extend({
  methods: {
    async submit() {
      if (this.loading) {
        return
      }
      try {
        this.error = false
        this.loading = true
        const res = await this.$axios.post(
          '/mail',
          JSON.stringify(this.qualifier)
        )
        this.error = !res.data.success
        ;(this as any).$toast.show(res.data.message, {
          type: res.data.success ? 'success' : 'error',
        })
      } catch (err) {
        console.error(err)
        this.error = true
        ;(this as any).$toast.show('Unknown Error', {
          type: 'error',
        })
      }

      this.loading = false
    },
    updateTag(tag: string, value: boolean) {
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
      tags: [
        'Brand Strategy',
        'Social Media Marketing',
        'SEO Service',
        'Visual Brand identity',
        'Funnel Systeme',
        'UI/UX Design',
        'Copywriting',
        'Mobile App Development',
        'Content Creation',
        'Google Ads Kampagnen',
      ],
      qualifier: {
        tags: [] as string[],
        name: '',
        email: '',
        company: '',
        website: '',
        budget: [0, 100],
      },
    }
  },
})
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
