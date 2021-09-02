import MyComponent from '../../../../slices/FeatureSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeatureSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"feature_slider","items":[{"title":"visualize viral users","subtitle":[{"type":"paragraph","text":"Exercitation eiusmod pariatur laboris anim officia exercitation mollit cupidatat eiusmod dolor. Excepteur est excepteur dolor nostrud fugiat et qui exercitation nulla sit dolor aliqua in adipisicing aliquip.","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat consequat magna fugiat ea velit Lorem veniam eu quis ullamco voluptate Lorem do.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"textFirst":"facilitate integrated interfaces","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"textSecond":"scale killer synergies","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"textThird":"innovate viral methodologies","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"textFourth":"whiteboard rich interfaces","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"textFifth":"deliver user-centric infomediaries"},{"title":"drive integrated e-commerce","subtitle":[{"type":"paragraph","text":"Amet adipisicing esse ea excepteur officia do cupidatat irure veniam minim culpa. Consequat nostrud Lorem quis id ullamco nisi nulla excepteur eu qui culpa dolor. Officia enim ipsum eu duis dolor deserunt anim.","spans":[]}],"description":[{"type":"paragraph","text":"Eu ad aute culpa ipsum officia cupidatat. Aliqua veniam occaecat elit esse labore id esse. Qui exercitation ea deserunt ipsum.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"textFirst":"expedite one-to-one synergies","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"textSecond":"scale granular blockchains","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"textThird":"repurpose wireless methodologies","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"textFourth":"maximize scalable users","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"textFifth":"aggregate scalable initiatives"}],"primary":{"autoplaySpeed":929,"video":"grow bricks-and-clicks architectures"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
