import Parallax from '~/assets/scripts/parallax'

export default (
  app: { isMobileOrTablet: any },
  inject: (arg0: string, arg1: Parallax) => void
) => {
  const smooth = new Parallax({
    native: true,
    section: document.querySelector('.vs-section'),
    ease: app.isMobileOrTablet ? 1 : 0.1,
    divs: document.querySelectorAll('.vs-div'),
  })

  inject('smooth', smooth)
}
