import { Gltf, KeyboardControls, SpotLight } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import Controller from "ecctrl";
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

  return (
    <KeyboardControls map={keyboardMap}>
      <Controller position={[0, 10, 10]} maxVelLimit={5}>
        <CuboidCollider args={[1, 1, 1]} mass={0} />
        <Gltf
          castShadow
          receiveShadow
          scale={0.4}
          position={[0, -0.5, 0]}
          src="/spaceship.glb"
        />
        <SpotLight
          position={[0, 0.2, 1]}
          angle={0.9}
          penumbra={1}
          intensity={2}
          distance={8}
          castShadow
          target={ref.current}
        />
        <mesh position={[0, 0, 2]} ref={ref} visible={false} />
      </Controller>
    </KeyboardControls>
  );
};

export default Player;
