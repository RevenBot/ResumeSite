import { Gltf, KeyboardControls, SpotLight } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import Controller from "ecctrl";
import { Suspense, useEffect } from "react";
import { useRef } from "react";

const Player = () => {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
  ];

  const ref = useRef();
  const light = useRef();

  useEffect(() => {
    if (light.current != null && ref.current != null) {
      light.current.target.updateMatrixWorld();
      light.current.target = ref.current;
    }
  }, []);

  return (
    <KeyboardControls map={keyboardMap}>
      <group position={[0, 10, 10]}>
        <Suspense fallback={null}>
          <Controller maxVelLimit={5}>
            <mesh position={[0, -1, 4]} ref={ref}></mesh>
            <CuboidCollider
              args={[1, 1, 1]}
              blockRotations={true} // Blocca tutte le rotazioni
              lockTranslations={[true, true, false]}
              mass={0.2}
            />
            <Gltf
              castShadow
              receiveShadow
              scale={0.4}
              position={[0, -0.5, 0]}
              src="/spaceship.glb"
            />
            <SpotLight
              ref={light}
              position={[0, 0.2, 1]}
              angle={0.5}
              color={"#fff"}
              penumbra={1}
              intensity={2000}
              distance={8}
              castShadow
              target={ref.current}
            />
          </Controller>
        </Suspense>
      </group>
    </KeyboardControls>
  );
};

export default Player;
