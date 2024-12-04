import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
const Library = () => {
  const library = useLoader(GLTFLoader, "/models/homepage/test.glb");
  const fillBook = useLoader(GLTFLoader, "/models/homepage/fillBooks.glb");
  return (
    <>
      <primitive
        object={library.scene}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        children-0-castShadow
      />
      <primitive
        object={fillBook.scene}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        children-0-castShadow
      />
    </>
  );
};

export default Library;
