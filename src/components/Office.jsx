import { useGLTF, useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { ExperienceContext } from './Experience';
import { LibraryAnimation } from './Animation/LibraryAnimation';
import { AtticAnimation } from './Animation/AtticAnimation';
import { BuildingAnimation } from './Animation/BuildingAnimation';

export const Office = (props) => {
  const { nodes, materials } = useGLTF('/models/OfficeModel.glb');
  const { timeline, libraryRef, atticRef } = useContext(ExperienceContext);
  const buildingRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useLayoutEffect(() => {
    BuildingAnimation(timeline, buildingRef);
    LibraryAnimation(timeline, libraryRef);
    AtticAnimation(timeline, atticRef);
  }, []);

  return (
    <group {...props} dispose={null} ref={buildingRef} position={[0.5, -1, -1]} rotation={[0, -Math.PI / 3, 0]}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <group position={[0, 2.114, -2.23]}>
        <group ref={libraryRef}>
          <mesh geometry={nodes['02_library'].geometry} material={materials['02']} />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]}>
        <group ref={atticRef}>
          <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/OfficeModel.glb');
