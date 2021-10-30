import MyComponent from '../../../../slices/BlackcardQualifier';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlackcardQualifier'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"blackcard_qualifier","items":[{"tag":"e-enable magnetic technologies"},{"tag":"enhance dot-com users"},{"tag":"orchestrate granular interfaces"}],"primary":{"slug":"monetize proactive paradigms","title":"evolve cross-media models","tagStepTitle":"syndicate user-centric portals","tagDescription":[{"type":"paragraph","text":"Nostrud esse culpa voluptate culpa ullamco elit proident velit sunt enim fugiat velit voluptate sunt. Aute labore anim exercitation non ea. Eu pariatur fugiat magna veniam officia aliquip deserunt cupidatat pariatur eiusmod anim ut mollit.","spans":[]}],"contactStepTitle":"harness strategic experiences","contactDescription":[{"type":"paragraph","text":"Mollit enim occaecat pariatur voluptate ex. Nostrud commodo nostrud sunt nulla in et veniam aliqua sint cupidatat. Enim aute id reprehenderit pariatur.","spans":[]}],"prevLabel":"aggregate robust partnerships","nextLabel":"synergize cross-platform bandwidth","submitLabel":"extend cutting-edge experiences"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
