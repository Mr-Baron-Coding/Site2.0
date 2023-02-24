import React from 'react';
import { Canvas } from '@react-three/fiber';
import Stars from './Three/Star';
import ProjectElement3D from './Three/ProjectElement3D';
import Element3D from './Three/Element3D';

export default function ThreePlayGround() {
  return (
      <Canvas camera={{ position: [0, 0, 1] }} style={{height: '100vh', position: "absolute"}}>
        <Stars />
        <ambientLight />
        <directionalLight position={[0,5,0]} />
      </Canvas>
  )
}
