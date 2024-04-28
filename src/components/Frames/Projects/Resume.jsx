import ActiveCard from "./Card";

const Resume = () => {
  return (
    <group scale={0.4}>
      <ActiveCard
        position={[-10, 0, -9]}
        rotation={[0, Math.PI / 4, 0]}
        url={"/img/projects/resume/caos.png?url"}
        textContainer={{
          position: [-8, 1, 0.1],
          anchorX: "left",
          text: "Caos mode",
        }}
      />
      <ActiveCard
        url={"/img/projects/resume/carousel.png?url"}
        position={[0, 0, -12]}
        rotation={[0, 0, 0]}
        textContainer={{
          position: [1, -3, 0.1],
          anchorX: "right",
          text: "Carousel",
        }}
      />
      <ActiveCard
        url={"/img/projects/resume/frame.png?url"}
        position={[10, 0, -9]}
        rotation={[0, (7 * Math.PI) / 4, 0]}
        textContainer={{
          position: [7, 1, 0.1],
          anchorX: "right",
          text: "Frames",
        }}
      />
    </group>
  );
};

export default Resume;
