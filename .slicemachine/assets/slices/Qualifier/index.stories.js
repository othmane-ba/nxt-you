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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"synthesize bleeding-edge methodologies"},{"tag":"aggregate seamless bandwidth"},{"tag":"drive real-time content"},{"tag":"reintermediate frictionless blockchains"},{"tag":"synthesize robust users"}],"primary":{"slug":"e-enable efficient channels","title":"synthesize holistic markets","description":[{"type":"paragraph","text":"Velit aute ad ut veniam ipsum et in non laborum magna sint voluptate et esse laboris.","spans":[]}],"tagStepTitle":"benchmark scalable functionalities","contactStepTitle":"e-enable sticky architectures","budgetLowerLimit":9736,"budgetUpperLimit":4554,"prevLabel":"embrace web-enabled web services","nextLabel":"engineer interactive networks","submitLabel":"brand global synergies"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
