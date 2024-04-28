import ActiveCard from "./Card";

const Memories = () => {
  return (
    <group scale={0.2}>
      <ActiveCard
        position={[-5, 1, -5]}
        rotation={[0, Math.PI / 4, 0]}
        url={"/img/projects/memories/index.png?url"}
        textContainer={{
          position: [-5, 1, 0.1],
          anchorX: "right",
          text: "HomePage",
        }}
      />
      <ActiveCard
        url={"/img/projects/memories/home.png?url"}
        position={[5, 1, -5]}
        rotation={[0, (7 * Math.PI) / 4, 0]}
        textContainer={{
          position: [-5, 1, 0.1],
          anchorX: "right",
          text: "MainPage",
        }}
      />
      <ActiveCard
        url={"/img/projects/memories/sign-in.png?url"}
        position={[-5, 1, 7]}
        rotation={[0, (3 * Math.PI) / 4, 0]}
        textContainer={{
          position: [-5, 1, 0.1],
          anchorX: "right",
          text: "Authentication",
        }}
      />
      <ActiveCard
        url={"/img/projects/memories/profile.png?url"}
        position={[5, 1, 7]}
        rotation={[0, (5 * Math.PI) / 4, 0]}
        textContainer={{
          position: [-5, 1, 0.1],
          anchorX: "right",
          text: "Profile",
        }}
      />
    </group>
  );
};

export default Memories;
