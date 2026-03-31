import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GoldSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.1;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.8} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial color="#163b78" roughness={0.08} metalness={0.98} distort={0.15} speed={0.8} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, []);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#eab308" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

const HeroScene3D = () => (
  <div className="absolute inset-0 opacity-40 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 8], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#163b78" />
        <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#eab308" />
        <GoldSphere />
        <Particles />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene3D;
