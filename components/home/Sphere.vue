<template>
  <transition
    enter-active-class="transition-all ease-in-out duration-1000"
    enter-class="top-full opacity-0"
    leave-active-class="transition-all ease-in-out duration-1000 delay-1500"
    leave-to-class="top-full opacity-0"
  >
    <div v-show="showPage" class="fixed top-0 left-0 h-screen w-full -z-10">
      <div
        class="absolute t-0 l-0 h-full w-full bg-black transition-opacity opacity-0 duration-500"
        :class="{ 'opacity-75': overlayActive }"
      ></div>
      <div>
        <div ref="sphere"></div>
      </div>
    </div>
  </transition>
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
  static particleCount = 1000
  static lineCount = 300
  static color = new THREE.Color('#a0a0a0')

  @Ref('sphere') readonly container!: Element

  eventListener: EventListener[] = [
    new EventListener('scroll', this.onScroll.bind(this)),
    new EventListener('mousemove', this.onDocumentMouseMove.bind(this)),
    new EventListener('touchstart', this.onDocumentTouchStart.bind(this)),
    new EventListener('touchmove', this.onDocumentTouchMove.bind(this)),
    new EventListener('resize', this.onWindowResize.bind(this), false),
  ]

  showPage = false
  scrollTop = 0
  screenWidth = 0
  screenHeight = 0
  mouseX = 0
  mouseY = 0
  camera!: THREE.PerspectiveCamera
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer

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

    this.initParticles()
    this.initLines()
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

  private initParticles(): void {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
    ])
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      opacity: Math.random(),
      uniforms: {
        size: { value: 2.5 },
        scale: { value: 1 },
        color: { value: ClassSphere.color },
      },
      vertexShader: THREE.ShaderLib.points.vertexShader,
      fragmentShader: `
    uniform vec3 color;
    void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        gl_FragColor = vec4(color, step(ll, 0.5));
    }
    `,
    })
    let particle
    for (let i = 0; i < ClassSphere.particleCount; i++) {
      particle = new THREE.Points(geometry, material)
      particle.position.x = Math.random() * 2 - 1
      particle.position.y = Math.random() * 2 - 1
      particle.position.z = Math.random() * 2 - 1
      particle.position.normalize()
      particle.position.multiplyScalar(Math.random() * 10 + 450)
      particle.scale.multiplyScalar(2)
      this.scene.add(particle)
    }
  }

  private initLines(): void {
    for (let i = 0; i < ClassSphere.lineCount; i++) {
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
            transparent: true,
            depthWrite: false,
            opacity: Math.random(),
          })
        )
      )
    }
  }

  private addEventListener(): void {
    this.eventListener.forEach((listener: EventListener) => listener.add())
    this.$nuxt.$on('page-loaded', () => {
      this.showPage = true
    })
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
    return true
    /*
    return this.scrollTop <= this.screenHeight
*/
  }
}
</script>

<style scoped></style>
