import { useFrame } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { MathUtils, Vector3 } from "three";
import { Container, Root, Text } from "@react-three/uikit";
import { Button } from "../default/button";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

const Board = ({ page, onClickBack }) => {
  const [intialPosition] = useState(new Vector3(0, 50, 160));
  const boardPosition = useMemo(() => new Vector3(0, 150, 0), []);
  const [, setLocation] = useLocation();
  const { t } = useTranslation("pages");

  useFrame((state, dt) => {
    state.camera.position.lerp(
      page == null ? intialPosition : boardPosition,
      MathUtils.damp(0, 1, 3, dt),
    );
  });
  return (
    <>
      <mesh position={[-700, 300, -500]} rotation={[0, Math.PI / 4, 0]}>
        <Root pixelSize={2} sizeX={200} sizeY={800} flexDirection="row">
          <Container
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
          >
            <Button onClick={() => onClickBack(null)} variant="outline">
              <Text color="white">Back</Text>
            </Button>
          </Container>
        </Root>
      </mesh>
      <mesh position={[0, 300, -500]}>
        <Root pixelSize={6} sizeX={1200} sizeY={800} flexDirection="row">
          <Container
            borderWidth={15}
            borderColor="#333"
            flexDirection="column"
            alignItems="center"
            flexGrow={4}
          >
            <Container flexDirection="column" gap={4}>
              <Text fontSize={10} color="white">
                {page?.description != null && t(page?.description)}
              </Text>
            </Container>
          </Container>
        </Root>
      </mesh>
      <mesh position={[700, 300, -500]} rotation={[0, (11 * Math.PI) / 6, 0]}>
        <Root pixelSize={2} sizeX={200} sizeY={800} flexDirection="row">
          <Container
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
          >
            <Container
              flexDirection="row"
              alignItems="center"
              justifyItems="center"
              justifyContent="space-between"
              flexGrow={1}
            >
              <Button
                onClick={() => setLocation(`/page/${page.relativeUrl}/`)}
                variant="outline"
              >
                <Text color="white">Go To</Text>
              </Button>
            </Container>
          </Container>
        </Root>
      </mesh>
    </>
  );
};

export default Board;
