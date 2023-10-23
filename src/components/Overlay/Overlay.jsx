import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';

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

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Scroll html>
      <div className='w-screen'>
        <Section opacity={introSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>👋 Hi My name is Daniel.</h1>
          <p className='text-gray-500'>Welcome to my three dimensional portfolio</p>
          <button onClick={scrollToTarget} className='animate-bounce mt-6'>
            ↓
          </button>
        </Section>
        <Section right opacity={skillSectionOpacity} ref={targetRef}>
          <h1 className='font-semibold font-serif text-2xl'>Here are my skillsets:</h1>
          <p className='mt-3'>Frontend 🚀</p>
          <ul className='list-disc list-inside'>
            <li>React</li>
            <li>Next.js</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
          <p className='mt-3'>Backend 🗄️</p>
          <ul className='list-disc list-inside'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Flask</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
          <p className='animate-bounce mt-6'>↓</p>
        </Section>
        <Section opacity={contactSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>Contact</h1>
        </Section>
      </div>
    </Scroll>
  );
};
