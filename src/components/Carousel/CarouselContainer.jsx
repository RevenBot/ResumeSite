import { Environment, ScrollControls } from "@react-three/drei";
import { useRoute } from "wouter";
import Rig from "./RigCarousel";
import Banner from "./BannerCarousel";
import CarouselItems from "./CarouselItems";

function CarouselContainer({ frames }) {
  const [match, params] = useRoute("/frame/:id");
  return (
    <>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      {!match && (
        <ScrollControls pages={1} infinite>
          <Rig rotation={[0, 0, 0.15]}>
            <CarouselItems frames={frames} />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
      )}
      {match && <CarouselItems frames={frames} />}
      <Environment preset="dawn" background blur={0.5} />
    </>
  );
}

export default CarouselContainer;