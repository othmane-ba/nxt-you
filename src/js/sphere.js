/** SPHERE
 *******************************************************************/

import THREE from "./vendor/three-canvas-renderer.js";

const sphereDistance = 300;
const sphereRotationSpeed = 0.2;

let lem = true;

export class Sphere {

    constructor(selectorId) {
        // THREE.JS BASED
        this.SCREEN_WIDTH = $(".js-sphere-bg").width();
        this.SCREEN_HEIGHT = $(".js-sphere-bg").height();

        this.mouseX = 0;
        this.mouseY = 0;

        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.selectorId = selectorId;

        lem = true;

        $(document).scroll(() => {

            lem = $(document).scrollTop() <= this.SCREEN_HEIGHT;
            if ($(document).scrollTop() <= this.windowHalfY) {
                $('.js-sphere-overlay').removeClass("sphere__overlay--show");
            } else {
                $('.js-sphere-overlay').addClass("sphere__overlay--show");
            }
        });
        $('.js-down-button').click((e) => {
            e.preventDefault()
            $('html, body').animate({
                scrollTop: this.SCREEN_HEIGHT,
            }, {
                duration: 800
            })
        })
    }


    init() {

        const container = document.createElement("div");
        document.getElementById(this.selectorId).appendChild(container);

        this.camera = new THREE.PerspectiveCamera(75, this.SCREEN_WIDTH / this.SCREEN_HEIGHT, 1, 10000);
        this.camera.position.z = sphereDistance;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
        container.appendChild(this.renderer.domElement);
        this.renderer.setClearColor("#000000");

        const PI2 = Math.PI * 2;
        this.material = new THREE.SpriteCanvasMaterial({
            color: "#ffffff",
            program: function (context) {
                context.beginPath();
                context.arc(0, 0, 0.5, 0, PI2, true);
                context.fill();
            }
        });

        let particle;
        for (let i = 0; i < 1000; i++) {

            particle = new THREE.Sprite(this.material);
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar(Math.random() * 10 + 450);
            particle.scale.multiplyScalar(2);
            this.scene.add(particle);

        }

        for (let i = 0; i < 300; i++) {

            const geometry = new THREE.Geometry();

            const vertex = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
            vertex.normalize();
            vertex.multiplyScalar(450);

            geometry.vertices.push(vertex);

            const vertex2 = vertex.clone();
            vertex2.multiplyScalar(Math.random() * 0.3 + 1);

            geometry.vertices.push(vertex2);

            const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
                color: "#ffffff",
                opacity: Math.random()
            }));
            this.scene.add(line);
        }

        document.addEventListener("mousemove", this.onDocumentMouseMove.bind(this), false);
        document.addEventListener("touchstart", this.onDocumentTouchStart.bind(this), false);
        document.addEventListener("touchmove", this.onDocumentTouchMove.bind(this), false);

        window.addEventListener("resize", this.onWindowResize.bind(this), false);

        this.animate();
    }

    onWindowResize() {

        this.SCREEN_WIDTH = $(".js-sphere-bg").width();
        this.SCREEN_HEIGHT = $(".js-sphere-bg").height();

        this.windowHalfX = this.SCREEN_WIDTH / 2;
        this.windowHalfY = this.SCREEN_HEIGHT / 2;

        this.camera.aspect = this.SCREEN_WIDTH / this.SCREEN_HEIGHT;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    }

    onDocumentMouseMove(event) {
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
    }

    onDocumentTouchStart(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.render();
    }

    render() {
        if (lem) {
            this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
            this.camera.position.y += (-this.mouseY + 200 - this.camera.position.y) * 0.05;
            this.camera.lookAt(this.scene.position);
            this.scene.rotation.y += sphereRotationSpeed / 100;
            this.renderer.render(this.scene, this.camera);
        }
    }

}

/**    2. TITLE ANIMATION
 *****************************************************/

// TODO
