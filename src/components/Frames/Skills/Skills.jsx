import { createRef, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";
import file from "../../../assets/textures/nebula720p.hdr";
import { useThree } from "@react-three/fiber";
import { useRoute } from "wouter";
import { Physics } from "@react-three/rapier";
import PlanePhysics from "../../ShowRoom/PlanePhysics";
import Player from "../../ShowRoom/Player";
import NodePhysical from "./NodePhysics";
import { NodesPhysics } from "./NodesPhysics";

function Skills({ id }) {
  const [
    [
      frontend,
      html,
      css,
      javascript,
      react,
      blazor,
      backend,
      csharp,
      python,
      dotnet,
      django,
      graphql,
      restApi,
      mysql,
      postgresql,
    ],
  ] = useState(() => [...Array(15)].map(createRef));
  const [, params] = useRoute("frame/:id");
  const { gl } = useThree();

  useEffect(() => {
    if (params?.id == id) {
      gl.domElement.requestPointerLock();
    }
    return () => {
      document.exitPointerLock();
    };
  }, [params?.id]);

  return (
    <group>
      <Physics timeStep="vary">
        <PlanePhysics />
        {params?.id == id && <Player />}
        <NodesPhysics>
          <NodePhysical
            ref={frontend}
            name="frontend"
            color="#204090"
            position={[-2, 1, -20]}
            scale={1.6}
            connectedTo={[backend]}
          />
          <NodePhysical
            ref={html}
            name="    html"
            color="#fcba03"
            position={[-12, 1, -12]}
            scale={1.6}
            connectedTo={[frontend, react, blazor]}
          />
          <NodePhysical
            ref={css}
            name="    css"
            color="#001aff"
            position={[-12, 1, -6]}
            scale={1.6}
            connectedTo={[frontend, react, blazor]}
          />
          <NodePhysical
            ref={javascript}
            name="javascript"
            color="#204090"
            position={[-12, 1, -2]}
            scale={1.6}
            connectedTo={[frontend, react, blazor]}
          />
          <NodePhysical
            ref={react}
            name="   react"
            color="#00bbff"
            position={[-6, 1, -12]}
            scale={1.6}
            connectedTo={[frontend, graphql]}
          />
          <NodePhysical
            ref={blazor}
            name="blazor"
            color="#000dff"
            position={[-6, 1, -6]}
            scale={1.6}
            connectedTo={[frontend, restApi]}
          />

          <NodePhysical
            ref={backend}
            name="backend"
            color="#ff0000"
            position={[2, 1, -20]}
            scale={1.6}
            connectedTo={[csharp, python, dotnet]}
          />
          <NodePhysical
            ref={csharp}
            name="      c#"
            color="#00ff1a"
            position={[12, 1, -12]}
            scale={1.6}
            connectedTo={[]}
          />
          <NodePhysical
            ref={python}
            name="python"
            color="#eeff00"
            position={[12, 1, -6]}
            scale={1.6}
            connectedTo={[]}
          />
          <NodePhysical
            ref={dotnet}
            name="dotnet"
            color="#204090"
            position={[6, 1, -12]}
            scale={1.6}
            connectedTo={[csharp, mysql, postgresql]}
          />
          <NodePhysical
            ref={django}
            name="django"
            color="#204090"
            position={[6, 1, -6]}
            scale={1.6}
            connectedTo={[python, mysql, postgresql]}
          />
          <NodePhysical
            ref={graphql}
            name="graphql"
            color="#ff00ee"
            position={[0, 1, -10]}
            scale={1.6}
            connectedTo={[dotnet, django]}
          />
          <NodePhysical
            ref={restApi}
            name="restApi"
            color="#204090"
            position={[0, 1, -7]}
            scale={1.6}
            connectedTo={[dotnet, django]}
          />
          <NodePhysical
            ref={postgresql}
            name="PostgreSQL"
            color="#00b3ff"
            position={[7, 1, -2]}
            scale={1.6}
            connectedTo={[]}
          />
          <NodePhysical
            ref={mysql}
            name="MySQL"
            color="#ffa200"
            position={[10, 1, -2]}
            scale={1.6}
            connectedTo={[]}
          />
        </NodesPhysics>
      </Physics>
      <Environment files={file} background />
    </group>
  );
}

export default Skills;
