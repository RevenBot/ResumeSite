import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  Text,
  CameraControls,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing, geometry } from "maath";

extend(geometry);

export function Frame({
  id,
  title,
  footer,
  bg,
  width = 1.2,
  height = 2,
  children,
  ...props
}) {
  const portal = useRef();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/frame/:id");
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame((state, dt) => {
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt);
  });
  return (
    <group {...props}>
      <Text
        fontSize={0.25}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.575, 0.915, 0.02]}
        material-toneMapped={false}
      >
        {title}
      </Text>
      <Text
        fontSize={0.1}
        anchorX="right"
        position={[0.55, -0.859, 0.01]}
        material-toneMapped={false}
      >
        /{id}
      </Text>
      <Text
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.94, 0.01]}
        material-toneMapped={false}
      >
        {footer}
      </Text>
      <mesh
        name={id}
        onDoubleClick={(e) => (
          e.stopPropagation(), setLocation("/frame/" + e.object.name)
        )}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

export function RigIN({
  position = new THREE.Vector3(0, 0, 3),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree();
  const [match, params] = useRoute("/frame/:id");
  useEffect(() => {
    const active = scene.getObjectByName(params?.id);
    if (active) {
      active.parent.localToWorld(position.set(0, 0, 1.2));
      active.parent.localToWorld(focus.set(0, 0, 0));
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });
  if (match)
    return (
      <CameraControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={0.7}
        maxDistance={2}
      />
    );
}
