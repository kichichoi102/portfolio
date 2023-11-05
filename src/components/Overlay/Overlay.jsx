import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { SectionCarousel } from './SectionCarousel';
import { sectionData } from '../../services/constants';

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
            <h1 className='font-semibold font-serif text-2xl animate-waving-hand'>👋 </h1>
            <h1 className='font-semibold font-serif text-2xl dark:text-slate-400'> Hi My name is Daniel.</h1>
          </div>
          <TypeAnimation
            sequence={["I'm a <Backend Engineer />", 2000, "I'm a <Frontend Engineer />", 2000, "I'm a <Full Stack Engineer />", 2000]}
            wrapper='h2'
            speed={10}
            className='font-medium font-serif text-xl mt-2 mb-6 dark:text-slate-400'
          />

          <p className='text-gray-500 '>Welcome to my three dimensional portfolio</p>
        </Section>
        <SectionCarousel sections={sectionData} opacity={skillSectionOpacity} />
        <Section opacity={contactSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl dark:text-white'>Contact</h1>
        </Section>
      </div>
    </Scroll>
  );
};
