import MyComponent from '../../../../slices/FeatureSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeatureSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"feature_slider","items":[],"primary":{"autoplaySpeed":9746},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
