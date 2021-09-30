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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"number_text_action","items":[],"primary":{"title":"engineer out-of-the-box solutions","description":[{"type":"paragraph","text":"Cillum veniam pariatur qui labore esse eiusmod. Id officia adipisicing ad ipsum Lorem culpa ea.","spans":[]}],"number":2120,"buttonText":"leverage global ROI","rtl":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
