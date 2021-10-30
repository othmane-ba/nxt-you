import MyComponent from '../../../../slices/MarketingSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MarketingSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"harness best-of-breed paradigms","description":[{"type":"paragraph","text":"Labore pariatur excepteur adipisicing magna. Cillum cupidatat eu tempor sint pariatur commodo aliquip duis incididunt anim aute commodo est aliquip nulla.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"video":"disintermediate B2C niches"},{"title":"grow one-to-one ROI","description":[{"type":"paragraph","text":"Dolor consectetur sit culpa ipsum qui esse irure aliquip nulla est. Velit irure commodo cupidatat ad ut anim incididunt ea occaecat cillum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"video":"maximize revolutionary web-readiness"}],"primary":{"slice":"evolve global vortals","autoplaySpeed":1154},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
