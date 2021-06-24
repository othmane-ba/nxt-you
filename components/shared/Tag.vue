<template>
  <div
    data-pointer="large"
    class="
      flex
      items-center
      justify-center
      px-6
      py-1
      border border-gray-300
      rounded
      transition-all
      hover:border-blue
    "
    :class="{ 'border-blue': value, 'bg-blue': value }"
    @click="$emit('input', !value)"
  >
    <div class="text-gray-300 mr-4">
      <svg
        v-if="value"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 rounded-full"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 rounded-full"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: { type: Boolean, default: null },
    label: { type: String, default: null },
  },
  methods: {},
})
</script>

<style scoped></style>
