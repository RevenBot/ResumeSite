import {  useThree } from "@react-three/fiber";
import {
  Environment,  
} from "@react-three/drei";
import { suspend } from 'suspend-react'
import {  HDRJPGLoader } from '@monogrid/gainmap-js';
import { EquirectangularReflectionMapping } from "three";
import { useEffect, useState } from "react";

function EnvironmentSite(){

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      // remove event listener when the component is unmounted to not cause any memory leaks
      // otherwise the event listener will continue to be active
      window.removeEventListener('resize', handleResize);
    };
  // add `isMobile` state variable as a dependency so that
  // it is called every time the window is resized
  }, [isMobile]);

  const gl = useThree((state) => state.gl)


  const texture = suspend(async () => {
  const loader = new HDRJPGLoader(gl)
  let url = "/omegacanistest.jpg"
  if(isMobile){
      url = "/omegacanis480.jpg"
    }
  console.log(url)
  const result = await loader.loadAsync(url)
  result.renderTarget.texture.mapping = EquirectangularReflectionMapping
  // loader.dispose() call this if implementeW546,
  return result.renderTarget.texture
}, [isMobile])
  return(
      <Environment map={texture} background  />
  )
}


export default EnvironmentSite
