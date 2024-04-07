import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";

const frames = [
  {
    id: "about-me",
    title: "About me",
    footer: "1",
    mesh: <AboutMe />,
  },
  {
    id: "skills",
    title: "Skills",
    footer: "2",
    mesh: <Skills />,
  },
  {
    id: "03",
    title: "Delta 1",
    footer: "3",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>
    ),
  },
  {
    id: "04",
    title: "Delta 2",
    footer: "4",
    mesh: (
      <mesh visible position={[0, 0, 0]} scale={10}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    ),
  },
  {
    id: "05",
    title: "Delta 3",
    footer: "5",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={0.6}
        rotation={[0, Math.PI / 4, 0]}
      >
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    ),
  },
  {
    id: "06",
    title: "Delta 4",
    footer: "6",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={0.7}
        rotation={[Math.PI / 6, 0, Math.PI / 6]}
      >
        <coneGeometry args={[0.5, 1, 16]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    ),
  },
  {
    id: "07",
    title: "Delta 5",
    footer: "7",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={0.8}
        rotation={[0, Math.PI / 6, Math.PI / 3]}
      >
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    ),
  },
  {
    id: "08",
    title: "Delta 6",
    footer: "8",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={4}
        rotation={[0, Math.PI / 2, 0]}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    ),
  },
];

export default frames;
