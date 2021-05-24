<template>
  <div>
    <PageLoader />
    <Pointer />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    setTimeout(() => {
      document.body.classList.remove('fixed', 'overflow-y-scroll')
      this.$nuxt.$emit('page-loaded')
    }, 1000)
  },
})
</script>
<style lang="postcss">
section {
  @apply py-32;

  &:first-of-type {
    @apply pt-0;
  }
}
</style>

<style lang="postcss">
/* 9.1. Loading animations */
[data-animation-box],
[data-animation-text] {
  animation-fill-mode: both;
}

[data-animation]:before,
[data-animation]:after,
[data-animation] {
  opacity: 0;
}

[data-animation].animated:before,
[data-animation].animated:after,
[data-animation].animated {
  opacity: 1;
}

/* 9.1.1. Loading overlay animation #1 */
.overlay-loading {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.overlay-loading:before {
  content: '';
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 100%;
  transition: 1.8s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  z-index: 3;
  transform: translateX(-202%);
}

body.anim .overlay-loading:before {
  transform: translateX(1%);
}

.loading-opacity-anim {
  opacity: 0;
  transition: 0s;
  transition-delay: 0.86s;
}

body.anim .loading-opacity-anim {
  opacity: 1;
}

.tr-delay01 .loading-opacity-anim {
  transition-delay: 0.96s;
}

.tr-delay02 .loading-opacity-anim {
  transition-delay: 1.06s;
}

.tr-delay03 .loading-opacity-anim {
  transition-delay: 1.16s;
}

.tr-delay04 .loading-opacity-anim {
  transition-delay: 1.26s;
}

.tr-delay05 .loading-opacity-anim {
  transition-delay: 1.36s;
}

.tr-delay06 .loading-opacity-anim {
  transition-delay: 1.46s;
}

.tr-delay07 .loading-opacity-anim {
  transition-delay: 1.56s;
}

.tr-delay08 .loading-opacity-anim {
  transition-delay: 1.66s;
}

.tr-delay09 .loading-opacity-anim {
  transition-delay: 1.76s;
}

.tr-delay10 .loading-opacity-anim {
  transition-delay: 1.86s;
}

/* 9.1.2. Loading overlay animation #2 */
.overlay-loading2 {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.overlay-loading2:before {
  content: '';
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 1s cubic-bezier(0.858, 0.01, 0.068, 0.99);
  z-index: 3;
  transform: translateX(0);
}

body.anim .overlay-loading2:before {
  transform: translateX(110%);
}

/* 9.1.3. Loading fade animation */
.fade-loading {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
}

body.anim .fade-loading {
  opacity: 1;
  transform: translateY(0);
}

/* 9.1.4. Loading title fill animation */
.load[data-animation-text] {
  white-space: nowrap;
  color: transparent;
  position: relative;
  display: inline-block;
}

.load[data-animation-text]:before,
.load[data-animation-text]:after {
  content: attr(data-animation-text);
  position: absolute;
  top: 50%;
  color: white;
  transform: translateY(-50%);
  left: 0;
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}

.load[data-animation-text]:after {
  color: white;
  background: transparent;
}

body.anim .load[data-animation-text]:before,
body.anim .load[data-animation-text]:after {
  width: 100%;
}

.tr-delay01.load[data-animation-text]:after {
  transition-delay: 0.4s !important;
}

.tr-delay02.load[data-animation-text]:after {
  transition-delay: 0.5s !important;
}

.tr-delay03.load[data-animation-text]:after {
  transition-delay: 0.6s !important;
}

.tr-delay04.load[data-animation-text]:after {
  transition-delay: 0.7s !important;
}

.tr-delay05.load[data-animation-text]:after {
  transition-delay: 0.8s !important;
}

.tr-delay06.load[data-animation-text]:after {
  transition-delay: 0.9s !important;
}

.tr-delay07.load[data-animation-text]:after {
  transition-delay: 1s !important;
}

.tr-delay08.load[data-animation-text]:after {
  transition-delay: 1.1s !important;
}

.tr-delay09.load[data-animation-text]:after {
  transition-delay: 1.2s !important;
}

.tr-delay10.load[data-animation-text]:after {
  transition-delay: 1.3s !important;
}

/* 9.2. Scroll animations */

/* 9.2.1. Scroll overlay animation #1 */
[data-animation].overlay-anim-box:before,
[data-animation].overlay-anim-box:after,
[data-animation].overlay-anim-box {
  opacity: 1;
}

.overlay-anim-box {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.overlay-anim-box:before {
  content: '';
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 100%;
  transition: 1.8s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  z-index: 3;
  transform: translateX(-202%);
}

.overlay-anim-box.overlay-anim:before {
  transform: translateX(1%);
}

.overlay-opacity-anim {
  opacity: 0;
  transition: 0s;
  transition-delay: 0.86s;
}

.overlay-anim .overlay-opacity-anim {
  opacity: 1;
}

.tr-delay01 .overlay-opacity-anim {
  transition-delay: 0.96s;
}

.tr-delay02 .overlay-opacity-anim {
  transition-delay: 1.06s;
}

.tr-delay03 .overlay-opacity-anim {
  transition-delay: 1.16s;
}

.tr-delay04 .overlay-opacity-anim {
  transition-delay: 1.26s;
}

.tr-delay05 .overlay-opacity-anim {
  transition-delay: 1.36s;
}

.tr-delay06 .overlay-opacity-anim {
  transition-delay: 1.46s;
}

.tr-delay07 .overlay-opacity-anim {
  transition-delay: 1.56s;
}

.tr-delay08 .overlay-opacity-anim {
  transition-delay: 1.66s;
}

.tr-delay09 .overlay-opacity-anim {
  transition-delay: 1.76s;
}

.tr-delay10 .overlay-opacity-anim {
  transition-delay: 1.86s;
}

/* 9.2.2. Scroll overlay animation #2 */
[data-animation].overlay-anim-box2:before,
[data-animation].overlay-anim-box2:after,
[data-animation].overlay-anim-box2 {
  opacity: 1;
}

.overlay-anim-box2 {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.overlay-anim-box2:before {
  content: '';
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 1s cubic-bezier(0.858, 0.01, 0.068, 0.99);
  z-index: 3;
  transform: translateX(0);
}

.overlay-anim-box2.overlay-anim2:before {
  transform: translateX(110%);
}

/* 9.2.3. Scroll fade animation */
[data-animation-box] {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
}

/* 9.2.4. Scroll title fill animation */
[data-animation-text]:before,
[data-animation-text]:after,
[data-animation-text] {
  opacity: 1;
}

[data-animation-text] {
  white-space: nowrap;
  color: transparent;
  position: relative;
  display: inline-block;
}

[data-animation-text]:before,
[data-animation-text]:after {
  content: attr(data-animation-text);
  position: absolute;
  top: 50%;
  color: white;
  transform: translateY(-50%);
  left: 0;
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}

[data-animation-text]:after {
  color: blue;
  background: transparent;
  transition-delay: 0.3s;
}

.view-in {
  [data-animation-text]:before,
  [data-animation-text]:after {
    width: 100%;
  }

  [data-animation-box] {
    opacity: 1;
    transform: translateY(0);
  }
}

.tr-delay01[data-animation-text]:after {
  transition-delay: 0.4s !important;
}

.tr-delay02[data-animation-text]:after {
  transition-delay: 0.5s !important;
}

.tr-delay03[data-animation-text]:after {
  transition-delay: 0.6s !important;
}

.tr-delay04[data-animation-text]:after {
  transition-delay: 0.7s !important;
}

.tr-delay05[data-animation-text]:after {
  transition-delay: 0.8s !important;
}

.tr-delay06[data-animation-text]:after {
  transition-delay: 0.9s !important;
}

.tr-delay07[data-animation-text]:after {
  transition-delay: 1s !important;
}

.tr-delay08[data-animation-text]:after {
  transition-delay: 1.1s !important;
}

.tr-delay09[data-animation-text]:after {
  transition-delay: 1.2s !important;
}

.tr-delay10[data-animation-text]:after {
  transition-delay: 1.3s !important;
}

/*--------------------------------------------------------------
10. Hovers
--------------------------------------------------------------*/
.hover-content {
  transition: 1s cubic-bezier(0.767, 0.01, 0.18, 1.01);
  display: inline-block;
}

.hover-box:hover .hover-content {
  transform: translateX(20px);
}

.hover-img {
  transition: 1s cubic-bezier(0.858, 0.01, 0.068, 0.99);
}

.hover-box:hover .hover-img {
  transform: scale(1.1);
}

.hidden-box {
  overflow: hidden;
}

.hover-fill-effect {
  position: relative;
  white-space: nowrap;
  display: inline-block;
}

.hover-fill-effect:before {
  content: attr(data-animation-text);
  position: absolute;
  top: 0;
  color: blue;
  left: 0;
  transition: 0.8s cubic-bezier(0.858, 0.01, 0.068, 0.99);
  width: 0;
  white-space: nowrap;
  z-index: 2;
  background: transparent;
  overflow: hidden;
}

.hover-box:hover .hover-fill-effect:before {
  width: 100%;
}

.hover-fill-effect:after {
  content: '';
  width: 40px;
  height: 2px;
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  background: blue;
  transition: 1.2s cubic-bezier(0.17, 0.85, 0.438, 0.99);
}

.hover-box:hover .hover-fill-effect:after {
  transform: translateY(-50%) scaleX(1);
}

.tr-delay01 .hover-img {
  transition-delay: 0.1s;
}

.tr-delay02 .hover-img {
  transition-delay: 0.2s;
}

.tr-delay03 .hover-img {
  transition-delay: 0.3s;
}

.tr-delay04 .hover-img {
  transition-delay: 0.4s;
}

.tr-delay05 .hover-img {
  transition-delay: 0.5s;
}

.tr-delay06 .hover-img {
  transition-delay: 0.6s;
}

.tr-delay07 .hover-img {
  transition-delay: 0.7s;
}

.tr-delay08 .hover-img {
  transition-delay: 0.8s;
}

.tr-delay09 .hover-img {
  transition-delay: 0.9s;
}

.tr-delay10 .hover-img {
  transition-delay: 1s;
}
</style>
