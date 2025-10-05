'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const COIN_RADIUS = 1;
const COIN_THICKNESS = 0.12;
const COIN_SCALE = 0.55;

function CoinMesh() {
  const logoTexture = useLoader(THREE.TextureLoader, '/logo/muic-noname.png');
  logoTexture.colorSpace = THREE.SRGBColorSpace;
  logoTexture.anisotropy = 8;

  const group = useRef<THREE.Group>(null);
  const spin = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    const speed = 0.85;
    spin.current += delta * speed;
    const tilt = Math.sin(spin.current * 0.6) * 0.2;
    group.current.rotation.set(Math.PI / 2 - 1 + tilt, spin.current, Math.sin(spin.current * 0.9) * 0.12);
  });

  return (
    <group ref={group} position={[0, 0.18, 0]} scale={COIN_SCALE}>
      {/* Use a basic (unlit) material so it ignores all lighting */}
      <mesh>
        <cylinderGeometry args={[COIN_RADIUS, COIN_RADIUS, COIN_THICKNESS, 128]} />
        {/* Edge — deep purple */}
        <meshBasicMaterial attach="material-0" color="#5e1a75" />
        {/* Front face — purple with logo texture overlay */}
        <meshBasicMaterial attach="material-1" color="#fffff" map={logoTexture} toneMapped={false} />
        {/* Back face — same */}
        <meshBasicMaterial attach="material-2" color="#b82fd4" map={logoTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function HeroCoin() {
  return (
    <div className="pointer-events-none z-0 order-first ml-auto h-56 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-72 lg:order-last lg:h-[110%] lg:w-1/2">
      <div className="relative mx-auto h-full w-full max-w-[28rem]">
        <Canvas
          className="h-full w-full"
          shadows={false}
          camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
            gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
        >
          <Suspense fallback={null}>
            <CoinMesh />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
