"use client";
import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShaderSphere from './components/ShaderSphere';

export default function HomePage() {
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('100vh');
  
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Get the actual content height
        const height = containerRef.current.scrollHeight;
        setContentHeight(`${height}px`);
      }
    };
    
    // Update height initially and on resize
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Observe content changes that might affect height
    const resizeObserver = new ResizeObserver(updateHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      resizeObserver.disconnect();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div 
        className="absolute top-0 left-0 w-full" 
        style={{ height: contentHeight }}
      >
        <ShaderSphere />
      </div>
      <div className='max-w-4xl top-0 left-0 w-full z-10'>
        <Header />
      </div>
      <Hero />
    </div>
  );
}