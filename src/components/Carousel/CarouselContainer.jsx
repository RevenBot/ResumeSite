import { Environment, FlyControls, OrbitControls, ScrollControls } from "@react-three/drei";
import { useRoute } from "wouter";
import Rig from "./RigCarousel";
import Banner from "./BannerCarousel";
import CarouselItems from "./CarouselItems";

function CarouselContainer({ frames }) {
  const [match] = useRoute("/frame/:id");
  return (
    <group>
      {!match && (
        <ScrollControls pages={frames.length} infinite>
          <Rig scale={3} rotation={[0, 0, 0.12]}>
            <CarouselItems frames={frames} />
            <FlyControls movementSpeed={8} makeDefault />
          </Rig>
          <Banner scale={3.5} position={[0, -1.5, 0]} />
        </ScrollControls>
      )}
      {match && (<>
        <CarouselItems
          frames={frames} />
        <OrbitControls makeDefault
           minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minDistance={1}
          maxDistance={15}
        />
      </>)}
      <Environment preset="night" background={true} blur={0.3} />
    </group>
  );
}

export default CarouselContainer;
