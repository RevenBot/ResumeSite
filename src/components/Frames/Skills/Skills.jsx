import { createRef, useState } from "react";
import { Nodes } from "./Nodes";
import { Environment } from "@react-three/drei";
import file from "../../../assets/textures/nebula.hdr";
import { useFrame } from "@react-three/fiber";
import { useRoute } from "wouter";
import Node from "./Node";

function Skills() {
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
  const [match] = useRoute("/frame/:id");
  useFrame((state) => {
    if (match) state.scene.backgroundRotation.y = 1.4;
    else state.scene.backgroundRotation.y = -0.2;
  });

  return (
    <group>
      <Nodes>
        <Node
          ref={frontend}
          name="frontend"
          color="#204090"
          position={[-2, 3, -0.9]}
          scale={1}
          connectedTo={[backend]}
        />
        <Node
          ref={html}
          name="    html"
          color="#fcba03"
          position={[-4.5, 0, -0.9]}
          scale={1}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={css}
          name="    css"
          color="#001aff"
          position={[-4.5, -1.3, -0.9]}
          scale={1}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={javascript}
          name="javascript"
          color="#204090"
          position={[-4.5, -2.6, -0.9]}
          scale={1}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={react}
          name="   react"
          color="#00bbff"
          position={[-2.5, -0, -0.9]}
          scale={1}
          connectedTo={[frontend, graphql]}
        />
        <Node
          ref={blazor}
          name="blazor"
          color="#000dff"
          position={[-2.5, -1.3, -0.9]}
          scale={1}
          connectedTo={[frontend, restApi]}
        />

        <Node
          ref={backend}
          name="backend"
          color="#ff0000"
          position={[2, 3, -0.9]}
          scale={1}
          connectedTo={[csharp, python, dotnet]}
        />
        <Node
          ref={csharp}
          name="      c#"
          color="#00ff1a"
          position={[4.5, 0, -0.9]}
          scale={1}
          connectedTo={[]}
        />
        <Node
          ref={python}
          name="python"
          color="#eeff00"
          position={[4.6, -1.3, -0.9]}
          scale={1}
          connectedTo={[]}
        />
        <Node
          ref={dotnet}
          name="dotnet"
          color="#204090"
          position={[2.5, 0, -0.9]}
          scale={1}
          connectedTo={[csharp, mysql, postgresql]}
        />
        <Node
          ref={django}
          name="django"
          color="#204090"
          position={[2.5, -1.3, -0.9]}
          scale={1}
          connectedTo={[python, mysql, postgresql]}
        />
        <Node
          ref={graphql}
          name="graphql"
          color="#ff00ee"
          position={[0, 0, -0.9]}
          scale={1}
          connectedTo={[dotnet, django]}
        />
        <Node
          ref={restApi}
          name="restApi"
          color="#204090"
          position={[0, -1.3, -0.9]}
          scale={1}
          connectedTo={[dotnet, django]}
        />
        <Node
          ref={postgresql}
          name="PostgreSQL"
          color="#00b3ff"
          position={[3, -3, -0.9]}
          scale={1}
          connectedTo={[]}
        />
        <Node
          ref={mysql}
          name="MySQL"
          color="#ffa200"
          position={[5, -3, -0.9]}
          scale={1}
          connectedTo={[]}
        />
      </Nodes>
      <Environment files={file} background />
    </group>
  );
}

export default Skills;
