import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { easing } from "maath";
import "./util";
import { Frame, RigIN } from "../Frame/Frame";
import { useRoute } from "wouter";

export const Test = () => {
  const [match, params] = useRoute("/test/:id");
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 200] }} eventPrefix="client">
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      {!match && (
        <ScrollControls pages={1} infinite>
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
      )}
      {match && <Carousel />}
      <Environment preset="dawn" background blur={0.5} />
    </Canvas>
  );
};

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  const [match, params] = useRoute("/test/:id");
  useFrame((state, delta) => {
    if (!match) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
      state.events.update(); // Raycasts every frame rather than on pointer-move
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
        0.3,
        delta,
      ); // Move camera
      state.camera.lookAt(0, 0, 0); // Look at center
    }
  });
  if (!match) return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 8 }) {
  return (
    <>
      <Frame
        id="01"
        name={`pick\nles`}
        author="Omar Faruq Tawsif"
        bg="#e4cdac"
        position={[
          Math.sin((1 / count) * Math.PI * 2) * radius,
          0,
          Math.cos((1 / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (1 / count) * Math.PI * 10, 0]}
      >
        <mesh
          visible
          position={[0, 0, 0]}
          scale={0.4}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </Frame>
      <RigIN rotation={[0, 0, 0.15]} />
    </>
  );
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta,
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("/work_.png");
  const [match, params] = useRoute("/test/:id");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (!match) {
      ref.current.material.time.value += Math.abs(scroll.delta) * 4;
      ref.current.material.map.offset.x += delta / 2;
    }
  });
  if (!match)
    return (
      <mesh ref={ref} {...props}>
        <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
        <meshSineMaterial
          map={texture}
          map-anisotropy={16}
          map-repeat={[30, 1]}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    );
}
