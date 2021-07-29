import simpleParallax from 'simple-parallax-js'

document.querySelectorAll('[data-parallax]').forEach(function (elem) {
  new simpleParallax(elem, {
    overflow: elem.hasAttribute('data-overflow'),
    delay: elem.getAttribute('data-delay') || 0,
    scale: elem.getAttribute('data-scale') || 1.4,
    orientation: elem.getAttribute('data-orientation') || 'up',
  })
})
