import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AboutMe from "../Frames/AboutMe/AboutMe";

export const Test = () => {
  // function Component() {
  return (
    <Canvas camera={{ fov: 70, near: 1, far: 10000, position: [0, 0, 4] }}>
      <ambientLight />
      <OrbitControls />
      <AboutMe></AboutMe>
    </Canvas>
  );
};
