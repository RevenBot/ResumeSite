import { Gltf, KeyboardControls } from "@react-three/drei";
import Controller from "ecctrl";

const Player = () => {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <KeyboardControls map={keyboardMap}>
      <Controller position={[0, 10, 10]} maxVelLimit={5}>
        <Gltf
          castShadow
          receiveShadow
          scale={0.315}
          position={[0, -1, 0]}
          src="/ghost_w_tophat-transformed.glb"
        />
      </Controller>
    </KeyboardControls>
  );
};

export default Player;
