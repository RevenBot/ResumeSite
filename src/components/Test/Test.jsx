import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Skills from "../Frames/Skills/Skills";

export const Test = () => {
  // function Component() {
  return (
    <Canvas camera={{ fov: 70, near: 1, far: 10000, position: [0, 0, 4] }}>
      <ambientLight />
      <OrbitControls />
      <Skills />
    </Canvas>
  );
};
