import { useRoute } from "wouter";
import Figures from "./../../ShowRoom/Figures";
import { Physics, RigidBody } from "@react-three/rapier";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import Player from "../../ShowRoom/Player";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Memories = ({ id }) => {
  const [match, params] = useRoute("frame/:id");

  const images = [
    // Front
    {
      position: [0, 0, 1.5],
      rotation: [0, 0, 0],
      url: "/img/projects/memories/home.png",
    },
    // Back
    {
      position: [-0.8, 0, -0.6],
      rotation: [0, 0, 0],
      url: "/img/projects/memories/index.png",
    },
  ];
  const { gl } = useThree();

  useEffect(() => {
    if (params?.id == id) {
      gl.domElement.requestPointerLock();
    }
    return () => {
      document.exitPointerLock();
    };
  }, [params?.id]);

  return (
    <group position={[-10, -20, -30]}>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <Physics timeStep="vary">
        <RigidBody type="fixed" colliders="trimesh">
          <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </RigidBody>
        <Figures images={images} />
        {params?.id == id && <Player />}
      </Physics>
      <Environment preset="city" />
    </group>
  );
};

export default Memories;
