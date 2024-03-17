import { Canvas } from "@react-three/fiber";
import SwarmObjects from "./SwarmObjects";
import SwarmWords from "./SwarmWords";
import { useMemo } from "react";
import SwarmMonitors from "./SwarmMonitors";
import useStore from "../../context/mode/store";
import CarouselContainer from "../Carousel/CarouselContainer";

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
  const frames = useMemo(
    () => [
      {
        id: "01",
        title: "Alpha 1",
        footer: "1",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.4}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
          </mesh>
        ),
      },
      {
        id: "02",
        title: "Beta 1",
        footer: "2",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.4}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
          </mesh>
        ),
      },
      {
        id: "03",
        title: "Delta 1",
        footer: "3",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.4}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
          </mesh>
        ),
      },
      {
        id: "04",
        title: "Delta 2",
        footer: "4",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.5}
            rotation={[Math.PI / 3, Math.PI / 3, 0]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="skyblue" />
          </mesh>
        ),
      },
      {
        id: "05",
        title: "Delta 3",
        footer: "5",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.6}
            rotation={[0, Math.PI / 4, 0]}
          >
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
            <meshStandardMaterial color="purple" />
          </mesh>
        ),
      },
      {
        id: "06",
        title: "Delta 4",
        footer: "6",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.7}
            rotation={[Math.PI / 6, 0, Math.PI / 6]}
          >
            <coneGeometry args={[0.5, 1, 16]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        ),
      },
      {
        id: "07",
        title: "Delta 5",
        footer: "7",
        mesh: (
          <mesh
            visible
            position={[0, 0, 0]}
            scale={0.8}
            rotation={[0, Math.PI / 6, Math.PI / 3]}
          >
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
        ),
      },
      {
        id: "08",
        title: "Delta 6",
        footer: "8",
        mesh: (
          <mesh
            visible
            position={[0, 0, 2]}
            scale={0.9}
            rotation={[0, Math.PI / 2, 0]}
          >
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="green" />
          </mesh>
        ),
      },
    ],
    [],
  );
  const mode = useStore((state) => state.caosMode);

  return (
    <Canvas eventPrefix="client" camera={{ fov: 15, position: [0, 0, 100] }}>
      {mode && (
        <>
          <ambientLight intensity="0.01" />
          <pointLight distance={60} intensity={100000} color="lightblue" />
          <spotLight
            intensity={400000}
            position={[0, 0, 300]}
            penumbra={0.5}
            color="purple"
          />
          <mesh>
            <planeGeometry args={[1000, 1000, -1]} />
            <meshStandardMaterial
              color="#00ff00"
              roughness={0.5}
              depthTest={false}
            />
          </mesh>
          <SwarmObjects count={1000} />
          <SwarmWords words={words} />
          <SwarmMonitors words={words} />
        </>
      )}
      {!mode && <CarouselContainer frames={frames} />}
    </Canvas>
  );
};

export default Background;
