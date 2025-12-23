import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    const width = mountEl.clientWidth;
    const height = mountEl.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    const canvasEl = renderer.domElement;
    mountEl.appendChild(canvasEl);

    const geometry = new THREE.SphereGeometry(1.4, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      emissive: 0x0c3b28,
      roughness: 0.35,
      metalness: 0.1,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const ringGeometry = new THREE.TorusGeometry(2, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf4a825 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const light = new THREE.DirectionalLight(0xffffff, 0.9);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xbcd8c7, 0.6);
    scene.add(ambient);

    const stars = new THREE.BufferGeometry();
    const starCount = 600;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    stars.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
    const starField = new THREE.Points(stars, starMaterial);
    scene.add(starField);

    const handleResize = () => {
      const el = mountRef.current;
      if (!el) return;
      const { clientWidth, clientHeight } = el;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.004;
      ring.rotation.z += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      // React 18 StrictMode can mount/unmount twice in dev; guard DOM operations.
      const el = mountRef.current;
      if (el && canvasEl && el.contains(canvasEl)) {
        el.removeChild(canvasEl);
      }

      // Dispose GPU resources
      geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      stars.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="h-80 overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-emerald-700 to-emerald-950 shadow-sm"
      ref={mountRef}
    />
  );
};

export default ThreeScene;
