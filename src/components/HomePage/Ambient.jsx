const Ambient = () => {
  return (
    <>
      <ambientLight intensity={10} />
      <pointLight position={[0, 200, 0]} intensity={100000} color="lightblue" />
      <spotLight
        intensity={500000}
        position={[0, 0, 600]}
        penumbra={0.2}
        color="#fff"
      />
      <mesh position={[0, 0, -100]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#000" roughness={0.5} depthTest={false} />
      </mesh>
    </>
  );
};

export default Ambient;
