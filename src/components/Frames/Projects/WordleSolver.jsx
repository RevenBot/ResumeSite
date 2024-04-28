import ActiveCard from "./Card";

const WordleSolver = () => {
  return (
    <group scale={0.4}>
      <ActiveCard
        position={[-10, 0, -9]}
        rotation={[0, Math.PI / 4, 0]}
        url={"/img/projects/wordle-solver/main.png?url"}
        textContainer={{
          position: [-8, 1, 0.1],
          anchorX: "left",
          text: "HomePage",
        }}
      />
      <ActiveCard
        url={"/img/projects/wordle-solver/solver.png?url"}
        position={[0, 0, -12]}
        rotation={[0, 0, 0]}
        textContainer={{
          position: [1, -3, 0.1],
          anchorX: "right",
          text: "Solver",
        }}
      />
      <ActiveCard
        url={"/img/projects/wordle-solver/results.png?url"}
        position={[10, 0, -9]}
        rotation={[0, (7 * Math.PI) / 4, 0]}
        textContainer={{
          position: [7, 1, 0.1],
          anchorX: "right",
          text: "Results",
        }}
      />
    </group>
  );
};

export default WordleSolver;
