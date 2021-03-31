/******************************************************************


 @ Item          Gravity // Coming Soon - Under Construction
 @ Version       3.6
 @ Author        Avanzare
 @ Website        http://themeforest.net/user/avanzare


 ******************************************************************/

/******************************************************************


 ------------------------
 -- TABLE OF CONTENTS --
 ------------------------

 --  1. ReadMe
 --  2. Overlay Config
 --  3. Hero Config
 --    4. Hero Background Config
 --  5. Google Analytics


 ******************************************************************/

/** 1. README
 *******************************************************************/

// !!! 1. DO NOT REMOVE QUOTATION MARKS WHEN GIVEN !!!
// !!! 2. SAVE THE FILE AND REFRESH YOUR BROWSER TO SEE CHANGES !!!

/**    2. OVERLAY CONFIG
 *******************************************************************/

// OVERLAY SKIN OPTION  [ "black" : "white" ]

// "black" = BLACK COLOR SCHEME
// "white" = WHITE COLOR SCHEME

var option_overlay_skin = "black";

// OVERLAY ANIMATION  [ "fade" : "slide" ]

// "fade" = FADE ANIMATION
// "slide" = SLIDE FROM BOTTOM ANIMATION

var option_overlay_animation = "fade";

// OVERLAY CONTENT ANIMATION  [ "fade" : "slide" ]

// "fade" = FADE ANIMATION
// "slide" = SLIDE FROM BOTTOM ANIMATION

var option_overlay_content_animation = "slide";

// OVERLAY BULLET NAVIGATION [ "on" : "off" ]

// "on" = ENABLE BULLET NAVIGATION
// "off" = DISABLE BULLET NAVIGATION

var option_overlay_bullet_navigation = "on";

// OVERLAY SECTION MERGE ON MOBILE DEVICES [ "on" : "off" ]

// "on" = ENABLE SECTION MERGE ON MOBILE
// "off" = DISABLE SECTION MERGE ON MOBILE

var option_overlay_merge_sections_on_mobile = "on";

/** 3. HERO CONFIG
 *******************************************************************/

// HERO PARALLAX HOVER EFFECT - [ "on" : "off" ]

// "on" = OPTION ACTIVATED
// "off" = OPTION DEACTIVATED

var option_hero_parallax_hover_effect = "on";

// GRAVITY PARTICLE BACKGROUND EFFECT - [ "on" : "off" ]

// "on" = OPTION ACTIVATED
// "off" = OPTION DEACTIVATED

var option_hero_gravity_effect = "on";

// BACKGROUND MODE = ONLY SPHERE

var option_hero_background_mode = "sphere";

/** 4 HERO BACKGROUND CONFIG
 *******************************************************************/

// OBJECT DISTANCE
var option_hero_background_sphere_distance = 300;

// OBJECT ROTATION SPEED
var option_hero_background_sphere_rotation_speed = 0.2;

// SPHERE LINE COLOR
var option_hero_background_sphere_line_color = "#ffffff";

// SPHERE DOT COLOR
var option_hero_background_sphere_dot_color = "#ffffff";

// BACKGROUND COLOR
var option_hero_background_sphere_background_color = "#000000";

/**    5. GOOGLE ANALYTICS
 *******************************************************************/

// GOOGLE ANALYTICS - [ "on" : "off" ]

// "on" = GOOGLE ANALYTICS ON
// "off" = GOOGLE ANALYTICS OFF

var option_analytics_tracking = "off";

// TRACKING ID
var option_analytics_tracking_id = "UA-XXXXXXXX-X";


/******************************************************************


 @ Item          Gravity // Coming Soon - Under Construction
 @ Version       3.6
 @ Author        Avanzare
 @ Website        http://themeforest.net/user/avanzare


 ******************************************************************/


/******************************************************************


 ------------------------
 -- TABLE OF CONTENTS --
 ------------------------

 --  1. Background
 --  2. Title animation


 ******************************************************************/


/** 1. BACKGROUND
 *******************************************************************/

$(document).ready(function () {
    "use strict";

    // CANVAS SPHERE BACKGROUND FUNCTION
    function canvasSphereBackground() {

        // Z-INDEX CORRECTION BACKGROUND OVERLAY
        $(".bg-overlay").css("z-index", "2");

        // THREE.JS BASED
        var SCREEN_WIDTH = $(".level-1").width(),
            SCREEN_HEIGHT = $(".level-1").height(),

            mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,

            camera, scene, renderer;

        init();
        animate();

        function init() {

            var container, separation = 100, amountX = 50, amountY = 50,
                particles, particle;

            container = document.createElement("div");
            document.getElementById("canvas").appendChild(container);

            camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
            camera.position.z = option_hero_background_sphere_distance;

            scene = new THREE.Scene();

            renderer = new THREE.CanvasRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            container.appendChild(renderer.domElement);
            renderer.setClearColor(option_hero_background_sphere_background_color);

            var PI2 = Math.PI * 2;
            var material = new THREE.SpriteCanvasMaterial({

                color: option_hero_background_sphere_dot_color,
                program: function (context) {

                    context.beginPath();
                    context.arc(0, 0, 0.5, 0, PI2, true);
                    context.fill();

                }

            });

            for (var i = 0; i < 1000; i++) {

                particle = new THREE.Sprite(material);
                particle.position.x = Math.random() * 2 - 1;
                particle.position.y = Math.random() * 2 - 1;
                particle.position.z = Math.random() * 2 - 1;
                particle.position.normalize();
                particle.position.multiplyScalar(Math.random() * 10 + 450);
                particle.scale.multiplyScalar(2);
                scene.add(particle);

            }

            for (var i = 0; i < 300; i++) {

                var geometry = new THREE.Geometry();

                var vertex = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                vertex.normalize();
                vertex.multiplyScalar(450);

                geometry.vertices.push(vertex);

                var vertex2 = vertex.clone();
                vertex2.multiplyScalar(Math.random() * 0.3 + 1);

                geometry.vertices.push(vertex2);

                var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
                    color: option_hero_background_sphere_line_color,
                    opacity: Math.random()
                }));
                scene.add(line);
            }

            document.addEventListener("mousemove", onDocumentMouseMove, false);
            document.addEventListener("touchstart", onDocumentTouchStart, false);
            document.addEventListener("touchmove", onDocumentTouchMove, false);

            window.addEventListener("resize", onWindowResize, false);

        }

        function onWindowResize() {

            var SCREEN_WIDTH = $(".hero .level-1").width(),
                SCREEN_HEIGHT = $(".hero .level-1").height();

            windowHalfX = SCREEN_WIDTH / 2;
            windowHalfY = SCREEN_HEIGHT / 2;

            camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
            camera.updateProjectionMatrix();

            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

        }

        function onDocumentMouseMove(event) {

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }

        function onDocumentTouchStart(event) {

            if (event.touches.length > 1) {

                event.preventDefault();

                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;

            }

        }

        function onDocumentTouchMove(event) {

            if (event.touches.length === 1) {

                event.preventDefault();

                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;

            }

        }

        function animate() {

            requestAnimationFrame(animate);

            render();

        }

        function render() {

            if (lem) {

                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                scene.rotation.y += option_hero_background_sphere_rotation_speed / 100;

                renderer.render(scene, camera);

            }

        }

        var lem = true;

        $(document).scroll(function () {

            lem = $(this).scrollTop() <= $(window).height();

        });

    }

    // BACKGROUND CONTROLLER
    canvasSphereBackground();

    /**    2. TITLE ANIMATION
     *****************************************************/

    // TODO

});