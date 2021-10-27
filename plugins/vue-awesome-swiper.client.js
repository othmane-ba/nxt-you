import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import {
  EffectFade,
  Lazy,
  Controller,
  Swiper as SwiperClass,
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([EffectFade, Lazy, Controller])

Vue.use(getAwesomeSwiper(SwiperClass), {})
