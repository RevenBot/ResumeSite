import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text3D } from "@react-three/drei";
import Contact from "../Frames/Contacts/Contact";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter_Medium_Regular.json?url",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1,
    );
  });

  return (
    <Billboard {...props}>
      <Text3D
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ words, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const wordsObjects = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (words.length + 1);
    const thetaSpan = (Math.PI * 2) / words.length;
    for (let i = 1; i < words.length + 1; i++)
      for (let j = 0; j < words.length; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          words[j].text,
        ]);
    return temp;
  }, [words, radius]);
  return wordsObjects.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export const Test = () => {
  const words = useMemo(
    () => [
      { text: "github 1" },
      { text: "twitter 1" },
      { text: "cv 1" },
      { text: "email 1" },
      { text: "onlyfans 1" },
    ],
    [],
  );
  return (
    <Canvas camera={{ fov: 70, near: 1, far: 10000, position: [0, 0, 4] }}>
      <ambientLight />
      <OrbitControls />
      <Contact />
    </Canvas>
  );
};
