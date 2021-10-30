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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"architect e-business channels"},{"tag":"mesh mission-critical e-business"},{"tag":"revolutionize killer content"}],"primary":{"slug":"synergize bricks-and-clicks e-services","title":"synthesize virtual ROI","description":[{"type":"paragraph","text":"Culpa occaecat ex reprehenderit consequat anim ea pariatur deserunt pariatur magna est. Sit dolor mollit consectetur reprehenderit proident ex id mollit ut non sunt magna est.","spans":[]}],"tagStepTitle":"empower integrated synergies","contactStepTitle":"synthesize seamless supply-chains","budgetLowerLimit":73,"budgetUpperLimit":42,"prevLabel":"reinvent user-centric initiatives","nextLabel":"strategize wireless supply-chains","submitLabel":"monetize world-class platforms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
