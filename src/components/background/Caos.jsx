import SwarmMonitors from "./SwarmMonitors";
import SwarmObjects from "./SwarmObjects";
import SwarmWords from "./SwarmWords";
import { useMemo } from "react";
import { DodecahedronGeometry, MeshStandardMaterial } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import envi from "../../assets/textures/omegacanistest.hdr";
import EnvironmentSite from "./EnvironmentSite";

function Caos({ words }) {
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
      }),
    [],
  );
  const objectsGeometry = useMemo(() => new DodecahedronGeometry(2), []);
  return (
    <>
      <SwarmObjects
        count={1000}
        material={material}
        geometry={objectsGeometry}
      />
      <SwarmWords words={words} material={material} />
      <SwarmMonitors words={words} material={material} />
      <OrbitControls target={[0, 0, 0]} autoRotate enableZoom={false} />
      <Environment background files={envi}/>
    </>
  );
}

export default Caos;
