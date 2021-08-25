let Splitting = null

const AnimateText = function (el) {
  const results = Splitting({ target: el })
  this.$gsap.set(results[0].el, { overflow: 'hidden' })
  this.$gsap.set(results[0].chars, { display: 'inline-block' })
  this.$gsap.from(results[0].chars, 0.6, {
    autoAlpha: 0,
    y: 20,
    skewY: 4,
    stagger: {
      amount: 0.6,
    },
    ease: 'Power3.easeOut',
  })
}
const AnimateBox = function (el) {
  this.$gsap.from(el, 0.8, {
    autoAlpha: 0,
    y: 20,
    stagger: 0.1,
    ease: 'Power3.easeOut',
  })
}
export default (context, inject) => {
  if (process.client) {
    Splitting = require('splitting')
  }

  const animate = {
    text: (e) => AnimateText.call(context, e.target.element),
    children: (e) =>
      AnimateBox.call(context, e.target.element.querySelectorAll(':scope > *')),
    box: (e) => AnimateBox.call(context, e.target.element),
  }

  inject('animate', animate)
}
