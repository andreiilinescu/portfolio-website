"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

import { DotScreenShader } from "./CustomShader";
import shaders from "./shaders/shaders.json";
import LoadingOverlay from './LoadingOverlay';

const vertex = shaders["vertex.glsl"];
const fragment = shaders["fragment.glsl"];
const vertex1 = shaders["vertex1.glsl"];
const fragment1 = shaders["fragment1.glsl"];


export default function ShaderSphere() {
  const containerRef = useRef();
  const sceneRef = useRef();
  const frameRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let frame;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace =THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(70, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 1);
    let controls;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if(isMobile) controls = new OrbitControls(camera, document.body);
    else  controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled= true;
    controls.enableDamping = true;  
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.enablePan = false;
   

    
    // Sphere ShaderMaterial
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
        baseFirst: { value: new THREE.Color('var(--gradient-color-1)') },  // Light theme default
        baseSecond: { value: new THREE.Color('var(--gradient-color-2)') }, // Light theme default
        accent: { value: new THREE.Color('var(--gradient-color-3)') },     // Light theme default
      },
      side: THREE.DoubleSide
    });

    const geo = new THREE.SphereGeometry(1.5, 64, 64);
    const mesh = new THREE.Mesh(geo, material);
    
    scene.add(mesh);

    // Reflection sphere with fresnel shader
    const rt = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
      encoding: THREE.SRGBColorSpace,
    });
    const cubeCam = new THREE.CubeCamera(0.1, 10, rt);

    const mat2 = new THREE.ShaderMaterial({
      vertexShader: vertex1,
      fragmentShader: fragment1,
      uniforms: {
        time: { value: 0 },
        tCube: { value: 0 },
        mRefractionRatio: { value: 1.02 },
        mFresnelBias: { value: 0.1 },
        mFresnelScale: { value: 4. },
        mFresnelPower: { value: 2. },
        resolution: { value: new THREE.Vector4() }
      },
      side: THREE.DoubleSide
    });

    const smallSphere = new THREE.Mesh(new THREE.SphereGeometry(0.4, 64, 64), mat2);
    smallSphere.position.set(0.4, 0, 0);
    scene.add(smallSphere);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms['scale'].value = 4;
    composer.addPass(effect1);

    // Animation
    let t = 0;
    function animate() {
      t += 0.01;
      mat2.uniforms.tCube.value = rt.texture;
      mat2.uniforms.time.value = t;
      material.uniforms.time.value = t;

      smallSphere.visible = false;
      cubeCam.update(renderer, scene);
      smallSphere.visible = true;

      composer.render();
      if (!isLoaded) setIsLoaded(true);
      frame = requestAnimationFrame(animate);
    }
    const updateMaterials = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Update main sphere colors
        material.uniforms.baseFirst.value = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--gradient-color-1').trim());
        material.uniforms.baseSecond.value = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--gradient-color-2').trim());
        material.uniforms.accent.value = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--gradient-color-3').trim());
  
        // Update fresnel parameters for small sphere if needed
        mat2.uniforms.mFresnelScale.value = isDark ? 3.0 : 4.0;
        mat2.uniforms.mFresnelBias.value = isDark ? 0.2 : 0.1;
      };
    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-theme') {
            updateMaterials();
          }
        });
      });
    // Start observing theme changes
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      }); 
    updateMaterials();
    animate();


    const handleResize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return <>
    {!isLoaded && <LoadingOverlay />}
    <div ref={containerRef} className="w-full h-full" />
  </>;
}
