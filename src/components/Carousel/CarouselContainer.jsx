import { Environment, ScrollControls } from "@react-three/drei";
import { useRoute } from "wouter";
import Rig from "./RigCarousel";
import Banner from "./BannerCarousel";
import CarouselItems from "./CarouselItems";

function CarouselContainer({ frames }) {
  const [match, params] = useRoute("/frame/:id");
  return (
    <group>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      {!match && (
        <ScrollControls pages={frames.length} infinite>
          <Rig scale={3} rotation={[0, 0, 0.12]}>
            <CarouselItems frames={frames} />
          </Rig>
          <Banner scale={3.5} position={[0, -1.5, 0]} />
        </ScrollControls>
      )}
      {match && <CarouselItems frames={frames} />}
      <Environment preset="night" background={true} blur={0.3} />
    </group>
  );
}

export default CarouselContainer;
