import { useMemo, useState } from "react";
import Book from "./Books/Book";
import Library from "./Library";
import useStoreHomePage from "../../context/homepage/store";
import Board from "./Board";
import { Text } from "@react-three/drei";

const Scene = ({ objects }) => {
  // first left top -90 135 110
  // first right top 3 135 110
  // one 4
  // first right top 3 109 110
  //
  // second top left 18,135,110
  // top right [113,135,110]
  // top right [113,135,110]
  // top right [113,135,110]
  // aggiustare dimensione libri a 5, davanti allineati dietro no
  // 95 / 5  = 19 * 4 = 76  facciamo 48 ? si
  //

  const { pageId, updatePageId } = useStoreHomePage((state) => state);

  const [hoverName, setName] = useState(null);

  const objectSize = 5; // Dimensione di ogni oggetto
  const regions = {
    topLeft: { start: -90, end: 3 },
    topRight: { start: 18, end: 113 },
  };

  const distributedObjects = useMemo(() => {
    const regionPositions = {
      topLeft: [],
      topRight: [],
    };

    const generateRandomPosition = (range, existingPositions) => {
      let position = { x: 0, y: 35, z: 100 };
      let overlap;
      do {
        position.x =
          Math.random() * (range.end - range.start - objectSize) + range.start;
        overlap = existingPositions.some(
          (pos) => Math.abs(pos - position.x) < objectSize,
        );
      } while (overlap);
      return position;
    };

    return objects.map((obj) => {
      const region = regions[obj.region];
      if (!region) {
        throw new Error(`Regione non valida: ${obj.region}`);
      }

      const newPosition = generateRandomPosition(
        region,
        regionPositions[obj.region],
      );

      // Aggiungi la posizione alla lista di quelle occupate in questa regione
      regionPositions[obj.region].push(newPosition);

      return {
        ...obj,
        position: newPosition,
      };
    });
  }, [objects]);

  return (
    <group>
      <Library />
      <Board page={pageId} onClickBack={(i) => updatePageId(null)} />
      <Text position={[15, 0, 130]} scale={10}>
        {hoverName}
      </Text>
      {distributedObjects.map((item) => (
        <Book
          bookType={item.bookType}
          position={[item.position.x, item.position.y, item.position.z]}
          onClick={() => updatePageId(item)}
          onPointerEnter={() => setName(item.name)}
          onPointerLeave={() => setName(null)}
        />
      ))}
    </group>
  );
};

export default Scene;
