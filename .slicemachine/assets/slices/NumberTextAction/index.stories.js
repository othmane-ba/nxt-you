import MyComponent from '../../../../slices/NumberTextAction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NumberTextAction'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"number_text_action","items":[],"primary":{"title":"enable distributed e-markets","description":[{"type":"paragraph","text":"Adipisicing ullamco sit reprehenderit excepteur quis consectetur Lorem. Pariatur ut irure ipsum nulla.","spans":[]}],"number":6090,"buttonText":"whiteboard front-end methodologies","rtl":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
