import { Environment, Text3D } from "@react-three/drei";
import file from "../../../assets/textures/contacts.hdr";
import { MeshStandardMaterial } from "three";
import { useMemo, useRef } from "react";

function Contact() {
  const ref = useRef();
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0,
        color: "#bbbbbb",
      }),
    [],
  );

  const fontProps = {
    font: "/Inter_Medium_Regular.json?url",
    fontSize: 0.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  const words = useMemo(
    () => [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/kevin-de-jesus-sinchi-soto",
        position: [-2, 2.5, -1],
      },
      {
        text: "Github",
        link: "https://github.com/RevenBot",
        position: [0.5, 0, -1],
      },
      { text: "revenbot@proton.me", link: "", position: [-1.7, -2.5, -1] },
    ],
    [],
  );

  const OnClick = (link) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <group>
      {words.map((item, i) => (
        <Text3D
          key={i}
          ref={ref}
          position={item.position}
          onClick={() => OnClick(item.link)}
          {...fontProps}
          material={material}
        >
          {item.text}
        </Text3D>
      ))}
      <Environment files={file} background />
    </group>
  );
}

export default Contact;
