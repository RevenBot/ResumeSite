import { Environment, Text3D } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { useTranslation } from "react-i18next";
import { Physics, RigidBody } from "@react-three/rapier";
import MonitorStaticPhysic from "./MonitorStaticPhysic";
import PlanePhysics from "../../ShowRoom/PlanePhysics";
import { useRoute } from "wouter";
import { useThree } from "@react-three/fiber";
import Player from "../../ShowRoom/Player";

const AboutMe = ({ id }) => {
  const [, params] = useRoute("frame/:id");
  const { gl } = useThree();

  useEffect(() => {
    if (params?.id == id) {
      gl.domElement.requestPointerLock();
    }
    return () => {
      document.exitPointerLock();
    };
  }, [params?.id]);
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
        color: "#fff",
        metalness: 1,
        opacity: 1,
        envMapIntensity: 20,
      }),
    [],
  );
  const fontProps = {
    font: "/Inter_Medium_Regular.json?url",
    fontSize: 0.5,
    letterSpacing: -0.09,
    lineHeight: 0.6,
    "material-toneMapped": false,
    color: "white",
  };
  const { t } = useTranslation("about-me");
  return (
    <group position={[-5, -10, -20]}>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />

      <Physics debug timeStep="vary">
        <MonitorStaticPhysic position={[-2, 0, 0]} scale={1.2}>
          {`ci{CTRL^R"0p`}
        </MonitorStaticPhysic>
        <MonitorStaticPhysic position={[-5, 0, -1]} scale={1.2}>
          {`:s/Junior/Mid/ge`}
        </MonitorStaticPhysic>
        <PlanePhysics />
        <RigidBody type="fixed" colliders="cuboid">
          <Text3D {...fontProps} material={material} position={[-2, 4, 0]}>
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
            {...fontProps}
            material={material}
            position={[1, 6, -10]}
            scale={0.7}
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
      <Environment
        path="/"
        files={"HDR_blue_nebulae2k.hdr"}
        background={true}
      />
    </group>
  );
};

export default AboutMe;
