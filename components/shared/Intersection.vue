<template>
  <div class="relative h-96 w-full overflow-hidden" v-view.once>
    <img
      data-parallax
      data-scale="1.6"
      class="absolute h-full w-full inset-0"
      alt="Intersection"
      src="~/assets/images/intersection.jpg"
    />
    <div
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <div data-animation-box>
        <a
          class="
            flex
            w-20
            h-20
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
          "
          data-pointer="right"
        >
          <span class="block relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right icon str-width-lg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span
            class="
              animate-ping-slow
              absolute
              inline-flex
              h-full
              w-full
              rounded-full
              bg-white
              opacity-75
            "
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>
