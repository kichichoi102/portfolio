import { Section } from './Section';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { SectionCarousel } from './SectionCarousel';
import { Bubble } from './Bubble';
import { GithubButton } from './GithubButton';
import { TryButton } from './TryButton';

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

  const skillSection = [
    {
      content: (
        <>
          <h1 className='font-semibold font-serif text-2xl'>SlüchAI</h1>
          <img src={'images/sluchai.png'} alt='sluchai' className="py-2"/>
          <div className='space-x-2 space-y-1 py-3'>
            <Bubble type='framework' text='React.js' />
            <Bubble type='language' text='Javascript' />
            <Bubble type='library' text='ml5.js' />
            <Bubble type='tool' text='GCP' />
          </div>
          <p className='text-gray-500 space-y-2'>
            SlüchAI is a neural network trained to identify users&apos; slouching postures. After a prolonged period of slouching, it alerts the user about their sitting posture to avoid risk of back
            and neck pain.
          </p>
          <br />
          <p>2022 Winner of ToHacks best use of Google Cloud!</p>
          <div className="grid grid-cols-3 gap-1 py-3">
            <div class="col-span-1">
              <GithubButton url="https://github.com/kichichoi102/pose-classification"/>
            </div>
            <div class="col-span-2">
              <TryButton url="https://devpost.com/software/slouchanalytics"/>
            </div>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <h1 className='font-semibold font-serif text-2xl'>Project 2</h1>
          <Bubble text='Vue' />
        </>
      ),
    },
  ];

  return (
    <Scroll html>
      <div className='w-screen'>
        <Section opacity={introSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>👋 Hi My name is Daniel.</h1>
          <p className='text-gray-500'>Welcome to my three dimensional portfolio</p>
          <br />
          <p className='text-gray-500 animate-bounce mt-2p'>↓ Scroll down to see more.</p>
        </Section>
        <SectionCarousel sections={skillSection} right opacity={skillSectionOpacity} />
        {/* <Section right opacity={skillSectionOpacity}>
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
        </Section> */}
        <Section opacity={contactSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>Contact</h1>
        </Section>
      </div>
    </Scroll>
  );
};
