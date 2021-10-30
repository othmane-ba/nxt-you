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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"slug":"productize 24/7 e-services","title":"streamline innovative functionalities","text-left":[{"type":"paragraph","text":"Fugiat laborum ad amet laboris id enim labore eiusmod qui officia ut. Laboris proident sint amet irure occaecat commodo incididunt nostrud nostrud proident ex velit in. Quis pariatur est duis.","spans":[]}],"text-right":[{"type":"paragraph","text":"Aliquip laboris excepteur exercitation duis amet. Sit culpa amet deserunt.","spans":[]}],"keywords":"productize distributed initiatives"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
