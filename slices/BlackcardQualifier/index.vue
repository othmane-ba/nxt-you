<template>
  <section class="qualifier" :id="slice.primary.slug">
    <div
      class="container text-center mx-auto px-4 lg:px-36 space-y-8"
      v-animate
    >
      <h3 class="title" v-animate:text>
        {{ slice.primary.title }}
      </h3>

      <form @submit.prevent="submit">
        <Tabset @init="onInit" @select="onSelect" ref="tabset">
          <Tab
            :title="slice.primary.tagStepTitle"
            :key="slice.primary.tagStepTitle"
            :disabled="overlayActive"
          >
            <article>
              <div class="space-y-4">
                <div class="max-w-2xl mx-auto">
                  <prismic-rich-text :field="slice.primary.tagDescription" />
                </div>

                <div class="flex -m-1 sm:-m-2 flex-wrap justify-center">
                  <Tag
                    v-for="(tag, index) of tags"
                    :key="index"
                    :label="tag"
                    :value="$v.qualifier.tags.$model.indexOf(tag) > -1"
                    @input="updateTag(tag, $event)"
                  />
                </div>
              </div>
            </article>
          </Tab>
          <Tab
            :title="slice.primary.contactStepTitle"
            :key="slice.primary.contactStepTitle"
            :disabled="overlayActive"
          >
            <article>
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-95
                  z-10
                  flex
                  items-center
                  justify-center
                "
                v-if="overlayActive"
              >
                <div v-if="loading">
                  <svg
                    class="animate-spin h-8 w-8 text-blue"
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
                </div>
                <div v-else-if="error" class="space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Ein unbekannter Fehler ist aufgetreten.</p>
                  <div
                    class="
                      flex
                      items-center
                      flex-col
                      sm:flex-row
                      space-y-4
                      sm:space-y-0 sm:space-x-4
                    "
                  >
                    <TheButton @click="tryAgain" size="sm"
                      >Erneut Versuchen</TheButton
                    >
                    <TheButton size="sm" href="mailto:info@nxtyou.de"
                      >Email Schreiben</TheButton
                    >
                  </div>
                </div>
                <div v-else class="space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    Die Anfrage war erfolgreich, wir werden Dich in Kürze
                    kontaktieren.
                  </p>
                  <div
                    class="
                      flex
                      items-center
                      flex-col
                      sm:flex-row
                      space-y-4
                      sm:space-y-0 sm:space-x-4
                    "
                  >
                    <TheButton @click="navigateBack" size="sm"
                      >Zurück</TheButton
                    >
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="max-w-2xl mx-auto">
                  <prismic-rich-text
                    :field="slice.primary.contactDescription"
                  />
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="form-group">
                    <input
                      data-pointer="small"
                      id="name"
                      name="name"
                      v-model.trim="$v.qualifier.name.$model"
                      type="text"
                      placeholder="Name"
                      :class="{
                        'border-red-600 placeholder-red-600':
                          touched && $v.qualifier.name.$error,
                      }"
                    />
                    <ul
                      v-if="touched && $v.qualifier.name.$error"
                      class="form-error"
                    >
                      <li v-if="!$v.qualifier.name.required">
                        Ein Name muss angegeben werden.
                      </li>
                    </ul>
                  </div>
                  <div class="form-group">
                    <input
                      data-pointer="small"
                      id="email"
                      name="name"
                      v-model.trim="$v.qualifier.email.$model"
                      type="email"
                      placeholder="E-Mail Adresse"
                      :class="{
                        'border-red-600 placeholder-red-600':
                          touched && $v.qualifier.email.$error,
                      }"
                    />
                    <ul
                      v-if="touched && $v.qualifier.email.$error"
                      class="form-error"
                    >
                      <li v-if="!$v.qualifier.email.required">
                        Eine E-Mail Adresse muss angegeben werden.
                      </li>
                      <li v-if="!$v.qualifier.email.email">
                        Diese E-Mail Adresse ist ungültig.
                      </li>
                    </ul>
                  </div>
                  <div class="form-group">
                    <input
                      data-pointer="small"
                      id="company"
                      name="company"
                      v-model.trim="$v.qualifier.company.$model"
                      type="text"
                      placeholder="Firmenname"
                      :class="{
                        'border-red-600 placeholder-red-600':
                          touched && $v.qualifier.company.$error,
                      }"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      data-pointer="small"
                      id="phone"
                      name="phone"
                      v-model.trim="$v.qualifier.phone.$model"
                      type="text"
                      placeholder="Telefon Nummer"
                      :class="{
                        'border-red-600 placeholder-red-600':
                          touched && $v.qualifier.phone.$error,
                      }"
                    />
                    <ul
                      v-if="touched && $v.qualifier.phone.$error"
                      class="form-error"
                    >
                      <li v-if="!$v.qualifier.phone.customPhone">
                        Diese Telefonnummer ist ungültig.
                      </li>
                    </ul>
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
                :class="[
                  !overlayActive && tabset.current > 0
                    ? 'visible'
                    : 'invisible',
                ]"
                data-pointer="large"
                fgType="link"
                @click="$refs.tabset.prev()"
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
                !overlayActive && tabset.current < tabset.total - 1
                  ? 'visible'
                  : 'invisible',
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
              !overlayActive && tabset.current >= tabset.total - 1
                ? 'visible'
                : 'invisible',
            ]"
          >
            <TheButton data-pointer="large" type="submit">
              {{ slice.primary.submitLabel }}
            </TheButton>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
const customPhone = helpers.regex('customPhone', /^(?=.*[0-9])[- +()0-9]+$/)

export default {
  name: 'BlackcardQualifier',
  data() {
    return {
      overlayActive: false,
      touched: false,
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
        phone: '',
      },
    }
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {},
  validations: {
    qualifier: {
      tags: {},
      name: { required },
      company: {},
      phone: { customPhone },
      email: {
        required,
        email,
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
    tryAgain() {
      this.loading = false
      this.error = false
      this.overlayActive = false
    },
    navigateBack() {
      this.overlayActive = false
      this.$refs.tabset.select(0)
    },
    async submit() {
      if (this.loading) {
        return
      }

      this.$v.$touch()
      this.touched = true
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      this.error = false
      this.overlayActive = true
      try {
        const { data } = await this.$axios.post(
          '/blackcard',
          JSON.stringify(this.qualifier)
        )
        this.error = !data.success
      } catch (err) {
        console.error(err)
        this.error = true
      }
      if (!this.error) {
        this.resetQualifier()
      }
      this.loading = false
    },
    resetQualifier() {
      this.touched = false

      this.qualifier = {
        tags: [],
        name: '',
        email: '',
        company: '',
        phone: '',
      }
    },
    updateTag(tag, value) {
      if (value) {
        this.$v.qualifier.tags.$model.push(tag)
      } else {
        this.$v.qualifier.tags.$model = this.$v.qualifier.tags.$model.filter(
          (t) => t !== tag
        )
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="postcss">
input {
  @apply border-0 border-b w-full bg-transparent text-current focus:placeholder-white;
}

input,
input::placeholder {
  @apply transition-all ease-in-out duration-500;
}

textarea:focus,
input:focus {
  outline: none;
  box-shadow: none;
}

.form-group {
  @apply relative text-left;
}

.form-error {
  @apply absolute -bottom-1 left-0 transform translate-y-full text-xs text-red-600;
}
</style>

<style lang="postcss"></style>
