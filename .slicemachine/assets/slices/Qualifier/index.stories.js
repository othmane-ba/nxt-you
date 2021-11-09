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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"reintermediate leading-edge e-business"},{"tag":"embrace magnetic systems"},{"tag":"evolve virtual convergence"}],"primary":{"slug":"reinvent holistic ROI","title":"mesh B2B paradigms","description":[{"type":"paragraph","text":"Ut reprehenderit veniam sunt consectetur voluptate ea labore consectetur quis consectetur tempor ea. Excepteur reprehenderit reprehenderit anim laborum quis magna nostrud ea nisi cillum. Quis eu sunt tempor anim adipisicing elit.","spans":[]}],"tagStepTitle":"unleash turn-key eyeballs","contactStepTitle":"evolve compelling initiatives","budgetLowerLimit":5728,"budgetUpperLimit":3928,"prevLabel":"strategize collaborative networks","nextLabel":"redefine magnetic experiences","submitLabel":"unleash turn-key mindshare"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
