import MyComponent from '../../../../slices/VideoGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/VideoGrid'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_grid","items":[{"video":"facilitate proactive web-readiness"},{"video":"benchmark back-end experiences"},{"video":"revolutionize enterprise networks"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'