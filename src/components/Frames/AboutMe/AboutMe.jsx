import { Environment, Text3D } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { MeshStandardMaterial } from "three";
import file from "../../../assets/textures/about-me.hdr";
import MonitorStatic from "./MonitorStatic";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const ref = useRef();
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
      }),
    [],
  );
  const fontProps = {
    font: "/Inter_Medium_Regular.json?url",
    fontSize: 0.5,
    letterSpacing: -0.09,
    lineHeight: 0.6,
    "material-toneMapped": false,
    color: "red",
  };
  const { t } = useTranslation("about-me");
  return (
    <group>
      <MonitorStatic position={[-0.75, -0.2, -0.37]} scale={0.4}>
        {`ci{CTRL^R"0p`}
      </MonitorStatic>
      <Text3D
        ref={ref}
        {...fontProps}
        material={material}
        position={[-0.85, 0.2, -0.5]}
        scale={0.1}
      >
        <meshStandardMaterial color="#8a8a8a" />
        {t("phrase")}
      </Text3D>
      <MonitorStatic position={[0.9, -0.2, -0.37]} scale={0.4} invert={true}>
        {`:wq`}
      </MonitorStatic>
      <ambientLight />
      <Environment files={file} background />
    </group>
  );
};

export default AboutMe;
