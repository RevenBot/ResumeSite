import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contacts/Contact";
import Skills from "./Skills/Skills";

const frames = [
  {
    id: "about-me",
    title: "About me",
    footer: "1",
    description: "about-me",
    mesh: <AboutMe />,
  },
  {
    id: "skills",
    title: "Skills",
    footer: "2",
    description: "skills",
    mesh: <Skills />,
  },
  {
    id: "contacts",
    title: "Contacts",
    footer: "3",
    description: "contacts",
    mesh: <Contact />,
  },
  {
    id: "04",
    title: "Delta 2",
    footer: "4",
    description: "phrase-2",
    mesh: (
      <mesh visible position={[0, 0, 0]} scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    ),
  },
  {
    id: "05",
    title: "Delta 3",
    footer: "5",
    description: "default",
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
    description: "6666666?",
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
    description: "7777777777?",
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
    description: "88888888?",
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
