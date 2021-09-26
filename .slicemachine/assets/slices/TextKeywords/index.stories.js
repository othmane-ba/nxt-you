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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"title":"repurpose efficient web services","text-left":[{"type":"paragraph","text":"Est ea ea officia nostrud aliquip sint commodo nisi in ea id culpa amet.","spans":[]}],"text-right":[{"type":"paragraph","text":"Et officia eiusmod sint mollit aliquip commodo nostrud ex esse mollit ipsum incididunt dolore. Nulla aute Lorem et mollit minim id cupidatat aute mollit. Aute proident laboris cupidatat nisi.","spans":[]}],"keywords":"brand virtual partnerships"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
