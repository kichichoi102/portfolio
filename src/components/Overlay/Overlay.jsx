import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { SectionCarousel } from './SectionCarousel';
import { ContactForm } from '../ContactForm';
import { sectionData, favoriteThings } from '../../services/constants';

export const Overlay = () => {
  const [introSectionOpacity, setIntroSectionOpacity] = useState(1);
  const [skillSectionOpacity, setSkillSectionOpacity] = useState(1);
  const [contactSectionOpacity, setContactSectionOpacity] = useState(1);
  const [isNameLoaded, setIsNameLoaded] = useState(false);
  const [isFirstSectionLoaded, setIsFirstSectionLoaded] = useState(false);
  const firstDelay = 2200;
  const secondDelay = 3000;

  const scroll = useScroll();

  setTimeout(() => {
    setIsNameLoaded(true);
  }, firstDelay);

  setTimeout(() => {
    setIsFirstSectionLoaded(true);
  }, secondDelay)

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
            <h1 className='font-medium font-serif text-2xl animate-waving-hand'>👋&nbsp;</h1>
            <TypeAnimation sequence={['Hi there, my name is']} wrapper='h1' speed={3} cursor={false} className='font-medium font-serif text-2xl dark:text-slate-400' />
            <h1>&nbsp;</h1>
            {isNameLoaded && <TypeAnimation sequence={['Daniel.']} wrapper='h1' speed={5} className='font-medium font-serif text-2xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient' />}
          </div>
          <div className='flex flex-row'>
            <h2 className='font-medium font-serif text-xl my-2 text-black dark:text-slate-400 align-bottom'>I am a&nbsp;</h2>
            {isFirstSectionLoaded && <TypeAnimation
              sequence={[' <Backend Engineer />', 2000, ' <Frontend Engineer />', 2000, ' <Full Stack Engineer />', 2000]}
              wrapper='h2'
              speed={10}
              deletionSpeed={50}
              repeat={Infinity}
              className='font-medium font-serif text-2xl my-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'
            />}
          </div>
          <div className='flex flex-row mb-6'>
            <h2 className='font-medium font-serif text-l text-black dark:text-slate-400'>With over&nbsp;</h2>
            {isFirstSectionLoaded && <TypeAnimation
              sequence={['3.5 years']}
              wrapper='h2'
              speed={1}
              className='font-medium font-serif text-l bg-clip-text animate-pulse text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient'
            />}
            <h2 className='font-medium font-serif text-l text-black dark:text-slate-400'>of experience</h2>
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
          <ContactForm />
        </Section>
      </div>
    </Scroll>
  );
};
