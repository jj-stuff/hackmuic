// components/Coin3D.tsx
'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const COIN_RADIUS = 1;
const COIN_THICKNESS = 0.1;
const COIN_SCALE = 0.55;

function CoinMesh() {
  // useLoader infers the return type from loader, here TextureLoader → THREE.Texture
  const logoTexture = useLoader(THREE.TextureLoader, '/logo/muic-noname.png');

  // set texture properties
  logoTexture.colorSpace = THREE.SRGBColorSpace;
  logoTexture.anisotropy = 8;

  // ref to the group
  const groupRef = useRef<THREE.Group>(null);

  // spin as a mutable ref (so it remains between frames)
  const spin = useRef<number>(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const speed = 0.85;
    spin.current += delta * speed;
    const tilt = Math.sin(spin.current * 0.6) * 0.2;
    groupRef.current.rotation.set(Math.PI / 2 - 1 + tilt, spin.current, Math.sin(spin.current * 0.9) * 0.12);
  });

  const [scale, setScale] = useState(COIN_SCALE);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth < 1024 ? 1.1 : COIN_SCALE);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <group ref={groupRef} position={[0, 0.18, 0]} scale={scale}>
      <mesh>
        <cylinderGeometry args={[COIN_RADIUS, COIN_RADIUS, COIN_THICKNESS, 128]} />
        {/* The cylinder has 3 “sides”: side, top, bottom — assign materials */}
        <meshBasicMaterial attach="material-0" color="#5e1a75" />
        <meshBasicMaterial attach="material-1" color="#ffffff" map={logoTexture} toneMapped={false} />
        <meshBasicMaterial attach="material-2" color="#b82fd4" map={logoTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function HeroCoin() {
  return (
    <div className="pointer-events-none z-0 order-first mx-auto h-[22rem] w-full max-w-[24rem] sm:h-[26rem] sm:max-w-[28rem] md:h-[30rem] md:max-w-[32rem] lg:absolute lg:inset-0 lg:-right-20 lg:-top-72 lg:order-last lg:mx-0 lg:ml-auto lg:h-[110%] lg:w-4/7 lg:max-w-none">
      <div className="relative mx-auto h-full w-full max-w-[28rem]">
        <Canvas
          className="h-full w-full"
          shadows={false}
          camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 100 }}
          gl={{
            antialias: true,
            alpha: true,
            // set output color space, allowed in recent versions of three / r3f
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          onCreated={({ gl }) => {
            // set background to transparent
            gl.setClearColor('#000000', 0);
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
