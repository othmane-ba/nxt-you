import MyComponent from '../../../../slices/RevealGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RevealGrid'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"reveal_grid","items":[{"title":"disintermediate compelling niches","description":[{"type":"paragraph","text":"Anim cupidatat deserunt sit fugiat exercitation proident tempor. In tempor dolor cupidatat aliqua elit voluptate Lorem eiusmod duis officia mollit irure ea nostrud.","spans":[]}],"imageFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"imageFirstReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"imageSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"imageSecondReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"rtl":false},{"title":"monetize rich deliverables","description":[{"type":"paragraph","text":"Non amet eu anim exercitation. Ipsum pariatur officia laboris eu ullamco aliquip anim amet voluptate proident commodo magna cillum ad officia.","spans":[]}],"imageFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"imageFirstReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"imageSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"imageSecondReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"rtl":true},{"title":"extend back-end infomediaries","description":[{"type":"paragraph","text":"Laborum cupidatat commodo ad occaecat reprehenderit sunt et qui sint nulla. Ullamco officia elit ex commodo occaecat quis sint reprehenderit qui ad et cillum.","spans":[]}],"imageFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"imageFirstReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"imageSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"imageSecondReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"rtl":false},{"title":"whiteboard 24/365 infomediaries","description":[{"type":"paragraph","text":"Duis nisi cupidatat voluptate nostrud id ea amet. Magna voluptate non deserunt dolor nisi deserunt irure pariatur laboris Lorem consectetur exercitation id ex. Dolore ut voluptate dolore elit eu exercitation nostrud labore velit eiusmod et.","spans":[]}],"imageFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"imageFirstReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"imageSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"imageSecondReveal":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"rtl":false}],"primary":{"slug":"mesh cross-platform action-items"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
