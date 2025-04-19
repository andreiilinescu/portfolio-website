// components/HeroSphere.jsx
"use client";
import { Canvas } from '@react-three/fiber';
import { Sphere, OrbitControls, Environment } from '@react-three/drei';
import { useState, useEffect } from 'react';

export default function HeroSphere() {
    const [sphereScale, setSphereScale] = useState(0.9);
    const [sphereColor, setSphereColor] = useState('#8b87c4');

    useEffect(() => {
        // Handle resize
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) { // mobile
                setSphereScale(0.4);
            } else if (width < 1024) { // tablet
                setSphereScale(0.6);
            } else { // desktop
                setSphereScale(0.9);
            }
        };

        // Handle theme changes
        const updateSphereColor = () => {
            // Get the computed color from CSS variable
            const color = getComputedStyle(document.documentElement)
                .getPropertyValue('--gradient-color-3')
                .trim();
            setSphereColor(color || '#8b87c4'); // Fallback color if variable not found
        };

        // Observer for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    updateSphereColor();
                }
            });
        });

        // Initial setup
        handleResize();
        updateSphereColor();
        
        // Start observers
        window.addEventListener('resize', handleResize);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="z-0 pointer-events-none absolute top-0 right-0 w-[90vw] h-[90vh] md:w-[70vw] lg:w-[50vw]">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 2, 2]} intensity={1.2} />
                <Environment preset="sunset" />

                <Sphere args={[1, 64, 64]} scale={sphereScale}>
                    <meshStandardMaterial
                        color={sphereColor}
                        roughness={0.25}
                        metalness={0.3}
                    />
                </Sphere>

                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.6} 
                />
            </Canvas>
        </div>
    );
}
