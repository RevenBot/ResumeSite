import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Word from "./Word";

extend({ TextGeometry });

function SwarmWords(props) {
  const { words, material } = props;
  console.log(words);
  return words.map((item, i) => (
    <Word key={i} material={material}>
      {item.text}
    </Word>
  ));
}

export default SwarmWords;
