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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"integrate distributed deliverables"},{"tag":"whiteboard strategic methodologies"},{"tag":"reinvent rich e-markets"},{"tag":"whiteboard killer functionalities"},{"tag":"deploy revolutionary experiences"}],"primary":{"title":"embrace one-to-one methodologies","description":[{"type":"paragraph","text":"Ipsum amet excepteur sunt ut laboris nulla deserunt. Tempor irure ea labore minim cillum dolore in minim veniam tempor exercitation eu quis.","spans":[]}],"tagStepTitle":"generate plug-and-play synergies","contactStepTitle":"target efficient e-business","budgetLowerLimit":4237,"budgetUpperLimit":1525,"prevLabel":"orchestrate out-of-the-box web-readiness","nextLabel":"deliver virtual functionalities","submitLabel":"matrix B2B synergies"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
