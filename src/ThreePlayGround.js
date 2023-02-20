// import { useFrame } from "@react-three/fiber";
// import React, { useEffect, useRef, useState } from "react";
// import * as Three from "three";

// export default function ThreePlayGround() {
//     const ref = useRef();
//     const [hovered, setHover] = useState(false);
//     const [clicked, setClick] = useState(false);
//     useFrame((state, delta) => (ref.current.rotation.x += 0.01));

//     const scene = new Three.Scene();
//     const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
//     const renderer = new Three.WebGLRenderer({
//         canvas: document.querySelector("#bg"),
//     });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.setZ(30);
//     renderer.render(scene, camera);

//     const geometry = new Three.TorusGeometry(10, 3, 16, 100);
//     const material = new Three.MeshBasicMaterial({
//         color: 0xff6347,
//         wireframe: true,
//     });
//     const torus = new Three.Mesh(geometry, material);
//     scene.add(torus);

//     useEffect(() => {
//         const cus = () => {
//             requestAnimationFrame(cus);
//             renderer.render( scene, camera);
//         };
//     },[]);

//     const Cylinder3d = () => {
//         return (
//             <mesh

//             >
//             </mesh>
//         )
//     };
//   return (
//     <canvas id='bg'></canvas>
//   )
// }
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cylinder3d from './Three/Celinder';
import Stars from './Three/Star';

export default function ThreePlayGround() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} style={{height: '100vh', position: 'absolute' }}>
      <Stars />
    </Canvas>
  )
}
