import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import { EffectFade, Swiper as SwiperClass } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass), {})
