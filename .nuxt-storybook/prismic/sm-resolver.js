import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`C:/Users/fabia/WebstormProjects/nxt-you/slices/${sliceName}.vue`), import(`C:/Users/fabia/WebstormProjects/nxt-you/slices/${sliceName}/index.vue`), import(`C:/Users/fabia/WebstormProjects/nxt-you/slices/${sliceName}/index.js`), import(`C:/Users/fabia/WebstormProjects/nxt-you/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
