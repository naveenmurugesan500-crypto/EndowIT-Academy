"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 26);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Minimal Flowing Digital Wave Grid (Gentle, Sliding Horizon on Light/White Canvas)
    const waveWidth = 85;
    const waveHeight = 55;
    const gridX = 70;
    const gridY = 45;

    // Primary Wave Layer (Brand Blue wireframe)
    const waveGeo1 = new THREE.PlaneGeometry(waveWidth, waveHeight, gridX, gridY);
    const waveMat1 = new THREE.MeshBasicMaterial({
      color: 0x2563eb, // Royal Brand Blue
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const waveMesh1 = new THREE.Mesh(waveGeo1, waveMat1);
    waveMesh1.rotation.x = -Math.PI / 2.3;
    waveMesh1.position.set(0, -6, 0);
    scene.add(waveMesh1);

    // Secondary Wave Layer (Cyan wireframe, slightly offset for elegant depth)
    const waveGeo2 = new THREE.PlaneGeometry(waveWidth, waveHeight, gridX, gridY);
    const waveMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    const waveMesh2 = new THREE.Mesh(waveGeo2, waveMat2);
    waveMesh2.rotation.x = -Math.PI / 2.3;
    waveMesh2.position.set(0, -6.8, 1.5);
    scene.add(waveMesh2);

    // Store base vertices positions
    const pos1 = waveGeo1.attributes.position as THREE.BufferAttribute;
    const pos2 = waveGeo2.attributes.position as THREE.BufferAttribute;
    const baseZ1 = new Float32Array(pos1.count);
    for (let i = 0; i < pos1.count; i++) {
      baseZ1[i] = pos1.getZ(i);
    }

    // 3. Very subtle, minimal floating tech particles (Only 75 tiny soft dots)
    const particleCount = 75;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 60;
      particlePositions[i + 1] = Math.random() * 25 - 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 35;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.18,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Smooth Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 10;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / innerHeight - 0.5) * 2;
      targetCameraX = mouseX * 4;
      targetCameraY = 10 + mouseY * 2.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. Calm, Minimal Sliding Wave Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Undulate Wave 1 vertices gently
      for (let i = 0; i < pos1.count; i++) {
        const x = pos1.getX(i);
        const y = pos1.getY(i);
        // Smooth sine + cosine wave sliding along X & Y
        const wave =
          Math.sin(x * 0.15 + t * 0.8) * Math.cos(y * 0.15 + t * 0.6) * 1.8 +
          Math.sin(x * 0.08 - t * 0.4) * 0.8;
        pos1.setZ(i, wave);
      }
      pos1.needsUpdate = true;

      // Undulate Wave 2 vertices with a slight phase lag for layered silk motion
      for (let i = 0; i < pos2.count; i++) {
        const x = pos2.getX(i);
        const y = pos2.getY(i);
        const wave =
          Math.sin(x * 0.14 + t * 0.75 + 1.2) * Math.cos(y * 0.14 + t * 0.55) * 1.5;
        pos2.setZ(i, wave);
      }
      pos2.needsUpdate = true;

      // Gentle drift for particles
      particles.rotation.y = t * 0.015;

      // Smooth camera damping
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, -2, 0);

      renderer.render(scene, camera);
    };
    animate();

    // 6. Memory Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      waveGeo1.dispose();
      waveMat1.dispose();
      waveGeo2.dispose();
      waveMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
