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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"slug":"implement bleeding-edge action-items","title":"syndicate collaborative markets","text-left":[{"type":"paragraph","text":"Laboris deserunt ipsum mollit ad Lorem. Aliqua anim esse consequat laboris non duis velit eiusmod exercitation Lorem sint nisi laboris ex reprehenderit. Commodo ea sit quis consectetur commodo sit.","spans":[]}],"text-right":[{"type":"paragraph","text":"Sunt dolor commodo est veniam deserunt labore ut ex enim.","spans":[]}],"keywords":"evolve collaborative eyeballs"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
