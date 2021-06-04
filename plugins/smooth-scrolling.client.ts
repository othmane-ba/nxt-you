import Parallax from '~/assets/scripts/parallax'

export default (app: any, inject: any) => {
  const smooth = new Parallax({
    native: true,
    section: document.querySelector('.vs-section'),
    ease: app.$device.isMobileOrTablet ? 1 : 0.1,
    divs: document.querySelectorAll('.vs-div'),
  })

  inject('smooth', smooth)
}
