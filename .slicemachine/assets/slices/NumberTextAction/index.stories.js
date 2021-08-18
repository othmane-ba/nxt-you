import MyComponent from '../../../../slices/NumberTextAction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NumberTextAction'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"number_text_action","items":[],"primary":{"title":"matrix back-end content","description":[{"type":"paragraph","text":"Lorem consectetur laboris culpa do nostrud deserunt. Culpa cillum proident minim proident esse minim sint exercitation quis qui occaecat mollit nulla. Eu dolore adipisicing minim esse nisi magna duis consequat sit.","spans":[]}],"number":1682,"buttonText":"implement visionary e-tailers","rtl":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
