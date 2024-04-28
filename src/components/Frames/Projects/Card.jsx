import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";
import { Image, Text } from "@react-three/drei";
import { DoubleSide } from "three";

function ActiveCard({ hovered, url, textContainer, ...props }) {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.damp(ref.current.material, "opacity", hovered !== null, 0.3, delta);
  });
  return (
    <group {...props}>
      <Text
        fontSize={0.5}
        position={textContainer.position}
        anchorX={textContainer.anchorX}
        color="black"
      >
        {textContainer.text}
      </Text>
      <Image side={DoubleSide} ref={ref} position={[0, 0, 0]} url={url}>
        <roundedPlaneGeometry args={[9, 1.618 * 3, 0.2]} />
      </Image>
    </group>
  );
}

export default ActiveCard;
