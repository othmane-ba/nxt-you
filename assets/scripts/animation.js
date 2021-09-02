const Splitting = require('splitting')
import { TimelineLite, TweenLite } from 'gsap/all'

const defaultOptions = {
  animation: {
    box: [
      0.8,
      {
        autoAlpha: 0,
        y: 20,
        stagger: 0.1,
        ease: 'Power3.easeOut',
      },
    ],
    text: [
      0.6,
      {
        autoAlpha: 0,
        y: 20,
        skewY: 4,
        stagger: {
          amount: 0.6,
        },
        ease: 'Power3.easeOut',
      },
    ],
  },
  timeline: {
    paused: true,
  },
}

export default class Animation {
  constructor(el, type) {
    this.el = el
    this.type = type
    this.options = defaultOptions
    switch (type) {
      case 'text': {
        const results = Splitting({ target: el })
        TweenLite.set(el, { overflow: 'hidden' })
        this.el = results[0].chars
        break
      }
      case 'children': {
        this.el = el.querySelectorAll(':scope > *')
        this.type = 'box'
        break
      }
    }
    this.tl = new TimelineLite(this.options.timeline).from(
      this.el,
      ...this.options.animation[this.type]
    )
  }

  start() {
    this.tl.play(0)
  }
}
