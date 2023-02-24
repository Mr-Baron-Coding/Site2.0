import React from 'react';
import { Canvas } from '@react-three/fiber';
import Element3D from './Element3D';

export default function ProjectElement3D() {
  return (
    <>
        <Canvas>
            {/* <MyRotatingBox /> */}
            <Element3D />
            <ambientLight intensity={0.1} />
            <directionalLight />
        </Canvas>
    </>
  )
}
