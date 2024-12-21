import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Book = ({ bookType, bookName, ...props }) => {
  const { scene } = useLoader(GLTFLoader, `/models/homepage/${bookType}.glb`);
  return (
    <group {...props}>
      <Text
        color={"#444"}
        position={[3, 8, 25]}
        rotation={[0, 0, Math.PI / 2]}
        scale={3}
      >
        {bookName}
      </Text>
      <primitive object={scene.clone()} children-0-castShadow />
    </group>
  );
};

export default Book;
