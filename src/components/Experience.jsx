import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office';
import { Overlay } from './Overlay/Overlay';

export const Experience = () => {
  // [TODO] - make light dynamic based on time of day -> night=1, day=5.5
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false}/>
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
