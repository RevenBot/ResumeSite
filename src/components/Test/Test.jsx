import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,  OrbitControls,
} from "@react-three/drei";
import "./util";
import { useRoute } from "wouter";
import envi from "../../assets/textures/omegacanis.hdr";
import { suspend } from 'suspend-react'
import { GainMapLoader, HDRJPGLoader } from '@monogrid/gainmap-js';
import { EquirectangularReflectionMapping } from "three";

export const Test = () => {
  const [match, params] = useRoute("/test/:id");

// function Component() {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 200] }} eventPrefix="client">
      <Envi/>
      <OrbitControls />
    </Canvas>
  );
};

function Envi(){

  const gl = useThree((state) => state.gl)
  const texture = suspend(async (url) => {
  const loader = new HDRJPGLoader(gl)
  const result = await loader.loadAsync('/omegacanis.jpg')
  result.renderTarget.texture.mapping = EquirectangularReflectionMapping
  // loader.dispose() call this if implemented
  return result.renderTarget.texture
}, ['/omegacanis.jpg'])
  return(
      <Environment map={texture} background  />
  )
}
