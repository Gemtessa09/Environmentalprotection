import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    // Scene Setup
    const width = mountEl.clientWidth;
    const height = mountEl.clientHeight;
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const canvasEl = renderer.domElement;
    mountEl.appendChild(canvasEl);

    // --- OBJECTS ---

    // 1. Low Poly Planet
    const planetGeo = new THREE.IcosahedronGeometry(2, 1);
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Emerald-500
      flatShading: true,
      roughness: 0.6,
      metalness: 0.1,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planet);

    // 2. Wireframe Atmosphere
    const atmosGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x34d399, // Emerald-400
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosphere);

    // 3. Floating Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 150;
    const posArray = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x34d399, 2, 10);
    pointLight.position.set(-2, 1, 3);
    scene.add(pointLight);

    // --- ANIMATION ---
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!mountEl) return;
      const w = mountEl.clientWidth;
      const h = mountEl.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate Planet
      planet.rotation.y += 0.002;
      planet.rotation.x += 0.001;
      
      // Rotate Atmosphere
      atmosphere.rotation.y -= 0.001;
      atmosphere.rotation.z += 0.001;

      // Rotate Particles
      particlesMesh.rotation.y += 0.0005;

      // Mouse Interaction (Parallax)
      planet.rotation.y += mouseX * 0.05;
      planet.rotation.x += mouseY * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (mountEl && canvasEl && mountEl.contains(canvasEl)) {
        mountEl.removeChild(canvasEl);
      }
      
      // Dispose
      planetGeo.dispose(); planetMat.dispose();
      atmosGeo.dispose(); atmosMat.dispose();
      particlesGeo.dispose(); particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="h-80 w-full overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-emerald-900 to-black shadow-xl"
      ref={mountRef}
    />
  );
};

export default ThreeScene;
