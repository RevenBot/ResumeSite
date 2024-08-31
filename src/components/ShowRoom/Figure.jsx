import { Image, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing } from "maath";
import { RigidBody } from "@react-three/rapier";


function Figure({ url, ...props }) {
  const image = useRef();
  const frame = useRef();
  const [hovered, hover] = useState(false);


  useCursor(hovered);
  useFrame((_, dt) => {
    easing.dampC(
      frame.current.material.color,
      hovered ? "orange" : "white",
      0.1,
      dt,
    );
  });
  return (
    <group {...props}>
      <RigidBody {...props} type="fixed" colliders="cuboid">
        <mesh
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          scale={[15, 6, 1]}
          position={[0, 3, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="#151515"
            metalness={0.5}
            roughness={0.5}
            envMapIntensity={2}
          />
          <mesh
            ref={frame}
            raycast={() => null}
            scale={[0.99, 0.93, 0.9]}
            position={[0, 0, 0.2]}
          >
            <boxGeometry />
            <meshBasicMaterial toneMapped={false} fog={false} />
          </mesh>
          <Image
            raycast={() => null}
            ref={image}
            scale={[0.914, 0.8, 1]} // Scale the image with the calculated dimensions
            position={[0, 0, 0.7]}
            url={url}
          />
        </mesh>
      </RigidBody>
    </group>
  );
}

export default Figure;
