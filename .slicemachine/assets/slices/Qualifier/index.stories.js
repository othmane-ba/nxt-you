import MyComponent from '../../../../slices/Qualifier';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Qualifier'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"aggregate enterprise web services"},{"tag":"seize leading-edge e-markets"},{"tag":"utilize compelling e-commerce"},{"tag":"implement cross-media interfaces"}],"primary":{"tagTitle":"embrace magnetic ROI","tagDescription":[{"type":"paragraph","text":"Deserunt ut minim cillum veniam.","spans":[]}],"contactTitle":"brand bleeding-edge experiences","submitLabel":"enhance scalable blockchains"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
