import { Canvas } from "@react-three/fiber";
import SwarmObjects from "./SwarmObjects";
import SwarmWords from "./SwarmWords";
import { useMemo } from "react";
import SwarmMonitors from "./SwarmMonitors";
import useStore from "../../context/mode/store";

const Background = () => {
  const words = useMemo(
    () => [
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "World" },
    ],
    [],
  );
  const mode = useStore((state) => state.caosMode);
  return (
    <Canvas
      linear
      flat
      legacy
      dpr={1}
      camera={{ fov: 100, position: [0, 0, 30] }}
    >
      <ambientLight intensity="0.01" />
      <pointLight distance={60} intensity={10000} color="lightblue" />
      <spotLight
        intensity={400000}
        position={[0, 0, 1000]}
        penumbra={0.1}
        color="purple"
      />
      <mesh>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial
          color="#00ff00"
          roughness={0.5}
          depthTest={false}
        />
      </mesh>
      {mode && (
        <>
          <SwarmObjects count={1000} />
          <SwarmWords words={words} />
          <SwarmMonitors words={words} />
        </>
      )}
    </Canvas>
  );
};

export default Background;
