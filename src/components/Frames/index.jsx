import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contacts/Contact";
import Memories from "./Projects/Memories";
import Resume from "./Projects/Resume";
import WordleSolver from "./Projects/WordleSolver";
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
    id: "project-memories",
    title: "Memories",
    footer: "4",
    description: "default",
    mesh: <Memories />,
  },
  {
    id: "project-wordle",
    title: "Wordle Solver",
    footer: "5",
    description: "default",
    mesh: <WordleSolver />,
  },
  {
    id: "resume",
    title: "Resume",
    footer: "6",
    description: "default",
    mesh: <Resume />,
  },
  {
    id: "07",
    title: "",
    footer: "7",
    description: "default",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={0.6}
        rotation={[0, Math.PI / 6, Math.PI / 3]}
      >
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    ),
  },
  {
    id: "08",
    title: "",
    footer: "8",
    description: "default",
    mesh: (
      <mesh
        visible
        position={[0, 0, 0]}
        scale={0.5}
        rotation={[0, Math.PI / 2, 0]}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    ),
  },
];

export default frames;
