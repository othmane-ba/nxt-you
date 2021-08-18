import MyComponent from '../../../../slices/BorderIconList';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BorderIconList'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"border_icon_list","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"imageActive":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"link":"matrix sticky supply-chains"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"imageActive":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"link":"envisioneer impactful content"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
