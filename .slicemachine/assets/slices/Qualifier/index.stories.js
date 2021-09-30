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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"engage transparent web-readiness"},{"tag":"evolve viral paradigms"}],"primary":{"title":"streamline dot-com synergies","description":[{"type":"paragraph","text":"Officia eiusmod mollit laborum tempor consequat est eiusmod adipisicing minim excepteur enim ut aliquip nisi. Irure reprehenderit occaecat aliqua excepteur adipisicing incididunt ipsum est.","spans":[]}],"tagStepTitle":"utilize B2C vortals","contactStepTitle":"optimize one-to-one deliverables","budgetLowerLimit":8985,"budgetUpperLimit":6414,"prevLabel":"iterate magnetic convergence","nextLabel":"synergize wireless portals","submitLabel":"revolutionize seamless eyeballs"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
