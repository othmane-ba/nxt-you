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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_grid","items":[{"video":"seize B2C experiences"},{"video":"reinvent bricks-and-clicks e-tailers"},{"video":"streamline clicks-and-mortar e-business"},{"video":"maximize next-generation action-items"},{"video":"deploy cross-platform web services"},{"video":"exploit B2B content"}],"primary":{"slug":"optimize sexy platforms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
