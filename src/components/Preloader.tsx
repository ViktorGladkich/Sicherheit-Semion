
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D disp;
uniform float dispFactor;
uniform float effectFactor;

void main() {
  vec2 uv = vUv;
  
  // Simple fluid displacement
  vec4 disp = texture2D(disp, uv);
  
  vec2 distortedPosition1 = vec2(uv.x + dispFactor * (disp.r * effectFactor), uv.y);
  vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r * effectFactor), uv.y);
  
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  
  vec4 finalTexture = mix(_texture1, _texture2, dispFactor);
  
  gl_FragColor = finalTexture;
}
`;

// Helper to create the noise/fluid displacement texture
const createNoiseTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Texture();

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 512, 512);

  // Draw some random "clouds"
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 100 + 50;
    
    const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, `rgba(255, 255, 255, ${Math.random() * 0.5})`);
    grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Helper to create text textures
const createTextTexture = (text: string, color: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Texture();

  ctx.clearRect(0, 0, 1024, 1024);
  // Increased font size for larger numbers
  ctx.font = 'bold 350px "Inter", sans-serif'; 
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
};

const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- SETUP ---
    const scene = new THREE.Scene();
    
    // Orthographic camera for 2D plane
    const frustumSize = 1;
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- ASSETS ---
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';
    const texts = ["0", "24", "58", "82", "99", "A.S.S"];
    const textures = texts.map(t => createTextTexture(t, textColor));
    const dispTexture = createNoiseTexture();

    // --- MATERIAL ---
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        effectFactor: { value: 0.3 }, // Intensity of distortion
        dispFactor: { value: 0.0 },   // Transition progress 0 -> 1
        texture1: { value: textures[0] },
        texture2: { value: textures[1] },
        disp: { value: dispTexture },
      },
      transparent: true,
      opacity: 1.0,
    });

    const geometry = new THREE.PlaneGeometry(1, 1); // Unit plane, scaled by camera
    const plane = new THREE.Mesh(geometry, material);
    
    // Scale plane to fit camera view height (ortho height is 1)
    // Increased scale to 0.85 so numbers appear much larger on screen
    plane.scale.set(0.85, 0.85, 1); 
    scene.add(plane);

    // --- ANIMATION SEQUENCE ---
    let currentTextureIndex = 0;
    
    const animateTransition = () => {
      if (currentTextureIndex >= textures.length - 1) return;

      const nextIndex = currentTextureIndex + 1;
      
      material.uniforms.texture1.value = textures[currentTextureIndex];
      material.uniforms.texture2.value = textures[nextIndex];
      material.uniforms.dispFactor.value = 0;

      gsap.to(material.uniforms.dispFactor, {
        value: 1,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          currentTextureIndex = nextIndex;
          // If we just finished one transition, wait a bit then trigger next
          // Adjust timing to fit the ~2.8s total loading time in App.tsx
          if (currentTextureIndex < textures.length - 1) {
             setTimeout(animateTransition, 100); 
          }
        }
      });
    };

    // Start sequence slightly delayed
    setTimeout(animateTransition, 200);

    // Render Loop
    let rAF: number;
    const render = () => {
      renderer.render(scene, camera);
      rAF = requestAnimationFrame(render);
    };
    render();

    // Resize
    const handleResize = () => {
        if (!container) return;
        const aspect = container.clientWidth / container.clientHeight;
        camera.left = -frustumSize * aspect / 2;
        camera.right = frustumSize * aspect / 2;
        camera.top = frustumSize / 2;
        camera.bottom = -frustumSize / 2;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rAF);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      textures.forEach(t => t.dispose());
      dispTexture.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <motion.div 
        initial={{ opacity: 1 }}
        exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
        }}
        className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        ref={containerRef}
    >
        {/* Optional decorative background elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
    </motion.div>
  );
};

export default Preloader;
