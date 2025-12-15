
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "../../contexts/ThemeContext";

export function GenerativeArtScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50, 
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6; 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // --- SHIELD GEOMETRY ---
    const geometry = new THREE.PlaneGeometry(3.5, 4.0, 128, 128);
    const pos = geometry.attributes.position;
    const v = new THREE.Vector3();
    
    // Shield Parameters
    const width = 1.3;
    const yTop = 1.1;
    const yBottom = -1.4;
    const yShoulder = 0.3; 

    for(let i = 0; i < pos.count; i++){
        v.fromBufferAttribute(pos, i);
        
        if (v.y > yTop) v.y = yTop;
        if (v.y < yBottom) v.y = yBottom;
        
        let targetX = width;
        if (v.y < yShoulder) {
            const t = Math.max(0, Math.min(1, (yShoulder - v.y) / (yShoulder - yBottom)));
            targetX = width * Math.cos(t * Math.PI * 0.5); 
        }
        
        if (v.x > targetX) v.x = targetX;
        if (v.x < -targetX) v.x = -targetX;
        
        const xFactor = (v.x / width);
        v.z = 0.6 * (1.0 - xFactor * xFactor);
        v.z -= 0.1 * Math.pow((v.y - 0.0) / 1.5, 2);

        pos.setXYZ(i, v.x, v.y, v.z);
    }
    geometry.computeVertexNormals();

    // --- LOCK GEOMETRY ---
    const lockGroup = new THREE.Group();
    
    // 1. Lock Body
    const bodyGeometry = new THREE.BoxGeometry(0.8, 0.7, 0.2, 10, 10, 2);
    const bodyMesh = new THREE.Mesh(bodyGeometry); // Material applied later
    lockGroup.add(bodyMesh);

    // 2. Lock Shackle (Torus)
    const shackleGeometry = new THREE.TorusGeometry(0.3, 0.08, 16, 32, Math.PI);
    const shackleMesh = new THREE.Mesh(shackleGeometry);
    shackleMesh.position.y = 0.35;
    shackleMesh.position.z = 0;
    shackleMesh.rotation.y = Math.PI; // Face front
    lockGroup.add(shackleMesh);
    
    // 3. Keyhole (Custom Shape)
    const keyholeShape = new THREE.Shape();
    // Circle top
    keyholeShape.absarc(0, 0.05, 0.08, 0, Math.PI * 2, false);
    // Trapezoid bottom
    keyholeShape.moveTo(-0.04, 0);
    keyholeShape.lineTo(-0.06, -0.15);
    keyholeShape.lineTo(0.06, -0.15);
    keyholeShape.lineTo(0.04, 0);
    
    const keyholeGeometry = new THREE.ShapeGeometry(keyholeShape);
    const keyholeMesh = new THREE.Mesh(keyholeGeometry);
    keyholeMesh.position.z = 0.11; // Slightly in front of body
    keyholeMesh.scale.set(1, 1, 1);
    
    // We want the keyhole to be visible, so we add it to the group
    lockGroup.add(keyholeMesh);

    lockGroup.position.z = 0.8; // Push lock out from shield surface
    scene.add(lockGroup);


    // --- MATERIAL ---
    const initialColor = theme === 'dark' ? new THREE.Color(0xe0e0e0) : new THREE.Color(0x1a1a1a);

    const shaderUniforms = {
        time: { value: 0 },
        pointLightPos: { value: new THREE.Vector3(0, 0, 5) },
        color: { value: initialColor }, 
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: shaderUniforms,
      vertexShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        // Perlin Noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute(permute(permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 0.142857142857;
            vec3 ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 x = x_ * ns.x + ns.yyyy;
            vec4 y = y_ * ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4(x.xy, y.xy);
            vec4 b1 = vec4(x.zw, y.zw);
            vec4 s0 = floor(b0) * 2.0 + 1.0;
            vec4 s1 = floor(b1) * 2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
            vec3 p0 = vec3(a0.xy, h.x);
            vec3 p1 = vec3(a0.zw, h.y);
            vec3 p2 = vec3(a1.xy, h.z);
            vec3 p3 = vec3(a1.zw, h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
        }

        void main() {
            vNormal = normal;
            vPosition = position;
            
            float n = snoise(position * 3.0 + time * 0.5);
            float displacement = n * 0.05; 
            float pulse = sin(time * 1.0) * 0.02;
            
            vec3 newPosition = position + normal * (displacement + pulse);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }`,    
      fragmentShader: `
        uniform vec3 color;
        uniform vec3 pointLightPosition;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            vec3 normal = normalize(vNormal);
            vec3 lightDir = normalize(pointLightPosition - vPosition);
            
            float diffuse = max(dot(normal, lightDir), 0.0);
            float fresnel = 1.0 - dot(normal, vec3(0.0, 0.0, 1.0));
            fresnel = pow(fresnel, 2.0);
            
            vec3 finalColor = color * (diffuse * 0.5 + 0.2) + color * fresnel * 0.8;
            
            gl_FragColor = vec4(finalColor, 1.0);
        }`, 
      wireframe: true,
      side: THREE.DoubleSide,
      transparent: true
    });

    // Apply material to Shield
    const shieldMesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(shieldMesh);

    // Apply material to Lock parts
    bodyMesh.material = shaderMaterial;
    shackleMesh.material = shaderMaterial;
    // For keyhole, we want it filled/distinct, maybe wireframe too or just solid color?
    // Let's use the same wireframe for style consistency
    keyholeMesh.material = shaderMaterial;

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 5);
    
    lightRef.current = pointLight;
    scene.add(pointLight);

    let frameId: number;
    const animate = (t: number) => {
      shaderMaterial.uniforms.time.value = t * 0.0005;
      
      // Majestic rotation
      const rotY = Math.sin(t * 0.0003) * 0.15;
      const rotX = Math.sin(t * 0.0002) * 0.05;
      
      shieldMesh.rotation.y = rotY; 
      shieldMesh.rotation.x = rotX;

      // Lock moves with shield but stays centered
      lockGroup.rotation.y = rotY;
      lockGroup.rotation.x = rotX;
      
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate(0);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(x, y, 0.5).unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(dist));
      if (lightRef.current) {
        lightRef.current.position.copy(pos);
      }
      shaderMaterial.uniforms.pointLightPos.value = pos;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      bodyGeometry.dispose();
      shackleGeometry.dispose();
      keyholeGeometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
}

interface AnomalousMatterHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function AnomalousMatterHero({
  title = "A.S.S Security UG",
  subtitle = "Sicherheit in stetigem Wandel",
  description = "Wir bieten maßgeschneiderte Sicherheitskonzepte für höchste Ansprüche. Ihr Schutz ist unsere Mission.",
}: AnomalousMatterHeroProps) {

  return (
    <section
      id="home"
      role="banner"
      className="relative w-full min-h-screen bg-background text-foreground overflow-hidden flex flex-col md:flex-row pt-24 md:pt-0"
    >
      {/* Left Content */}
      <div className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 md:py-0 order-2 md:order-1 my-auto">
        <div className="animate-fade-in-long flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-4">
            {title}
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#contact"
              className="inline-block py-4 px-10 bg-foreground text-background uppercase font-bold tracking-widest rounded-lg hover:bg-foreground/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Beratungsgespräch
            </a>
          </div>
        </div>
      </div>

      {/* Right Visual (Shield with Lock) */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-background" />}>
            <GenerativeArtScene />
          </Suspense>
        </div>
        
        {/* Gradient for mobile to blend bottom of canvas into text */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background md:hidden pointer-events-none z-10" />
      </div>
    </section>
  );
}
