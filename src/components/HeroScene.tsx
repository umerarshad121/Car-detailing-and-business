"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ChromePanel({
  position,
  rotation,
  scale = [1, 1, 1] as [number, number, number],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = (rotation?.[2] ?? 0) + Math.sin(t * 0.35) * 0.04;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1.6, 0.08, 1]} />
      <meshStandardMaterial
        color="#c8d0d8"
        metalness={0.95}
        roughness={0.12}
        envMapIntensity={1.4}
      />
    </mesh>
  );
}

function RayStreaks() {
  const group = useRef<THREE.Group>(null);
  const streaks = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        x: -1.8 + i * 0.55,
        z: -0.4 + (i % 3) * 0.25,
        len: 1.4 + (i % 4) * 0.35,
        delay: i * 0.18,
      })),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group ref={group} position={[0.6, 0.2, 0]}>
      {streaks.map((s, i) => (
        <mesh key={i} position={[s.x, 0.05, s.z]} rotation={[0, 0, -0.55]}>
          <boxGeometry args={[0.035, s.len, 0.02]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#e8a317" : "#f5c542"}
            metalness={0.6}
            roughness={0.25}
            emissive={i % 2 === 0 ? "#e8a317" : "#f5c542"}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Transparent clear so the full-bleed hero photo shows through */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 2]} intensity={1.2} color="#e8eef4" />
      <directionalLight position={[-3, 2, -2]} intensity={0.45} color="#4a7fa8" />
      <spotLight
        position={[2, 5, 3]}
        angle={0.35}
        penumbra={0.6}
        intensity={1.4}
        color="#f5c542"
      />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <ChromePanel position={[-0.9, 0.35, 0]} rotation={[0.15, 0.4, 0.08]} scale={[1.3, 1, 1.1]} />
        <ChromePanel position={[0.55, -0.15, 0.2]} rotation={[-0.1, -0.35, -0.05]} scale={[1.1, 1, 0.9]} />
        <ChromePanel position={[1.4, 0.55, -0.3]} rotation={[0.2, 0.55, 0.12]} scale={[0.7, 1, 0.7]} />
      </Float>

      <RayStreaks />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
        <planeGeometry args={[12, 12]} />
        <MeshReflectorMaterial
          blur={[300, 80]}
          resolution={512}
          mixBlur={0.85}
          mixStrength={0.55}
          roughness={0.9}
          depthScale={0.6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.2}
          color="#161b20"
          metalness={0.55}
          mirror={0.35}
        />
      </mesh>

      <Environment preset="city" environmentIntensity={0.55} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.2, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!bg-transparent"
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      {/* Soft vignette so copy stays readable — edge blend, not a badge overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,17,20,0.55) 0%, rgba(14,17,20,0.2) 42%, transparent 70%), linear-gradient(180deg, rgba(14,17,20,0.25) 0%, transparent 28%, transparent 72%, rgba(14,17,20,0.65) 100%)",
        }}
      />
    </div>
  );
}
