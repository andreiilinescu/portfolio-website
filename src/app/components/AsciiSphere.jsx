"use client";

import { useEffect, useRef } from 'react';

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  rotateX(amount) {
    let y = this.y;
    this.y = (y * Math.cos(amount)) + (this.z * Math.sin(amount) * -1.0);
    this.z = (y * Math.sin(amount)) + (this.z * Math.cos(amount));
  }

  rotateY(amount) {
    let x = this.x;
    this.x = (x * Math.cos(amount)) + (this.z * Math.sin(amount) * -1.0);
    this.z = (x * Math.sin(amount)) + (this.z * Math.cos(amount));
  }

  rotateZ(amount) {
    let x = this.x;
    this.x = (x * Math.cos(amount)) + (this.y * Math.sin(amount) * -1.0);
    this.y = (x * Math.sin(amount)) + (this.y * Math.cos(amount));
  }

  getProjection(distance, xy, offSet, offSetZ) {
    return ((distance * xy) / (this.z - offSetZ)) + offSet;
  }

  draw(ctx, x, y, size, color) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, size, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.restore();
  }
}

class Sphere {
  constructor(radius = 20.0) {
    this.point = [];
    this.color = "rgb(100,0,255)";
    this.radius = radius;
    this.numberOfVertexes = 0;
    this.rotation = 0;
    this.distance = 0;
    this.colors = {
        light: {
          front: "rgba(0, 0, 0, 0.8)",
          back: "rgba(0, 0, 0, 0.3)"
        },
        dark: {
          front: "rgba(255, 255, 255, 0.8)",
          back: "rgba(255, 255, 255, 0.3)"
        }
      };
      this.currentTheme = 'light';
    this.init();
  }

  init() {
    for (let alpha = 0; alpha <= 6.28; alpha += 0.17) {
        let p = this.point[this.numberOfVertexes] = new Point()
  
        p.x = Math.cos(alpha) * this.radius
        p.y = 0
        p.z = Math.sin(alpha) * this.radius
  
        this.numberOfVertexes++
      }
  
      for (let direction = 1; direction >= -1; direction -= 2) {
        for (let beta = 0.17; beta < Math.PI; beta += 0.17) {
          let radius = Math.cos(beta) * this.radius
          let fixedY = Math.sin(beta) * this.radius * direction
  
          for (let alpha = 0; alpha < 6.28; alpha += 0.17) {
            let p = this.point[this.numberOfVertexes] = new Point()
  
            p.x = Math.cos(alpha) * radius
            p.y = fixedY
            p.z = Math.sin(alpha) * radius
  
            this.numberOfVertexes++
          }
        }
      }
  }

  draw(ctx, w, h) {
    let x, y;
    let p = new Point();

    for (let i = 0; i < this.numberOfVertexes; i++) {
      p.x = this.point[i].x;
      p.y = this.point[i].y;
      p.z = this.point[i].z;

      p.rotateX(this.rotation);
      p.rotateY(this.rotation);
      p.rotateZ(this.rotation);

      x = p.getProjection(this.distance, p.x, w / 2.0, 100.0);
      y = p.getProjection(this.distance, p.y, h / 2.0, 100.0);

      if ((x >= 0) && (x < w)) {
        if ((y >= 0) && (y < h)) {
          if (p.z < 0) {
            p.draw(ctx, x, y, 1, this.colors[this.currentTheme].back);
          } else {
            p.draw(ctx, x, y, 1, this.colors[this.currentTheme].front);
          }
        }
      }
    }
  }
  updateTheme(theme) {
    this.currentTheme = theme;
  }
  update() {
    this.rotation += Math.PI / 360.0;
    if (this.distance < 1000) {
      this.distance += 10;
    }
  }
}

export default function AnimatedSphere() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 420;
    canvas.height = 420;

    sphereRef.current = new Sphere();

    // Theme observer
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-theme') {
            const theme = document.documentElement.getAttribute('data-theme');
            sphereRef.current.updateTheme(theme);
          }
        });
      });
  
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
  
      // Set initial theme
      const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
      sphereRef.current.updateTheme(initialTheme);

    function animate() {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      sphereRef.current.draw(ctx, canvas.width, canvas.height);
      sphereRef.current.update();
      
      ctx.restore();
      frameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        background: 'transparent',
      }}
    />
  );
}