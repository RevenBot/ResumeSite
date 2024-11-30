import { Environment, Preload, Text3D } from "@react-three/drei";
import { Suspense, useEffect, useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { useTranslation } from "react-i18next";
import { Physics, RigidBody } from "@react-three/rapier";
import MonitorStaticPhysic from "./MonitorStaticPhysic";
import PlanePhysics from "../../ShowRoom/PlanePhysics";
import { useRoute } from "wouter";
import { useThree } from "@react-three/fiber";
import Player from "../../ShowRoom/Player";
import file from "../../../assets/textures/about-me3d720p.hdr";

const AboutMe = ({ id }) => {
  const [, params] = useRoute("frame/:id");
  const { gl } = useThree();
  const { t } = useTranslation("about-me");

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#789DBC",
        roughness: 0,
        metalness: 1,
        fog: true,
      }),
    [],
  );

  useEffect(() => {
    if (params?.id == id) {
      gl.domElement.requestPointerLock();
    }
    return () => {
      document.exitPointerLock();
    };
  }, [params?.id, id, gl]);
  return (
    <group position={[-5, -10, -20]}>
      <Suspense fallback={null}>
        <Physics timeStep="vary">
          <Preload all />
          <MonitorStaticPhysic position={[-2, 0, 0]} scale={1.2}>
            {`ci{CTRL^R"0p`}
          </MonitorStaticPhysic>
          <MonitorStaticPhysic position={[-5, 0, -1]} scale={1.2}>
            {`:s/Junior/Mid/ge`}
          </MonitorStaticPhysic>
          <PlanePhysics />
          <RigidBody type="fixed" colliders="cuboid">
            <Text3D
              material={material}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              lineHeight={0.5}
              receiveShadow
              position={[-2, 4, 0]}
              font={"/Inter_Medium_Regular.json?url"}
            >
              {t("phrase")}
            </Text3D>
          </RigidBody>
          <MonitorStaticPhysic position={[10, 0, 0]} scale={1.2} invert={true}>
            {`:wq`}
          </MonitorStaticPhysic>
          <MonitorStaticPhysic position={[13, 0, -1]} scale={1.2} invert={true}>
            {`:qa!`}
          </MonitorStaticPhysic>
          <RigidBody type="dynamic" colliders="ball">
            <Text3D
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              lineHeight={0.5}
              receiveShadow
              position={[1, 6, -10]}
              scale={0.7}
              material={material}
              font={"/Inter_Medium_Regular.json?url"}
            >
              JUNIOR
            </Text3D>
          </RigidBody>
          <MonitorStaticPhysic position={[0, 0, -20]} scale={1.2}>
            {`Score`}
          </MonitorStaticPhysic>
          <MonitorStaticPhysic position={[6, 0, -20]} scale={1.2}>
            {`GOOOOOOL`}
          </MonitorStaticPhysic>
          {params?.id == id && <Player />}
        </Physics>
        <Environment files={file} background />
      </Suspense>
    </group>
  );
};

export default AboutMe;
