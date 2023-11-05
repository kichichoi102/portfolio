import { Html } from '@react-three/drei';
import { ProgressBarText } from '../services/constants';

const loadingScreenCatImages = ['images/cat_1.png', 'images/cat_2.png', 'images/cat_3.png'];
const catImage = loadingScreenCatImages[Math.floor(Math.random() * loadingScreenCatImages.length)];

const roundToNearestStep = (value) => {
  return Math.round(value / 20) * 20;
};

export const LoadingScreen = ({ progress }) => {
  return (
    <Html fullscreen>
      <div className='w-screen h-screen bg-white flex justify justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-1/2'>
            <img src={catImage} alt={'coding_cat'} className='flex items-center rounded-md border border-slate-500' />
          </div>
          <h1 className='w-1/2 my-4 text-xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'>
            Please be patient while my cat fetches my portfolio for you!
          </h1>
          <div class='w-1/2 h-auto mt-2 bg-gray-200 rounded-full dark:bg-gray-700'>
            <div
              className='h-2.5 leading-none rounded-full bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'
              style={{ width: Math.round(progress) + '%' }}
            ></div>
          </div>
          <p className='text-m font-medium text-white-100 text-center p-0.5'>{ProgressBarText[roundToNearestStep(Math.round(progress))]}</p>
        </div>
      </div>
    </Html>
  );
};
