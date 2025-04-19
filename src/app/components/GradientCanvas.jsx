"use client";
import { useEffect, useRef } from 'react';
import { Gradient } from '../utils/Gradient';

const GradientCanvas = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Create gradient instance
    gradientRef.current = new Gradient();
    
    // Initialize gradient with canvas reference
    gradientRef.current.initGradient('#gradient-canvas');

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          // Reinitialize gradient when theme changes
          gradientRef.current.reconnect();
        }
      });
    });

    // Start observing the document element for theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Cleanup function
    return () => {
      observer.disconnect();
      gradientRef.current?.disconnect();
    };
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -100,
      }}
      data-js-darken-top
    />
  );
};

export default GradientCanvas;