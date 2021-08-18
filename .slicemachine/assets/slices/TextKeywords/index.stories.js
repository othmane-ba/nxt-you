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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"title":"orchestrate cutting-edge markets","text-left":[{"type":"paragraph","text":"Nisi proident duis occaecat. Laboris et nisi cillum enim cupidatat magna duis aliquip laborum. Magna velit deserunt dolor eu.","spans":[]}],"text-right":[{"type":"paragraph","text":"Commodo velit labore reprehenderit cillum est pariatur excepteur laborum. Id in exercitation proident consequat cillum dolore ex ullamco fugiat minim adipisicing nostrud. Est aliqua reprehenderit enim.","spans":[]}],"keywords":"implement B2B action-items"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
