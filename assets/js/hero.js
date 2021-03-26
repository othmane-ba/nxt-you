/******************************************************************
	
	
	@ Item          Gravity // Coming Soon - Under Construction
	@ Version       3.6
	@ Author		Avanzare
	@ Website		http://themeforest.net/user/avanzare 
	

 ******************************************************************/
 
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Backgrounds
	--  2. Effects
	--  3. Cycle
 
 
 ******************************************************************/




/** 1. BACKGROUNDS
*******************************************************************/

$(document).ready(function(){
	"use strict";	
	
	// CANVAS SPHERE BACKGROUND FUNCTION
	function canvasSphereBackground() {
	
		// Z-INDEX CORRECTION BACKGROUND OVERLAY 
		$(".hero .background-content .bg-overlay").css("z-index","2");
		
		// THREE.JS BASED
		var SCREEN_WIDTH = $(".hero .level-1").width(),
			SCREEN_HEIGHT = $(".hero .level-1").height(),
	
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
	
				camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
				camera.position.z = option_hero_background_sphere_distance;
	
				scene = new THREE.Scene();
				
				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				container.appendChild( renderer.domElement );
				renderer.setClearColor( option_hero_background_sphere_background_color );
				
				var PI2 = Math.PI * 2;
				var material = new THREE.SpriteCanvasMaterial( {
	
					color: option_hero_background_sphere_dot_color,
					program: function ( context ) {
	
						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();
	
					}
	
				} );
	
				for ( var i = 0; i < 1000; i ++ ) {
	
					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.multiplyScalar( 2 );
					scene.add( particle );
	
				}
	
				for (var i = 0; i < 300; i++) {
	
					var geometry = new THREE.Geometry();
	
					var vertex = new THREE.Vector3( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
					vertex.normalize();
					vertex.multiplyScalar( 450 );
	
					geometry.vertices.push( vertex );
	
					var vertex2 = vertex.clone();
					vertex2.multiplyScalar( Math.random() * 0.3 + 1 );
	
					geometry.vertices.push( vertex2 );
	
					var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: option_hero_background_sphere_line_color, opacity: Math.random() } ) );
					scene.add( line );
				}
	
				document.addEventListener( "mousemove", onDocumentMouseMove, false );
				document.addEventListener( "touchstart", onDocumentTouchStart, false );
				document.addEventListener( "touchmove", onDocumentTouchMove, false );
	
				window.addEventListener( "resize", onWindowResize, false );
	
			}
	
			function onWindowResize() {
				
				var SCREEN_WIDTH = $(".hero .level-1").width(),
					SCREEN_HEIGHT = $(".hero .level-1").height();
				
				windowHalfX = SCREEN_WIDTH / 2;
				windowHalfY = SCREEN_HEIGHT / 2;
	
				camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
				camera.updateProjectionMatrix();
	
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	
			}
	
			function onDocumentMouseMove(event) {
	
				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}
	
			function onDocumentTouchStart( event ) {
	
				if ( event.touches.length > 1 ) {
	
					event.preventDefault();
	
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
	
				}
	
			}
	
			function onDocumentTouchMove( event ) {
	
				if ( event.touches.length === 1 ) {
	
					event.preventDefault();
	
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
	
				}
	
			}
	
			function animate() {
	
				requestAnimationFrame( animate );
	
				render();
	
			}
			
			function render() {
				
				if (lem) {
					
					camera.position.x += ( mouseX - camera.position.x ) * 0.05;
					camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;
					camera.lookAt( scene.position );
					
					scene.rotation.y += option_hero_background_sphere_rotation_speed / 100;
					
					renderer.render( scene, camera );
				
				}
	
			}
			
			var lem = true;
			
			$( document ).scroll(function() {
			
				lem = $(this).scrollTop() <= $(window).height();
			
			});
	
	}

	// LOAD SCRIPT FUNCTION
	function loadScript(url, callback) {
		
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		script.onreadystatechange = callback;
		script.onload = callback;
		head.appendChild(script);
		
	}


	// BACKGROUND CONTROLLER
	loadScript("assets/js/plugins/three.min.js", function() {
		canvasSphereBackground();
	});


/** 3. EFFECT
*******************************************************************/
	
	// 2D HOVER EFFECT
	if ( option_hero_parallax_hover_effect == "on") {
		
		// PARALLAX HOVER EFFECT
		var $scene = $(".hero").parallax({
		
			scalarX: 24,
			scalarY: 15,
			frictionX: 0.1,
			frictionY: 0.1,
		
		});
		
		// DISABLE OR ENABLE PARALLAX ON MOUSEENTER MOUSELEAVE
		$( ".hero" ).hover(
			
			function() {
			
				$scene.parallax("enable");
			
			}, function() {
			
				$scene.parallax("disable");
			
			}
		
		);
	
	}


	// GRAVITY BACKGROUND EFFECT
	function gravityBackgroundEffect() {
			
			function Constellation (canvas, options) {
				
				var screenpointSplitt = 14000,
					movingSpeed = 0.2,
					viewportWidth = $(".hero .level-1").width(),
					viewportHeight = $(".hero .level-1").height(),
					nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplitt),
					$canvas = $(canvas),
					context = canvas.getContext("2d"),
					defaults = {
						star: {color: "rgba(255, 255, 255, .65)",width: 1},
						line: {color: "rgba(255, 255, 255, .65)",width: 0.2},
						position: {x: 0,y: 0},
						width: viewportWidth,
						height: viewportHeight,
						velocity: movingSpeed,
						length: nbCalculated,
						distance: 120,
						radius: 200,
						stars: []
					},
					
					config = $.extend(true, {}, defaults, options);
		
				function Star () {
					
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
		
					this.vx = (config.velocity - (Math.random() * 0.5));
					this.vy = (config.velocity - (Math.random() * 0.5));
		
					this.radius = Math.random() * config.star.width;
					
				}
		
				Star.prototype = {
				
					create: function(){
						
						context.beginPath();
						context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
						context.fill();
						
					},
		
					animate: function(){
						
						var i;
						for (i = 0; i < config.length; i++) {
		
							var star = config.stars[i];
		
							if (star.y < 0 || star.y > canvas.height) {
								
								star.vx = star.vx;
								star.vy = - star.vy;
								
							} else if (star.x < 0 || star.x > canvas.width) {
								
								star.vx = - star.vx;
								star.vy = star.vy;
								
							}
		
							star.x += star.vx;
							star.y += star.vy;
						}
						
					},
		
					line: function(){
						
						var length = config.length,
							iStar,
							jStar,
							i,
							j;
		
						for (i = 0; i < length; i++) {
							
							for (j = 0; j < length; j++) {
								
								iStar = config.stars[i];
								jStar = config.stars[j];
		
								if (
								
									(iStar.x - jStar.x) < config.distance &&
									(iStar.y - jStar.y) < config.distance &&
									(iStar.x - jStar.x) > - config.distance &&
									(iStar.y - jStar.y) > - config.distance
									
								) {
									if (
									
										(iStar.x - config.position.x) < config.radius &&
										(iStar.y - config.position.y) < config.radius &&
										(iStar.x - config.position.x) > - config.radius &&
										(iStar.y - config.position.y) > - config.radius
										
									) {
										
										context.beginPath();
										context.moveTo(iStar.x, iStar.y);
										context.lineTo(jStar.x, jStar.y);
										context.stroke();
										context.closePath();
										
									}
									
								}
								
							}
							
						}
						
					}
					
				};
	
				this.createStars = function () {
					
					var length = config.length,
						star,
						i;
					
					context.clearRect(0, 0, canvas.width, canvas.height);
		
					for (i = 0; i < length; i++) {
						
						config.stars.push(new Star());
						star = config.stars[i];
		
						star.create();
						
					}
					
					star.line();
					star.animate();
					config.stars.splice(length, length);
					
				};
		
				this.setCanvas = function () {
					
					canvas.width = config.width;
					canvas.height = config.height;
					
					context.fillStyle = config.star.color;
					context.strokeStyle = config.line.color;
					context.lineWidth = config.line.width;
					
					if (!options || !options.hasOwnProperty("position")) {
						
						config.position = {
							
							x: canvas.width * 0.5,
							y: canvas.height * 0.5
							
						};
						
					}
					
				};
		
				this.loop = function (callback) {
					
					callback();
		
					window.requestAnimationFrame(function () {
	  			
						this.loop(callback);
						
					}.bind(this));
					
				};
		
				this.bind = function () {
					
					$(window).on("mousemove", function(e){
						
						config.position.x = e.pageX - $canvas.offset().left;
						config.position.y = e.pageY - $canvas.offset().top;
						
					});
					
				};
		
				this.init = function () {
					
					this.setCanvas();
					this.loop(this.createStars);
					this.bind();
				};
				
			}
		
			$.fn.constellation = function (options) {
				
				return this.each(function () {
					
					var c = new Constellation(this, options);
					c.init();
					
				});
				
			};
		
		
			$("#canvas canvas").constellation({});
		
	  
		
		var waitForFinalEvent = (function () {
			
		  var timers = {};
		  
		  return function (callback, ms, uniqueId) {
			  
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			
			timers[uniqueId] = setTimeout(callback, ms);
			
		  };
		  
		})();
		
		$(window).resize(function () {
			
			waitForFinalEvent(function(){
					$("#canvas canvas").constellation({});
			}, 500, "some unique string");
			
		});
		
		
		
	} 	




/**	4. CYCLE
 *****************************************************/
	
	// VARIBABLES
	var cycleDuration = 800;
	var cycleDelay = 6000;
	
	
	
	// ADAPT DELAY TO SLIDER
	if (option_hero_background_mode === "slider") {
		
		cycleDuration = option_hero_background_slider_transitionDuration;
		cycleDelay = option_hero_background_slider_delay;	
		
	}
	
	
	
	// ADAPT DELAY TO KENBURNS SLIDER
	if (option_hero_background_mode === "kenburns") {
		
		cycleDuration = option_hero_background_kenburns_transitionDuration;
		cycleDelay = option_hero_background_kenburns_delay;	
		
	}
	
	
	 
	 // CYCLE SLIDESHOW
	 $("#cycle").cycle({
         
		fx : "scrollVert",
		timeout: cycleDelay,
		delay: 0,
		autoHeight: "container",
		speed: cycleDuration, 
		slides: ".slide",
		log: false
         
	});


	
});