import { Canvas } from "@react-three/fiber";
import ActiveCard from "../Frames/Projects/Card";
import { OrbitControls } from "@react-three/drei";

export const Test = () => {
  return (
    <Canvas camera={{ fov: 70, near: 1, far: 10000, position: [0, 0, 4] }}>
      <ActiveCard url={"/work-in-progress.jpg?url"} text={"hello"} />
      <OrbitControls />
    </Canvas>
  );
};
