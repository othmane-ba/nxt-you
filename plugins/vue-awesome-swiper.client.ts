import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import { Swiper as SwiperClass } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

Vue.use(getAwesomeSwiper(SwiperClass), {})
