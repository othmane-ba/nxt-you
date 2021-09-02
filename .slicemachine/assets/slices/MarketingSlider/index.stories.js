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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"syndicate mission-critical initiatives","description":[{"type":"paragraph","text":"Reprehenderit eiusmod ad ad eiusmod nostrud consequat magna nostrud enim cillum elit. Incididunt adipisicing qui adipisicing velit reprehenderit sint pariatur do Lorem.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"video":"grow 24/365 eyeballs"},{"title":"transform end-to-end interfaces","description":[{"type":"paragraph","text":"Lorem deserunt reprehenderit velit ipsum aliqua esse mollit est ullamco tempor. Sunt esse fugiat occaecat cupidatat sit culpa irure proident nulla excepteur velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"video":"deliver efficient functionalities"},{"title":"recontextualize cross-platform users","description":[{"type":"paragraph","text":"Enim magna et enim mollit sint in fugiat consequat sit magna commodo et anim nulla amet. Magna laboris excepteur Lorem sit eu non minim cillum id occaecat occaecat voluptate.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"video":"orchestrate B2C partnerships"}],"primary":{"autoplaySpeed":1353},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
