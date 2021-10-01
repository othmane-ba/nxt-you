import MyComponent from '../../../../slices/TextKeywords';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextKeywords'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"slug":"enable global methodologies","title":"monetize turn-key applications","text-left":[{"type":"paragraph","text":"Consequat minim aute magna tempor magna consequat eiusmod velit officia enim incididunt in. Do labore exercitation reprehenderit minim sunt eiusmod qui amet pariatur laboris ex. Occaecat non ex anim laboris nulla ex.","spans":[]}],"text-right":[{"type":"paragraph","text":"Quis aute labore laborum id ea cillum nisi. In tempor consectetur cupidatat laboris tempor. Ipsum ullamco est duis culpa cupidatat quis et.","spans":[]}],"keywords":"incentivize e-business eyeballs"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
