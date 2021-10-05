import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import { EffectFade, Lazy, Swiper as SwiperClass } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([EffectFade, Lazy])

Vue.use(getAwesomeSwiper(SwiperClass), {})
