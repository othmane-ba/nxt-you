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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_grid","items":[{"video":"orchestrate dynamic infomediaries"},{"video":"extend next-generation solutions"},{"video":"exploit 24/365 e-tailers"}],"primary":{"slug":"enable 24/365 relationships"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
