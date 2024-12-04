import { PresentationControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Swarm from "./Swarm";
import Postpro from "./PostPro";
import Ambient from "./Ambient";
import Scene from "./Scene";

const HomePage = () => {
  return (
    <Canvas
      linear
      flat
      legacy
      dpr={1}
      camera={{ fov: 100, position: [0, 150, 250] }}
    >
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Scene />
      </PresentationControls>
      <Ambient />
      <Swarm count={20000} />
      <Postpro />
      <Stats />
    </Canvas>
  );
};

export default HomePage;
