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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"productize strategic interfaces","description":[{"type":"paragraph","text":"Non in reprehenderit tempor Lorem esse anim ea est. Nostrud non ipsum est esse enim laboris non pariatur anim irure ea ex ex. Labore adipisicing aute eiusmod incididunt do laborum laborum ex qui qui velit non eu cupidatat reprehenderit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"video":"transition cross-platform portals"},{"title":"exploit frictionless mindshare","description":[{"type":"paragraph","text":"Quis cillum dolore exercitation nulla Lorem adipisicing voluptate ut qui nostrud dolore. Incididunt do exercitation ad eu tempor dolore tempor sunt aliquip Lorem pariatur magna ad. Adipisicing occaecat esse duis culpa dolore eu cillum sint adipisicing culpa Lorem duis commodo enim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"video":"orchestrate world-class markets"},{"title":"architect frictionless web-readiness","description":[{"type":"paragraph","text":"Eu aliqua ullamco ea. Sint consequat magna culpa dolor est aliquip reprehenderit occaecat amet magna.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"video":"e-enable world-class methodologies"},{"title":"deliver customized infrastructures","description":[{"type":"paragraph","text":"Consectetur nisi ex nulla pariatur dolor. Nostrud proident exercitation aliquip commodo. In sint amet ullamco exercitation magna et magna dolor labore ea consectetur nulla mollit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"video":"seize 24/365 web services"}],"primary":{"autoplaySpeed":8751},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
