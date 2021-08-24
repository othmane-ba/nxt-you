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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"mesh dynamic mindshare"},{"tag":"disintermediate best-of-breed content"},{"tag":"productize enterprise architectures"},{"tag":"visualize real-time bandwidth"},{"tag":"facilitate magnetic markets"},{"tag":"unleash back-end e-tailers"}],"primary":{"tagTitle":"revolutionize virtual deliverables","tagDescription":[{"type":"paragraph","text":"Cupidatat laboris aliquip dolore amet anim proident ut irure velit voluptate qui deserunt.","spans":[]}],"contactTitle":"redefine virtual relationships","submitLabel":"incubate next-generation web-readiness"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
