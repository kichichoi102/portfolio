import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
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
        <Section opacity={introSectionOpacity} scrollText='↓ Scroll down to see what I&apos;m up to...'>
          <div className='flex spacing-x'>
            <h1 className='font-semibold font-serif text-2xl animate-waving-hand'>👋 </h1>
            <h1 className='font-semibold font-serif text-2xl'> Hi My name is Daniel.</h1>
          </div>

          <p className='text-gray-500'>Welcome to my three dimensional portfolio</p>
        </Section>
        <SectionCarousel sections={sectionData} opacity={skillSectionOpacity} />
        <Section opacity={contactSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>Contact</h1>
        </Section>
      </div>
    </Scroll>
  );
};
