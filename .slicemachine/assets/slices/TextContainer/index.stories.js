import MyComponent from '../../../../slices/TextContainer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextContainer'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_container","items":[],"primary":{"slug":"deliver out-of-the-box infomediaries","text":[{"type":"paragraph","text":"Nisi occaecat nulla sunt enim eu. Adipisicing reprehenderit incididunt dolor aliquip commodo do mollit nulla nulla duis tempor proident duis cupidatat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
