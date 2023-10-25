import { createContext, useRef } from 'react';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office';
import gsap from 'gsap';
import { Overlay } from './Overlay/Overlay';

export const ExperienceContext = createContext();

export const Experience = () => {
  // [TODO] - make light dynamic based on time of day -> night=1, day=5.5

  const timeline = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  timeline.current = gsap.timeline();

  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.25}>
        <ExperienceContext.Provider value={{ timeline, libraryRef, atticRef }}>
          <Overlay />
          <Office />
        </ExperienceContext.Provider>
      </ScrollControls>
    </>
  );
};
