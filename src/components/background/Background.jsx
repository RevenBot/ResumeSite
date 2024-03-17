import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import useStore from "../../context/mode/store";
import CarouselContainer from "../Carousel/CarouselContainer";
import framesComponents from "../Frames";
import Caos from "./Caos";

const Background = () => {
  const words = useMemo(
    () => [
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "Hello" },
      { text: "World" },
      { text: "Hello" },
      { text: "World" },
    ],
    [],
  );
  const frames = useMemo(() => framesComponents, []);
  const mode = useStore((state) => state.caosMode);

  return (
    <Canvas
      eventPrefix="client"
      camera={{ fov: 70, near: 1, far: 10000, position: [0, 0, 100] }}
    >
      {mode && <Caos words={words} />}
      {!mode && <CarouselContainer frames={frames} />}
    </Canvas>
  );
};

export default Background;
