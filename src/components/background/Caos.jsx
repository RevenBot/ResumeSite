import { useFrame } from "@react-three/fiber";
import SwarmMonitors from "./SwarmMonitors";
import SwarmObjects from "./SwarmObjects";
import SwarmWords from "./SwarmWords";

function Caos({ words }) {
  useFrame((state, delta) => {
    state.camera.position.set(0, 0, 200);
    state.camera.lookAt(0, 0, 0);
    state.camera.fov = 100;
  });
  return (
    <>
      <ambientLight intensity="0.01" />
      <pointLight distance={200} intensity={10000} color="lightblue" />
      <spotLight
        intensity={20000}
        position={[0, 0, 100]}
        penumbra={1}
        color="purple"
      />
      <mesh>
        <planeGeometry args={[1000, 1000, 0]} />
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
  );
}

export default Caos;
