<template>
  <div
    data-pointer="large"
    class="
      m-1
      sm:m-2
      relative
      flex
      items-center
      justify-center
      border-2 border-gray-600
      rounded-3xl
      text-white text-xs
      uppercase
      font-bold
      tracking-widest
      overflow-hidden
      flex
      items-center
      justify-center
      text-center
      transition-all
      ease-in-out
      duration-500
      outline-none
      appearance-none
      hover:border-blue
      space-x-2
      sm:space-x-4
      px-2
      sm:px-8
      h-8
    "
    :class="{ 'border-blue': value, 'bg-blue': value }"
    @click="$emit('input', !value)"
  >
    <div>
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

<script>
export default {
  props: {
    value: { type: Boolean, default: null },
    label: { type: String, default: null },
  },
  methods: {},
}
</script>

<style scoped></style>
