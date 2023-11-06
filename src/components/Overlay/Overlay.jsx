import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { SectionCarousel } from './SectionCarousel';
import { sectionData, favoriteThings } from '../../services/constants';

export const Overlay = () => {
  const [introSectionOpacity, setIntroSectionOpacity] = useState(1);
  const [skillSectionOpacity, setSkillSectionOpacity] = useState(1);
  const [contactSectionOpacity, setContactSectionOpacity] = useState(1);

  const scroll = useScroll();

  useFrame(() => {
    setIntroSectionOpacity(1 - scroll.range(0, 1 / 3));
    setSkillSectionOpacity(scroll.curve(1 / 3, 1 / 3));
    setContactSectionOpacity(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className='w-screen'>
        <Section opacity={introSectionOpacity} scrollText="↓ Scroll down to see what I'm up to...">
          <div className='flex spacing-x'>
            <h1 className='font-semibold font-serif text-2xl animate-waving-hand'>👋&nbsp;</h1>
            <TypeAnimation sequence={['Hi, my name is Daniel.']} wrapper='h1' speed={10} className='font-semibold font-serif text-2xl dark:text-slate-400' />
          </div>
          <div className='flex flex-row'>
            <h2 className='font-medium font-serif text-xl mt-2 mb-6 text-black dark:text-slate-400'>I&apos;m a&nbsp;</h2>
            <TypeAnimation
              sequence={[' <Backend Engineer />', 2000, ' <Frontend Engineer />', 2000, ' <Full Stack Engineer />', 2000]}
              wrapper='h2'
              speed={10}
              className='font-medium font-serif text-xl mt-2 mb-6 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'
            />
          </div>

          <p className='text-gray-500 '>Welcome to my three dimensional portfolio</p>
          <p className='mt-3 text-gray-500 font-semibold dark:text-white'>My favorite things are:</p>
          <ul className='leading-9  text-slate-500 dark:text-slate-300'>
            {favoriteThings.map((thing, index) => (
              <li key={index}>{thing}</li>
            ))}
          </ul>
        </Section>
        <SectionCarousel sections={sectionData} opacity={skillSectionOpacity} />
        <Section opacity={contactSectionOpacity}>
          <div className='flex spacing-x'>
            <h1 className='font-semibold font-serif text-2xl dark:text-white'>Say hello!</h1>
            <h1 className='font-semibold font-serif text-2xl animate-waving-hand'>👋&nbsp;</h1>
            
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
