import React, { useRef, useState, useMemo } from 'react';
import { useSpring, animated, config } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; 
import { Edges } from '@react-three/drei';
import { BoxGeometry } from 'three';

export default function Element3D() {
    const ref = useRef();
    // const memo = useMemo(shape);
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    });
    
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        ref.current.rotation.y += 0.01;
    });

    const shape = () => {
        const roundedRectShape = new THREE.Shape();
        roundedRectShape.moveTo( 0, 0 + 20 );
        roundedRectShape.lineTo( 0, 0 + 50 - 20 );
        roundedRectShape.quadraticCurveTo( 0, 0 + 50, 0 + 20, 0 + 50 );
        roundedRectShape.lineTo( 0 + 50 - 20, 0 + 50 );
        roundedRectShape.quadraticCurveTo( 0 + 50, 0 + 50, 0 + 50, 0 + 50 - 20 );
        roundedRectShape.lineTo( 0 + 50, 0 + 20 );
        roundedRectShape.quadraticCurveTo( 0 + 50, 0, 0 + 50 - 50, 0 );
        roundedRectShape.lineTo( 0+ 20, 0 );
        roundedRectShape.quadraticCurveTo( 0, 0, 0, 0 + 20 );

    };
    // .set(0, 0, 50, 50, 20)
  return (
        <animated.mesh
            scale={scale}
            rotation={[0,0,0]}
            onClick={() => setActive(!active)}
            ref={ ref }
        >
            <shapeGeometry args={[shape]} />
            <meshBasicMaterial />
        </animated.mesh>
  )
};