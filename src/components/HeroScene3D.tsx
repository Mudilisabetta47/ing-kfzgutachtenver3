import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GoldSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#2570b5"
          roughness={0.12}
          metalness={0.98}
          distort={0.2}
          speed={1.2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.015;
      points.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#eab308" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[3, -1, -2]} scale={1.5}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  );
}

const HeroScene3D = () => (
  <div className="absolute inset-0 opacity-50 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#2570b5" />
        <directionalLight position={[-3, -3, 2]} intensity={0.5} color="#eab308" />
        <pointLight position={[0, 3, 3]} intensity={0.6} color="#ffffff" />
        <GoldSphere />
        <Particles />
        <FloatingRing />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene3D;
