import React from "react";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Background3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const scrollRef = useRef(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile,
            alpha: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x1a1a1a, 1);
        containerRef.current.appendChild(renderer.domElement);

        // Create particles with reduced count for mobile
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = isMobile ? 2000 : 5600;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            const spread = isMobile ? 7 : 10;
            posArray[i] = (Math.random() - 0.5) * spread;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
            size: isMobile ? 0.028 : 0.0199,
            color: 0x646cff,
            transparent: true,
            opacity: isMobile ? 0.6 : 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });

        const particlesMesh = new THREE.Points(
            particlesGeometry,
            particlesMaterial
        );
        scene.add(particlesMesh);

        camera.position.z = isMobile ? 4 : 3;

        // Only add mouse movement handler if not on mobile
        const handleMouseMove = (event: MouseEvent) => {
            if (!isMobile) {
                mouseRef.current = {
                    x: (event.clientX / window.innerWidth) * 2 - 1,
                    y: -(event.clientY / window.innerHeight) * 2 + 1,
                };
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);


            particlesMesh.rotation.x += isMobile ? 0.0001 : 0.0003;
            particlesMesh.rotation.y += isMobile ? 0.0002 : 0.0005;

            // Mouse movement effects only on desktop
            if (!isMobile) {
                const mouseSensitivity = 0.05;
                camera.position.x +=
                    (mouseRef.current.x * 0.5 - camera.position.x) * mouseSensitivity;
                camera.position.y +=
                    (mouseRef.current.y * 0.5 - camera.position.y) * mouseSensitivity;
            }

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const newIsMobile = width < 768;

            if (newIsMobile !== isMobile) {
                setIsMobile(newIsMobile);
            }

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        // Only add mouse event listener on desktop
        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            if (!isMobile) {
                window.removeEventListener("mousemove", handleMouseMove);
            }
            window.removeEventListener("resize", handleResize);
            containerRef.current?.removeChild(renderer.domElement);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, [isMobile]);

    return (
        <div
        ref={containerRef}
        className="background-3d"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: "#1a1a1a",
          pointerEvents: isMobile ? "none" : "auto",
          touchAction: "none",
        }}
      ></div>
      
    );
};

export default Background3D;
