<template>
  <div class="fixed t-0 l-0 h-screen w-full -z-10">
    <div
      class="absolute t-0 l-0 h-full w-full bg-black bg-opacity-100 transition-opacity opacity-0 duration-500"
      :class="{ 'opacity-100': overlayActive }"
    ></div>

    <div class="sphere__inner js-sphere-bg">
      <div id="canvas">
        <div ref="sphere"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import * as THREE from 'three'

class EventListener {
  constructor(
    public type: string,
    public fn: EventListenerOrEventListenerObject,
    public isDocumentListener: boolean = true
  ) {}

  add(): void {
    this._getElem().addEventListener(this.type, this.fn, false)
  }

  remove(): void {
    this._getElem().removeEventListener(this.type, this.fn)
  }

  private _getElem(): Document | Window {
    return this.isDocumentListener ? document : window
  }
}

@Component
export default class ClassSphere extends Vue {
  static sphereDistance = 300
  static sphereRotationSpeed = 0.1
  static color = 0x666666

  @Ref('sphere') readonly container!: Element

  eventListener: EventListener[] = [
    new EventListener('scroll', this.onScroll.bind(this)),
    new EventListener('mousemove', this.onDocumentMouseMove.bind(this)),
    new EventListener('touchstart', this.onDocumentTouchStart.bind(this)),
    new EventListener('touchmove', this.onDocumentTouchMove.bind(this)),
    new EventListener('resize', this.onWindowResize.bind(this), false),
  ]

  scrollTop = 0
  screenWidth = 0
  screenHeight = 0
  mouseX = 0
  mouseY = 0
  camera!: THREE.PerspectiveCamera
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer
  material!: THREE.SpriteMaterial

  public mounted(): void {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.init()
    this.addEventListener()
    this.animate()
  }

  public beforeDestroy(): void {
    this.removeEventListener()
  }

  private init(): void {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.screenWidth / this.screenHeight,
      1,
      10000
    )
    this.camera.position.z = ClassSphere.sphereDistance
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.screenWidth, this.screenHeight)
    this.container.appendChild(this.renderer.domElement)
    this.renderer.setClearColor('#000000')
    this.material = new THREE.SpriteMaterial({
      color: ClassSphere.color,
      /*
      program: function (context: any) {
        context.beginPath()
        context.arc(0, 0, 0.5, 0, Math.PI * 2, true)
        context.fill()
      },
*/
    })

    let particle
    for (let i = 0; i < 1000; i++) {
      particle = new THREE.Sprite(this.material)
      particle.position.x = Math.random() * 2 - 1
      particle.position.y = Math.random() * 2 - 1
      particle.position.z = Math.random() * 2 - 1
      particle.position.normalize()
      particle.position.multiplyScalar(Math.random() * 10 + 450)
      particle.scale.multiplyScalar(2)
      this.scene.add(particle)
    }

    for (let i = 0; i < 300; i++) {
      const vertex = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      )
      vertex.normalize()
      vertex.multiplyScalar(450)
      const vertex2 = vertex.clone()
      vertex2.multiplyScalar(Math.random() * 0.3 + 1)
      this.scene.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([vertex, vertex2]),
          new THREE.LineBasicMaterial({
            color: ClassSphere.color,
            opacity: Math.random(),
          })
        )
      )
    }
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate())
    this.renderSphere()
  }

  private renderSphere(): void {
    if (this.sphereActive) {
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
      this.camera.position.y +=
        (-this.mouseY + 200 - this.camera.position.y) * 0.05
      this.camera.lookAt(this.scene.position)
      this.scene.rotation.y += ClassSphere.sphereRotationSpeed / 100
      this.renderer.render(this.scene, this.camera)
    }
  }

  private addEventListener(): void {
    this.eventListener.forEach((listener: EventListener) => listener.add())
  }

  private removeEventListener(): void {
    this.eventListener.forEach((listener: EventListener) => listener.remove())
  }

  private onScroll(event: any): void {
    this.scrollTop = window.scrollY
  }

  private onWindowResize(): void {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight

    this.camera.aspect = this.screenWidth / this.screenHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.screenWidth, this.screenHeight)
  }

  private onDocumentMouseMove(event: any): void {
    this.mouseX = event.clientX - this.screenWidth / 2
    this.mouseY = event.clientY - this.screenHeight / 2
  }

  private onDocumentTouchStart(event: any): void {
    if (event.touches.length > 1) {
      event.preventDefault()
      this.mouseX = event.touches[0].pageX - this.screenWidth / 2
      this.mouseY = event.touches[0].pageY - this.screenHeight / 2
    }
  }

  private onDocumentTouchMove(event: any) {
    if (event.touches.length === 1) {
      event.preventDefault()
      this.mouseX = event.touches[0].pageX - this.screenWidth / 2
      this.mouseY = event.touches[0].pageY - this.screenHeight / 2
    }
  }

  public get overlayActive(): boolean {
    return this.scrollTop > this.screenHeight / 2
  }

  public get sphereActive(): boolean {
    return this.scrollTop <= this.screenHeight
  }
}
</script>

<style scoped></style>
