import { extend } from '@react-three/fiber';
import { OrbitControls, TransformControls } from 'three-stdlib';
extend({ OrbitControls, TransformControls });

export const Footer = () => {
  return (
    <div className='flex items-center justify-center h-16 bg-white-300 text-black border border-slate-200'>
      <p className='text-center'>Made with ❤️ by Daniel Choi 2023 ©</p>
    </div>
  );
};
