import Library from "./Library";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import Book from "./Book";
import { Clone } from "@react-three/drei";

const Scene = () => {
  const result = useLoader(GLTFLoader, "/models/homepage/bookOne.glb");
  const result2 = useLoader(GLTFLoader, "/models/homepage/bookTwo.glb");
  const result3 = useLoader(GLTFLoader, "/models/homepage/bookThree.glb");
  const result4 = useLoader(GLTFLoader, "/models/homepage/bookFour.glb");

  // first left top -90 135 110
  // first right top 3 135 110
  // one 4
  // first right top 3 109 110
  //
  // second top left 18,135,110 
  // top right [113,135,110]
  // top right [113,135,110]
  // top right [113,135,110]
  // aggiustare dimensione libri a 5, davanti allineati dietro no
  // 95 / 5  = 19 * 4 = 76  facciamo 48 ? si

  return (
    <>
      <Library />
      <Book scene={result.scene} position={[113,109,110]} />
      <Book scene={result3.scene} position={[-82,135,110]} />
      <Book scene={result4.scene} position={[-78,135,110]} />
    </>
  );
};

export default Scene;
