import { Image, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Color } from "three";
import { easing } from "maath";
import { RigidBody } from "@react-three/rapier";

const GOLDENRATIO = 1.61803398875;

function Figure({ url, c = new Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());

  const aspectRatio = 1902 / 914; // Calculate the aspect ratio
  const width = 3; // Desired width
  const height = width / aspectRatio; // Calculate the height based on the aspect ratio

  useCursor(hovered);
  useFrame((state, dt) => {
    // image.current.material.zoom =
    //   1.2 + Math.sin(rnd * 1000 + state.clock.elapsedTime / 3) / 2;
    // easing.damp3(
    //   image.current.scale,
    //   [0.98 * (hovered ? 0.85 : 1), 0.9 * (hovered ? 0.905 : 1), 1],
    //   0.1,
    //   dt,
    // );
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
