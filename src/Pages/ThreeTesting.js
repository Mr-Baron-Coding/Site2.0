// import { Canvas, useFrame } from "@react-three/fiber";
// import React, { useRef, useState } from "react";
// import { useSpring, animated, config } from "@react-spring/three";
// import Element3D from "../Three/Element3D";

// export default function ThreeTesting() {
//   return (
//       <Canvas camera={{ position: [0, 0, 3], fov: 50 }} style={{height: '100vh', border: '3px solid black'}}>
//       <ambientLight intensity={0.1} />
//         <directionalLight />
//         <Element3D />

//       </Canvas>
//   );
import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MeshDistortMaterial, Sphere, RoundedBox } from '@react-three/drei';

const Box = () => {
    return (
        <>
            <RoundedBox args={[2,2,0.2]} radius={0.1} smoothness={10} >
                <meshPhongMaterial color="#f3f3f3" />
            </RoundedBox>
        </>        
    )
};

export default function ThreeTesting() {
  return (
    <Canvas shadows camera={{ position: [1,1,1] }} style={{ height: '100vh', border: '5px solid black'}}>
        <Box />
        <pointLight position={[5,5,5]} intensity={0.5}/>
        <ambientLight intensity={0.5} color='blue' shadows />
        <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />
    </Canvas>
  )
}
