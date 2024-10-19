import { useEffect, useMemo } from "react";
import { useRoute } from "wouter";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import PlanePhysics from "../../ShowRoom/PlanePhysics";
import Player from "../../ShowRoom/Player";
import WordPhysical from "./WordPhysics";
import MonitorStaticPhysic from "../AboutMe/MonitorStaticPhysic";

function Contact({ id }) {
  const [, params] = useRoute("frame/:id");
  const { gl } = useThree();

  const words = useMemo(
    () => [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/kevin-de-jesus-sinchi-soto",
        position: [-15, 0, -8],
      },
      {
        text: "Github",
        link: "https://github.com/RevenBot",
        position: [0, 0, -3],
      },
      {
        text: "revenbot@proton.me",
        link: "",
        position: [15, 0, -8],
      },
    ],
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
    <group>
      <Physics timeStep="vary">
        <PlanePhysics />
        {params?.id == id && <Player />}
        {words.map((item, i) => (
          <WordPhysical key={i} wordData={item} />
        ))}
        <MonitorStaticPhysic position={[-7, 0, -4]} scale={1.5}>
          {`:)  HR  :)`}
        </MonitorStaticPhysic>
        <MonitorStaticPhysic position={[6, 0, -1.5]} scale={1.2}>
          {`^ ^ Projects ^ ^`}
        </MonitorStaticPhysic>
      </Physics>
    </group>
  );
}

export default Contact;
