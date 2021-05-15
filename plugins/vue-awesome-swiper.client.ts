import Vue from 'vue'
import 'swiper/swiper-bundle.css'

import { Pagination, Swiper as SwiperClass } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination])

Vue.use(getAwesomeSwiper(SwiperClass), {})
