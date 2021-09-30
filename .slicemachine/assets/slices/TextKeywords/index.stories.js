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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"title":"transform interactive paradigms","text-left":[{"type":"paragraph","text":"Velit et cupidatat adipisicing duis veniam incididunt ea incididunt reprehenderit ullamco nostrud. Mollit deserunt reprehenderit consequat in anim labore mollit consequat.","spans":[]}],"text-right":[{"type":"paragraph","text":"Cillum duis cillum est proident sit minim culpa ea duis ad tempor elit laboris cupidatat. Dolor magna enim minim duis tempor eu sit nisi culpa aute exercitation aute sit fugiat. Excepteur magna aliqua fugiat culpa occaecat.","spans":[]}],"keywords":"engage customized schemas"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
