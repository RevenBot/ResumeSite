import {  useThree } from "@react-three/fiber";
import {
  Environment,  
} from "@react-three/drei";
import { suspend } from 'suspend-react'
import {  HDRJPGLoader } from '@monogrid/gainmap-js';
import { EquirectangularReflectionMapping } from "three";

function EnvironmentSite(){

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


export default EnvironmentSite
