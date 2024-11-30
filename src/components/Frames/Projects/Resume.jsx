import { useRoute } from "wouter";
import Figures from "./../../ShowRoom/Figures";
import { Physics, RigidBody } from "@react-three/rapier";
import Player from "../../ShowRoom/Player";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import PlanePhysics from "../../ShowRoom/PlanePhysics";
import file from "../../../assets/textures/projects720p.hdr";
import { Environment } from "@react-three/drei";

const Resume = ({ id }) => {
  const [, params] = useRoute("frame/:id");

  const images = [
    {
      position: [7, 0, -2],
      rotation: [0, (11 * Math.PI) / 6, 0],
      url: "/img/projects/resume/caos.png?url",
    },
    {
      position: [-7, 0, -2],
      rotation: [0, -(11 * Math.PI) / 6, 0],
      url: "/img/projects/resume/carousel.png?url",
    },
    {
      position: [0, 0, -8],
      rotation: [0, 0, 0],
      url: "/img/projects/resume/frame.png?url",
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
    <group position={[0, -5, 0]}>
      <Physics timeStep="vary">
        <RigidBody type="fixed" colliders="trimesh">
          <PlanePhysics />
        </RigidBody>
        <Figures images={images} />
        {params?.id == id && <Player />}
      </Physics>
      <Environment files={file} background />
    </group>
  );
};

export default Resume;
