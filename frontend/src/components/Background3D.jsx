import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    // Scene Setup
    const scene = new THREE.Scene();
    // Add subtle fog to blend with the page background
    scene.fog = new THREE.FogExp2(0xcffafe, 0.02); // Matches cyan-100 (aqua)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountEl.appendChild(renderer.domElement);

    // --- LEAVES / PARTICLES ---
    const leavesGeometry = new THREE.BufferGeometry();
    const leavesCount = 150;

    const positions = new Float32Array(leavesCount * 3);
    const rotations = new Float32Array(leavesCount * 3);
    const speeds = new Float32Array(leavesCount);

    for (let i = 0; i < leavesCount; i++) {
      // Spread widely across the screen
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      rotations[i * 3] = Math.random() * Math.PI;
      rotations[i * 3 + 1] = Math.random() * Math.PI;
      rotations[i * 3 + 2] = Math.random() * Math.PI;

      speeds[i] = 0.002 + Math.random() * 0.005;
    }

    leavesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    leavesGeometry.setAttribute(
      "rotation",
      new THREE.BufferAttribute(rotations, 3)
    );

    // Create a simple leaf shape using a Cone or Tetrahedron for low-poly look
    // InstancedMesh is better for performance with many objects
    const leafGeo = new THREE.TetrahedronGeometry(0.2, 0);
    const leafMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, // White base so instance colors show correctly
      transparent: true,
      opacity: 0.9,
      wireframe: false,
    });

    const instancedMesh = new THREE.InstancedMesh(
      leafGeo,
      leafMat,
      leavesCount
    );
    
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const palette = [0x15803d, 0x0ea5e9, 0x0d9488]; // Green, Blue, Teal
    const leafData = [];

    for (let i = 0; i < leavesCount; i++) {
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.rotation.set(
        rotations[i * 3],
        rotations[i * 3 + 1],
        rotations[i * 3 + 2]
      );
      
      // Random scale for variety
      const scale = 0.5 + Math.random() * 0.5;
      dummy.scale.set(scale, scale * 1.5, scale * 0.2); // Flattened like a leaf
      
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
      
      // Set random color from palette
      color.setHex(palette[Math.floor(Math.random() * palette.length)]);
      instancedMesh.setColorAt(i, color);

      leafData.push({
        position: new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
        rotation: new THREE.Euler(rotations[i * 3], rotations[i * 3 + 1], rotations[i * 3 + 2]),
        speed: speeds[i],
        wobbleSpeed: Math.random() * 0.02,
        wobbleOffset: Math.random() * Math.PI * 2
      });
    }

    scene.add(instancedMesh);

    // --- ANIMATION ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    let frameId;
    const animate = (time) => {
      frameId = requestAnimationFrame(animate);

      // Animate each leaf
      for (let i = 0; i < leavesCount; i++) {
        const data = leafData[i];
        
        // Fall down
        data.position.y -= data.speed;
        
        // Reset if too low
        if (data.position.y < -10) {
          data.position.y = 10;
          data.position.x = (Math.random() - 0.5) * 25;
        }

        // Wobble
        data.position.x += Math.sin(time * 0.001 * data.wobbleSpeed + data.wobbleOffset) * 0.01;
        
        // Rotate
        data.rotation.x += 0.01;
        data.rotation.y += 0.005;

        dummy.position.copy(data.position);
        dummy.rotation.copy(data.rotation);
        
        // Re-apply scale (lost in copy)
        // Ideally we store scale too, but for now let's just keep it simple or re-calc
        // To keep it efficient, we should have stored scale. 
        // Let's just use a fixed scale variation based on index for stability
        const scale = 0.5 + (i % 5) * 0.1;
        dummy.scale.set(scale, scale * 1.5, scale * 0.2);

        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      
      instancedMesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (mountEl && renderer.domElement) {
        mountEl.removeChild(renderer.domElement);
      }
      leafGeo.dispose();
      leafMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #cffafe, #ffffff, #cffafe)' }} // cyan-100 (aqua) to white
    />
  );
};

export default Background3D;
