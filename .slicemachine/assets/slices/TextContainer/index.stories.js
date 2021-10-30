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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_container","items":[],"primary":{"slug":"redefine out-of-the-box infomediaries","text":[{"type":"paragraph","text":"Ut quis eiusmod minim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
