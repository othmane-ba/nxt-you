import simpleParallax from 'simple-parallax-js'
const elems = document.querySelectorAll('[data-parallax]')
console.log(elems)
elems.forEach(function (elem) {
  new simpleParallax(elem, {
    overflow: elem.hasAttribute('data-overflow'),
    // @ts-ignore
    delay: elem.getAttribute('data-delay') || 0,
    // @ts-ignore
    scale: elem.getAttribute('data-scale') || 1.4,
  })
})
