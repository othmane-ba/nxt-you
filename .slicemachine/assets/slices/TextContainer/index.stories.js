import MyComponent from '../../../../slices/TextContainer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextContainer'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_container","items":[],"primary":{"text":[{"type":"paragraph","text":"Duis et incididunt dolor laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
