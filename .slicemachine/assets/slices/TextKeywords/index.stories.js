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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_keywords","items":[],"primary":{"slug":"target impactful methodologies","title":"mesh ubiquitous e-tailers","text-left":[{"type":"paragraph","text":"Cillum consectetur nulla do Lorem duis ad ad amet nulla ipsum ad laboris magna ut.","spans":[]}],"text-right":[{"type":"paragraph","text":"Consectetur sint ut id laborum consectetur amet officia ullamco magna.","spans":[]}],"keywords":"reintermediate 24/365 convergence"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
