import { Physics, RigidBody } from "@react-three/rapier";
import {
  Gltf,
  Environment,
  KeyboardControls,
} from "@react-three/drei";
import Controller from "ecctrl";

export default function Test() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];
  return (
        <Physics>
        <Environment files="/night.hdr" ground={{ scale: 100 }} />
        <directionalLight
          intensity={0.7}
          castShadow
          shadow-bias={-0.0004}
          position={[-20, 20, 20]}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-20, 20, 20, -20]}
          />
        </directionalLight>
        <ambientLight intensity={0.2} />
        <Physics timeStep="vary">
          <KeyboardControls map={keyboardMap}>
            <Controller  maxVelLimit={5}>
              <Gltf
                castShadow
                receiveShadow
                scale={0.315}
                position={[0, -0.55, 0]}
                src="/ghost_w_tophat-transformed.glb"
              />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial color="lightblue" />
            </mesh>
          </RigidBody>
        </Physics>
        </Physics>
  );
}
