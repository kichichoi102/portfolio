import { useGLTF, useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 2.3;
export const FLOORS = 3;

export const Office = (props) => {
  const { nodes, materials } = useGLTF('/models/OfficeModel.glb');
  const ref = useRef();
  const timeline = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    // vertical movement
    timeline.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (FLOORS - 1),
      },
      0
    );

    // Office Rotation
    timeline.current.to(ref.current.rotation, { duration: 1, x: 0, y: Math.PI / 6, z: 0 }, 0);
    timeline.current.to(ref.current.rotation, { duration: 1, x: 0, y: -Math.PI / 6, z: 0 }, 1);
    // Office movement
    timeline.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    timeline.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // library movement
    timeline.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    // library rotation
    timeline.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // attic floor
    timeline.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );
    timeline.current.from(
      atticRef.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1.5
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref} position={[0.5, -1, -1]} rotation={[0, -Math.PI / 3, 0]}>
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
