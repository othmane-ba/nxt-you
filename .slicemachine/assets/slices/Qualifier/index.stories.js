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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"generate synergistic e-markets"},{"tag":"drive enterprise blockchains"}],"primary":{"title":"transition back-end technologies","description":[{"type":"paragraph","text":"Laborum ut ullamco enim incididunt sint mollit ad est aliqua dolore pariatur est sint veniam qui.","spans":[]}],"tagStepTitle":"expedite proactive functionalities","contactStepTitle":"incubate leading-edge e-services","budgetLowerLimit":7051,"budgetUpperLimit":4063,"prevLabel":"engage seamless architectures","nextLabel":"recontextualize web-enabled web services","submitLabel":"synthesize synergistic networks"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
