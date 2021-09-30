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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"reintermediate cross-media vortals","description":[{"type":"paragraph","text":"Lorem quis ut minim Lorem id esse amet ex qui irure irure proident. Aliqua ex nisi deserunt ex irure magna sint nisi minim culpa fugiat adipisicing anim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"video":"seize clicks-and-mortar supply-chains"},{"title":"facilitate user-centric mindshare","description":[{"type":"paragraph","text":"Exercitation occaecat sunt eiusmod est ipsum. Dolore sit enim consectetur exercitation mollit consectetur consectetur consectetur mollit. Voluptate ipsum ipsum in laboris quis pariatur anim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"video":"reinvent enterprise architectures"},{"title":"repurpose vertical vortals","description":[{"type":"paragraph","text":"Non consequat minim consectetur laborum nostrud labore officia amet incididunt exercitation aliqua minim commodo. Do do minim nisi aliquip et excepteur labore aliquip non quis. Do adipisicing mollit non excepteur velit sit ullamco exercitation eiusmod proident velit duis.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"video":"iterate wireless blockchains"}],"primary":{"autoplaySpeed":2662},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
