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
                class="w-full py-2 px-4 rounded border max-w-xs"
                data-pointer="large"
                type="submit"
              >
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
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('error')
        return
      } else {
        console.log('submit')
      }
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
