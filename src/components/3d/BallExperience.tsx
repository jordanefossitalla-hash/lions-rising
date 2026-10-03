import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createSoccerBallTextures } from './generateBallTexture';
import logoUrl from '@/assets/logo-bmas.png';
import { Sparkles, Eye, RotateCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function BallExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [kickCount, setKickCount] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // References to communicate with Three.js from React events
  const kickTriggerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL availability
    const canvasTest = document.createElement('canvas');
    const hasWebGL = !!(
      window.WebGLRenderingContext &&
      (canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl'))
    );
    if (!hasWebGL) {
      console.warn('WebGL is not supported in this environment. 3D ball disabled.');
      return;
    }

    // --- 1. SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none'; // Background layer by default
    canvas.style.zIndex = '5'; // Above hero bg, below interactive UI buttons
    containerRef.current.appendChild(canvas);

    // --- 2. LIGHTING (Stadium Floodlights) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Key Stadium Floodlight (Crisp pure white highlights)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // BMAS Gold Rim Light (Dramatic silhouette glow)
    const rimGoldLight = new THREE.DirectionalLight(0xf59e0b, 2.4);
    rimGoldLight.position.set(-6, -4, -4);
    scene.add(rimGoldLight);

    // Cameroon Emerald Fill Light
    const fillLight = new THREE.DirectionalLight(0x007a3d, 1.2);
    fillLight.position.set(0, -6, 5);
    scene.add(fillLight);

    // Specular Accent Spotlight
    const spotLight = new THREE.SpotLight(0x60a5fa, 2.5, 30, Math.PI / 6, 0.4);
    spotLight.position.set(0, 10, 8);
    scene.add(spotLight);

    // --- 3. 3D BMAS SOCCER BALL ---
    let currentTextures = createSoccerBallTextures(null);
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    currentTextures.colorTexture.anisotropy = maxAnisotropy;
    currentTextures.bumpTexture.anisotropy = maxAnisotropy;
    currentTextures.roughnessTexture.anisotropy = maxAnisotropy;

    const ballGroup = new THREE.Group();
    scene.add(ballGroup);

    const ballRadius = 1.35;
    const ballGeometry = new THREE.SphereGeometry(ballRadius, 96, 96);
    const ballMaterial = new THREE.MeshStandardMaterial({
      map: currentTextures.colorTexture,
      bumpMap: currentTextures.bumpTexture,
      bumpScale: 0.075,
      roughnessMap: currentTextures.roughnessTexture,
      roughness: 0.32,
      metalness: 0.1,
    });

    const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
    ballMesh.castShadow = true;
    ballMesh.receiveShadow = true;
    // Orient ball so the official BMAS crest faces forward
    ballMesh.rotation.y = -Math.PI * 0.45;
    ballGroup.add(ballMesh);

    // Asynchronously load the official BMAS logo and stamp it onto the textures
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    logoImg.src = logoUrl;
    logoImg.onload = () => {
      currentTextures.stampLogo(logoImg);
    };

    // Subtle golden energetic aura ring around the ball
    const auraGeometry = new THREE.SphereGeometry(ballRadius * 1.03, 32, 32);
    const auraMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    });
    const auraMesh = new THREE.Mesh(auraGeometry, auraMaterial);
    ballGroup.add(auraMesh);

    // --- 4. FLOATING STADIUM EMBERS (PARTICLES) ---
    const particleCount = 600;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 28;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
      particleScales[i] = Math.random() * 0.08 + 0.03;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.1,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- 5. SPARK BURST ON KICK ---
    const sparkCount = 45;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = 0;
      sparkPositions[i * 3 + 1] = 0;
      sparkPositions[i * 3 + 2] = 0;
      sparkVelocities.push({ x: 0, y: 0, z: 0 });
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xffdd44,
      size: 0.16,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const sparkSystem = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparkSystem);

    let sparkLife = 0;

    // --- 6. INITIAL POSITION & RESPONSIVE SETUP ---
    const isMobile = () => window.innerWidth < 768;

    const setInitialLayout = () => {
      if (isMobile()) {
        ballGroup.position.set(0, -2.1, 0.5);
        ballGroup.scale.setScalar(0.72);
      } else {
        ballGroup.position.set(3.3, -0.1, 1.2);
        ballGroup.scale.setScalar(1.0);
      }
    };
    setInitialLayout();

    // --- 7. PHYSICAL KICK IMPULSE ---
    let kickImpulse = { y: 0, rotX: 0, rotY: 0, rotZ: 0 };

    const triggerKick = () => {
      setKickCount((prev) => prev + 1);

      // Elastic squash & stretch animation
      gsap.timeline()
        .to(ballGroup.scale, {
          x: (isMobile() ? 0.72 : 1.0) * 1.25,
          y: (isMobile() ? 0.72 : 1.0) * 0.75,
          duration: 0.08,
          ease: 'power2.out',
        })
        .to(ballGroup.scale, {
          x: (isMobile() ? 0.72 : 1.0) * 0.88,
          y: (isMobile() ? 0.72 : 1.0) * 1.15,
          duration: 0.15,
          ease: 'elastic.out(1, 0.3)',
        })
        .to(ballGroup.scale, {
          x: isMobile() ? 0.72 : 1.0,
          y: isMobile() ? 0.72 : 1.0,
          duration: 0.25,
          ease: 'power2.out',
        });

      // Jump and rotation impulse
      kickImpulse = {
        y: 1.2,
        rotX: (Math.random() - 0.5) * 0.35,
        rotY: 0.45 + Math.random() * 0.3,
        rotZ: (Math.random() - 0.5) * 0.25,
      };

      // Trigger spark burst
      sparkLife = 1.0;
      sparkMat.opacity = 1.0;
      const posArray = sparkGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < sparkCount; i++) {
        posArray[i * 3] = ballGroup.position.x;
        posArray[i * 3 + 1] = ballGroup.position.y;
        posArray[i * 3 + 2] = ballGroup.position.z;

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const speed = Math.random() * 0.2 + 0.12;

        sparkVelocities[i] = {
          x: Math.sin(phi) * Math.cos(theta) * speed,
          y: Math.cos(phi) * speed + 0.08,
          z: Math.sin(phi) * Math.sin(theta) * speed,
        };
      }
      sparkGeo.attributes.position.needsUpdate = true;
    };

    kickTriggerRef.current = triggerKick;

    // --- 8. GSAP SCROLLTRIGGER TIMELINE ACROSS SECTIONS ---
    const stContext = gsap.context(() => {
      const mobile = isMobile();

      // Master Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          endTrigger: '#contact',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      // SECTION 1 -> 2: Home to About (Magnus Curve towards Founder / Values)
      tl.to(
        ballGroup.position,
        {
          x: mobile ? 0 : -3.2,
          y: mobile ? -0.4 : 0.2,
          z: mobile ? 0.4 : 1.2,
          ease: 'power2.inOut',
        },
        'step1'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 2.5,
          y: Math.PI * 3.8,
          ease: 'none',
        },
        'step1'
      );

      // SECTION 2 -> 3: About to Programs (Descent & Tactical Alignment)
      tl.to(
        ballGroup.position,
        {
          x: mobile ? 0 : 3.4,
          y: mobile ? -1.0 : -0.5,
          z: mobile ? 0.2 : 0.8,
          ease: 'power2.inOut',
        },
        'step2'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 4.8,
          y: Math.PI * 6.2,
          ease: 'none',
        },
        'step2'
      );

      // SECTION 3 -> 4: Programs to Talent (Shot into depth / Camera zoom)
      tl.to(
        ballGroup.position,
        {
          x: mobile ? 0 : -3.0,
          y: mobile ? -0.2 : -0.3,
          z: mobile ? 0.5 : 1.8,
          ease: 'power2.inOut',
        },
        'step3'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 7.5,
          y: Math.PI * 9.0,
          ease: 'none',
        },
        'step3'
      );

      // SECTION 4 -> 5: Talent to Gallery (Orbit across mosaic)
      tl.to(
        ballGroup.position,
        {
          x: mobile ? 0 : 3.0,
          y: mobile ? -0.3 : 0.4,
          z: mobile ? 0.3 : 0.9,
          ease: 'power2.inOut',
        },
        'step4'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 10.2,
          y: Math.PI * 11.5,
          ease: 'none',
        },
        'step4'
      );

      // SECTION 5 -> 6: Gallery to CTA (Victorious Center Stage above 10 000 FCFA CTA)
      tl.to(
        ballGroup.position,
        {
          x: 0,
          y: mobile ? 0.8 : 0.5,
          z: mobile ? 1.0 : 2.2,
          ease: 'power2.out',
        },
        'step5'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 12.0,
          y: Math.PI * 14.0,
          ease: 'none',
        },
        'step5'
      );

      // SECTION 6 -> 7: CTA to Contact (Resting on side podium)
      tl.to(
        ballGroup.position,
        {
          x: mobile ? 0 : 3.2,
          y: mobile ? -1.5 : -1.0,
          z: mobile ? -0.2 : 0.4,
          ease: 'power2.inOut',
        },
        'step6'
      ).to(
        ballMesh.rotation,
        {
          x: Math.PI * 13.5,
          y: Math.PI * 15.5,
          ease: 'none',
        },
        'step6'
      );
    });

    // --- 9. MOUSE TRACKING & INTERACTIVE RAYCASTER ---
    const mouse = new THREE.Vector2(-999, -999);
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const raycaster = new THREE.Raycaster();

    const onPointerMove = (e: PointerEvent) => {
      // Convert to normalized device coordinates (-1 to +1)
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetMouseX = mouse.x * 0.4;
      targetMouseY = mouse.y * 0.3;

      // Raycast to check if hovered
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(ballMesh);
      const hovering = intersects.length > 0;
      setIsHovered(hovering);

      if (hovering) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(ballMesh);

      if (intersects.length > 0) {
        triggerKick();
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('click', onPointerDown);
    window.addEventListener('touchstart', onPointerDown, { passive: true });

    // --- 10. RESIZE HANDLER ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    // --- 11. RENDER & ANIMATION LOOP (60 FPS) ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp (soft parallax)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX;
      camera.position.y = currentMouseY;
      camera.lookAt(0, 0, 0);

      // Idle levitation oscillation
      const floatY = Math.sin(time * 1.8) * 0.08;
      ballMesh.position.y = floatY;

      // Base gentle idle rotation (when not kicked)
      ballMesh.rotation.y += 0.005;
      ballMesh.rotation.x += 0.002;

      // Apply kick impulse physics with dampening
      if (kickImpulse.y > 0.001 || Math.abs(kickImpulse.rotY) > 0.001) {
        ballGroup.position.y += kickImpulse.y * 0.12;
        ballMesh.rotation.y += kickImpulse.rotY;
        ballMesh.rotation.x += kickImpulse.rotX;
        ballMesh.rotation.z += kickImpulse.rotZ;

        // Gravity decay
        kickImpulse.y *= 0.88;
        kickImpulse.rotX *= 0.94;
        kickImpulse.rotY *= 0.94;
        kickImpulse.rotZ *= 0.94;
      }

      // Breathing aura
      auraMesh.rotation.y -= 0.01;
      auraMaterial.opacity = 0.12 + Math.sin(time * 3.5) * 0.06;

      // Spark particles update
      if (sparkLife > 0) {
        sparkLife -= delta * 1.8;
        sparkMat.opacity = Math.max(0, sparkLife);

        const pos = sparkGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < sparkCount; i++) {
          pos[i * 3] += sparkVelocities[i].x;
          pos[i * 3 + 1] += sparkVelocities[i].y;
          pos[i * 3 + 2] += sparkVelocities[i].z;
          sparkVelocities[i].y -= 0.006; // Gravity
        }
        sparkGeo.attributes.position.needsUpdate = true;
      }

      // Stadium particles drift
      const partPos = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        partPos[i * 3 + 1] += 0.006; // Rise softly like embers
        if (partPos[i * 3 + 1] > 16) {
          partPos[i * 3 + 1] = -16;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- 12. CLEANUP ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('click', onPointerDown);
      window.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('resize', onResize);
      document.body.style.cursor = 'default';

      stContext.revert(); // Kill all ScrollTrigger instances cleanly

      // Dispose geometries, materials, and textures
      ballGeometry.dispose();
      ballMaterial.dispose();
      auraGeometry.dispose();
      auraMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      currentTextures.colorTexture.dispose();
      currentTextures.bumpTexture.dispose();
      currentTextures.roughnessTexture.dispose();

      renderer.dispose();
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" aria-hidden="true" />

      {/* Floating HUD Pill: 3D Indicator & Interactive Controller */}
      <div className="fixed bottom-6 left-6 z-30 transition-all duration-500">
        {showControls ? (
          <div className="bg-primary/85 backdrop-blur-md border border-energy/30 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 sm:gap-4 text-secondary max-w-xs sm:max-w-sm animate-in fade-in slide-in-from-bottom-4">
            <div className="relative flex-shrink-0">
              <button
                onClick={() => kickTriggerRef.current?.()}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-energy to-amber-500 text-primary flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer group"
                title="Frapper le ballon 3D"
              >
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              {kickCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-[10px] font-black px-1.5 py-0.5 rounded-full text-white shadow">
                  {kickCount}
                </span>
              )}
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-energy uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-energy animate-pulse" />
                <span>Expérience 3D Live</span>
              </div>
              <p className="text-xs text-secondary/80 leading-snug mt-0.5">
                {isHovered ? (
                  <strong className="text-white">Prêt ! Cliquez pour frapper le ballon !</strong>
                ) : (
                  'Faites défiler pour voir la trajectoire • Cliquez le ballon'
                )}
              </p>
            </div>

            <button
              onClick={() => setShowControls(false)}
              className="text-secondary/50 hover:text-secondary p-1 rounded transition-colors text-xs ml-auto"
              title="Masquer le panneau"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowControls(true)}
            className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary border border-energy/40 text-energy flex items-center justify-center shadow-xl hover:scale-110 transition-all cursor-pointer"
            title="Afficher les contrôles 3D"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
