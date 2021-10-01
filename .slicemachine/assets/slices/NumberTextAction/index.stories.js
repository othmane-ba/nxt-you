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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"number_text_action","items":[],"primary":{"title":"recontextualize dynamic methodologies","description":[{"type":"paragraph","text":"Do enim fugiat ipsum fugiat pariatur ex ullamco laborum ut ea deserunt non consectetur est.","spans":[]}],"number":7688,"rtl":false,"buttonLabel":"e-enable killer portals","buttonLink":"cultivate web-enabled models"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
