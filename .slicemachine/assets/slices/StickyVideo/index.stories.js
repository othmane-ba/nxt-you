import MyComponent from '../../../../slices/StickyVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/StickyVideo'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sticky_video","items":[],"primary":{"slug":"drive real-time web-readiness","video":"generate synergistic partnerships"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
