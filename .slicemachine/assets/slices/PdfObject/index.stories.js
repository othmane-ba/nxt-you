import MyComponent from '../../../../slices/PdfObject';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PdfObject'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"pdf_object","items":[],"primary":{"media":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
