import { extend } from '@react-three/fiber';
import { OrbitControls, TransformControls } from 'three-stdlib';
extend({ OrbitControls, TransformControls });

export const Footer = () => {
  return (
    <div className='flex items-center justify-center h-16 bg-white-300 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-center'>
      <p className='text-l font-semibold'>Made with</p>
      <p className='text-l font-semibold animate-bounce '>&nbsp;❤️&nbsp;</p>
      <p className='text-l font-semibold'>by&nbsp;</p>
      <p className='text-l font-black bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient'>
        Daniel Choi
      </p>
      <p className='text-l font-semibold'>&nbsp;©</p>
    </div>
  );
};
