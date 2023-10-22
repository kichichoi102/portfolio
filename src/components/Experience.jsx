import { OrbitControls } from '@react-three/drei';
import { Office } from './Office';

export const Experience = () => {
  // [TODO] - make light dynamic based on time of day -> night=1, day=5.5
  return (
    <>
      <ambientLight intensity={5.5} />
      <OrbitControls />
      <Office />
    </>
  );
};
