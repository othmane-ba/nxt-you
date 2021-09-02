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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"title":"generate visionary schemas","text-left":[{"type":"paragraph","text":"Irure aliquip proident tempor ea ad adipisicing commodo adipisicing ullamco do enim sint duis ea. Duis tempor id elit reprehenderit qui eiusmod in.","spans":[]}],"text-right":[{"type":"paragraph","text":"Esse deserunt excepteur pariatur aute eiusmod est amet culpa aute deserunt consequat qui mollit.","spans":[]}],"keywords":"iterate visionary models"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
