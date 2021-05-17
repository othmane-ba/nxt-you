import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import {
  Autoplay,
  EffectFade,
  Pagination,
  Swiper as SwiperClass,
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Autoplay, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass), {})
