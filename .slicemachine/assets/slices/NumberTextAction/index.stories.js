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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"number_text_action","items":[],"primary":{"title":"strategize real-time networks","description":[{"type":"paragraph","text":"Ut adipisicing non culpa adipisicing dolor culpa aute ullamco laborum. Id ea occaecat pariatur elit ipsum.","spans":[]}],"number":4584,"rtl":false,"buttonLabel":"empower B2B ROI","buttonLink":"e-enable collaborative paradigms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
