<template>
  <footer class="w-full">
    <div class="container mx-auto flex px-4 lg:px-32 py-32">
      <div class="inline-flex flex-col space-y-8 ml-auto text-right">
        <div>
          <div class="flex items-center justify-end space-x-4">
            <img src="~/assets/images/logo.png" alt="NXT YOU" class="w-10" />
            <h4 class="text-2xl font-semibold tracking-widest">NXT YOU</h4>
          </div>
          <div class="text-xl"><p>Make your Vision Come Reality.</p></div>
        </div>
        <ul class="space-x-8">
          <li>
            <NuxtLink to="/" data-pointer="large" class="link"
              >Startseite</NuxtLink
            >
          </li>
        </ul>

        <div class="space-y-2">
          <ul class="flex space-x-4 justify-end items-center">
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
                <span class="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                <span class="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                >
                  <path
                    d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
                    fill="currentColor"
                  />
                </svg>
              </a>
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
                href="mailto:info@nxtyou.de"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                >
                  <path
                    d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"
                    fill="currentColor"
                  />
                </svg>

                <span class="sr-only">Email</span>
              </a>
            </li>
          </ul>

          <ul class="flex justify-end space-x-4 text-xs">
            <li>
              <NuxtLink to="terms" data-pointer="large" class="link"
                >Impressum/AGB</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="privacy" data-pointer="large" class="link"
                >Datenschutzerklärung</NuxtLink
              >
            </li>
          </ul>

          <div class="text-xs">
            Copyright
            <svg
              class="w-3 h-3 inline-block mb-1 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 367.467 367.467"
              fill="currentColor"
            >
              <path
                d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716   c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518   c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817   C326.536,262.466,262.481,326.518,183.73,326.518z"
              />
              <path
                d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915   c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129   c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982   c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154   l2.658-7.133h-44.28L244.036,217.014z"
              />
            </svg>
            NXT YOU GmbH
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="postcss" scoped></style>
