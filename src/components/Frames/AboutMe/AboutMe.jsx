import { Environment,  Text3D } from "@react-three/drei";
import {  useMemo, useRef } from "react";
import { MeshStandardMaterial } from "three";
import file from "../../../assets/textures/about-me.hdr";
import MonitorStatic from "./MonitorStatic";
import { useTranslation } from "react-i18next";

const AboutMe = ({ id }) => {
  const ref = useRef();
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
        color: "#8a8a8a",
      }),
    [],
  );
  const fontProps = {
    font: "/Inter_Medium_Regular.json?url",
    fontSize: 1,
    letterSpacing: -0.09,
    lineHeight: 0.6,
    "material-toneMapped": false,
    color: "red",
  };
  const { t } = useTranslation("about-me");


  return (
    <group>
      <MonitorStatic position={[-5.5, -1.2, -0.37]}>
        {`ci{CTRL^R"0p`}
      </MonitorStatic>
      <Text3D
        ref={ref}
        {...fontProps}
        material={material}
        position={[-10, 1, -0.5]}
      >
        {t("phrase")}
      </Text3D>
      <MonitorStatic position={[5.5, -1.2, -0.37]} invert={true}>
        {`:wq`}
      </MonitorStatic>
      <Environment files={file} background />
    </group>
  );
};

export default AboutMe;
