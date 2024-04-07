import { createRef, useState } from "react";
import { Node } from "./Node";
import { Nodes } from "./Nodes";
import { Environment } from "@react-three/drei";
import file from "../../../assets/textures/nebula.hdr";
import { useFrame } from "@react-three/fiber";
import { useRoute } from "wouter";

const Skills = () => {
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
          position={[-0.9, 1, -0.9]}
          scale={0.2}
          connectedTo={[backend]}
        />
        <Node
          ref={html}
          name="    html"
          color="#fcba03"
          position={[-1.4, 0, -0.9]}
          scale={0.2}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={css}
          name="    css"
          color="#001aff"
          position={[-1.4, -0.3, -0.9]}
          scale={0.2}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={javascript}
          name="javascript"
          color="#204090"
          position={[-1.4, -0.6, -0.9]}
          scale={0.2}
          connectedTo={[frontend, react, blazor]}
        />
        <Node
          ref={react}
          name="   react"
          color="#00bbff"
          position={[-0.9, -0, -0.9]}
          scale={0.2}
          connectedTo={[frontend, graphql]}
        />
        <Node
          ref={blazor}
          name="blazor"
          color="#000dff"
          position={[-0.9, -0.3, -0.9]}
          scale={0.2}
          connectedTo={[frontend, restApi]}
        />

        <Node
          ref={backend}
          name="backend"
          color="#ff0000"
          position={[0.9, 1, -0.9]}
          scale={0.2}
          connectedTo={[csharp, python, dotnet]}
        />
        <Node
          ref={csharp}
          name="      c#"
          color="#00ff1a"
          position={[1.4, 0, -0.9]}
          scale={0.2}
          connectedTo={[]}
        />
        <Node
          ref={python}
          name="python"
          color="#eeff00"
          position={[1.4, -0.3, -0.9]}
          scale={0.2}
          connectedTo={[]}
        />
        <Node
          ref={dotnet}
          name="dotnet"
          color="#204090"
          position={[0.9, 0, -0.9]}
          scale={0.2}
          connectedTo={[csharp, mysql, postgresql]}
        />
        <Node
          ref={django}
          name="django"
          color="#204090"
          position={[0.9, -0.3, -0.9]}
          scale={0.2}
          connectedTo={[python, mysql, postgresql]}
        />
        <Node
          ref={graphql}
          name="graphql"
          color="#ff00ee"
          position={[0, 0, -0.9]}
          scale={0.2}
          connectedTo={[dotnet, django]}
        />
        <Node
          ref={restApi}
          name="restApi"
          color="#204090"
          position={[0, -0.3, -0.9]}
          scale={0.2}
          connectedTo={[dotnet, django]}
        />
        <Node
          ref={postgresql}
          name="PostgreSQL"
          color="#00b3ff"
          position={[0.9, -0.8, -0.9]}
          scale={0.2}
          connectedTo={[]}
        />
        <Node
          ref={mysql}
          name="MySQL"
          color="#ffa200"
          position={[1.4, -0.8, -0.9]}
          scale={0.2}
          connectedTo={[]}
        />
      </Nodes>
      <Environment files={file} background />
    </group>
  );
};

export default Skills;
