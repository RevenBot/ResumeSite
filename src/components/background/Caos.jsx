import SwarmMonitors from "./SwarmMonitors";
import SwarmObjects from "./SwarmObjects";
import SwarmWords from "./SwarmWords";
import { useEffect, useMemo, useState } from "react";
import { DodecahedronGeometry, MeshStandardMaterial } from "three";
import { OrbitControls } from "@react-three/drei";
import EnvironmentSite from "./EnvironmentSite";

function Caos({ words }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024,
  );
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
      }),
    [],
  );
  const objectsGeometry = useMemo(() => new DodecahedronGeometry(2), []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      // remove event listener when the component is unmounted to not cause any memory leaks
      // otherwise the event listener will continue to be active
      window.removeEventListener("resize", handleResize);
    };
    // add `isMobile` state variable as a dependency so that
    // it is called every time the window is resized
  }, [isMobile]);
  return (
    <>
      <SwarmObjects
        count={isMobile ? 300 : 1000}
        material={material}
        geometry={objectsGeometry}
      />
      <SwarmWords
        words={isMobile ? words : words.concat(words)}
        material={material}
      />
      <SwarmMonitors
        words={isMobile ? words : words.concat(words)}
        material={material}
      />
      <OrbitControls target={[0, 0, 0]} autoRotate enableZoom={false} />
      <EnvironmentSite isMobile={isMobile} />
    </>
  );
}

export default Caos;
