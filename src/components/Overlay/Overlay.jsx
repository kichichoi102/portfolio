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

  const skillSection = {
    Projects: [
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>SlüchAI</h1>
            <img src={'images/sluchai.png'} alt='sluchai' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='React.js' />
              <Bubble type='language' text='Javascript' />
              <Bubble type='library' text='tensorflow.js' />
              <Bubble type='library' text='ml5.js' />
              <Bubble type='tool' text='GCP' />
              <Bubble type='database' text='MongoDB' />
            </div>
            <p className='text-gray-500 space-y-2'>
              SlüchAI is a neural network trained to identify users&apos; slouching postures. After a prolonged period of slouching, it alerts the user about their sitting posture to avoid risk of
              back and neck pain.
            </p>
            <br />
            <p className='font-semibold'>2022 Winner of ToHacks best use of Google Cloud!</p>
            <div className='grid grid-cols-3 gap-1 py-3'>
              <div className='col-span-1'>
                <GithubButton url='https://github.com/kichichoi102/pose-classification' />
              </div>
              <div className='col-span-2'>
                <TryButton url='https://devpost.com/software/slouchanalytics' />
              </div>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Developer Portfolio 2023</h1>
            <img src={'images/portfolio.png'} alt='3dportfolio' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='Vite/React.js' />
              <Bubble type='framework' text='Tailwind CSS' />
              <Bubble type='language' text='Javascript' />
              <Bubble type='library' text='three.js' />
              <Bubble type='library' text='react-three/fiber' />
              <Bubble type='library' text='react-three/drei' />
              <Bubble type='tool' text='GSAP' />
            </div>
            <p className='text-gray-500 space-y-2'>
              My Three Dimensional portfolio to showcase my projects and experiences! I wanted to create a unique portfolio that would stand out from the rest. I also wanted to learn Three.js and how
              I could implement it in React!
            </p>
            <br />
            <p className='font-semibold'>You&apos;re Currently here!</p>
            <div className='grid grid-cols-3 gap-1 py-3'>
              <div className='col-span-1'>
                <GithubButton url='https://github.com/kichichoi102/portfolio' />
              </div>
              <div className='col-span-2'>
                <TryButton url='/' />
              </div>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Flight Deals Tracker</h1>
            <img src={'images/tequila_logo.png'} alt='tequila_logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='React.js' />
              <Bubble type='framework' text='django' />
              <Bubble type='language' text='Javascript' />
              <Bubble type='language' text='Python3' />
              <Bubble type='library' text='Twilio API' />
              <Bubble type='library' text='Tequila API' />
              <Bubble type='database' text='PostgreSQL' />
            </div>
            <p className='text-gray-500 space-y-2'>
              Leverages Tequila Search API to search for cheap flights to chosen destinations! When the user chooses their preferred destination cities and their starting city, this app handles the
              rest and sends you sms/email notifications if a cheap flight is available!
            </p>
            <br />
            <div className='grid grid-cols-3 gap-1 py-3'>
              <div className='col-span-1'>
                <GithubButton url='https://github.com/kichichoi102/flight-deals-tracker' />
              </div>
              <div className='col-span-2'>
                <TryButton url='https://github.com/kichichoi102/flight-deals-tracker' />
              </div>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>More things on the way...</h1>
            <img
              src={'https://media3.giphy.com/media/eW9qyRjOwDROHF5YuQ/giphy.gif?cid=ecf05e47zsw30nckfyk19a604nmc34hwlzq12ti8v9ond0lq&ep=v1_gifs_search&rid=giphy.gif&ct=g'}
              alt='penguin knitting'
              className='py-2 object-contain h-60 w-96'
            />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='Framework' />
              <Bubble type='language' text='Language' />
              <Bubble type='library' text='Library' />
              <Bubble type='database' text='Database' />
              <Bubble type='tool' text='Tool/Cloud' />
              <Bubble type='other' text='Other' />
            </div>
            <p className='text-gray-500 space-y-2'>
              Thats the end of the side projects I want to showcase for now. I&apos;m currently working on a few more projects that I&apos;m excited to share with you! Stay tuned!
            </p>
            <br />
            <p className='font-semibold'>Good things come to those who wait!</p>
            <div className='grid grid-cols-3 gap-1 py-3'>
              <div className='col-span-1'>
                <GithubButton url='https://github.com/kichichoi102/' />
              </div>
              <div className='col-span-2'>
                <TryButton url='https://github.com/kichichoi102/' />
              </div>
            </div>
          </>
        ),
      },
    ],
    Experiences: [
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Full Stack Engineer - Nitrex Metal Inc.</h1>
            <h2 className='font-medium font-serif text-l'>March 2023 - November 2023 (9 Months)</h2>
            <img src={'images/nitrex.jpg'} alt='nitrex logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='FastAPI' />
              <Bubble type='framework' text='Vite/Vue.js' />
              <Bubble type='language' text='Python3' />
              <Bubble type='language' text='TypeScript' />
              <Bubble type='library' text='sqlalchemy' />
              <Bubble type='library' text='pydantic' />
              <Bubble type='library' text='mypy' />
              <Bubble type='database' text='PostgreSQL' />
              <Bubble type='tool' text='AWS' />
              <Bubble type='tool' text='Keycloak' />
              <Bubble type='tool' text='Pytest' />
              <Bubble type='tool' text='vitest' />
              <Bubble type='tool' text='Kubernetes/Docker' />
              <Bubble type='other' text='REST API' />
              <Bubble type='other' text='MQTT' />
              <Bubble type='other' text='WebSocket' />
              <Bubble type='other' text='Microservices' />
              <Bubble type='other' text='SSO' />
            </div>
            <div className='px-6 text-black-500 space-y-2'>
              <ul className='list-disc'>
                <li>
                  Designed and implemented Single Sign-On layer for a portfolio of five web applications portals, improving user registration and sign-in experience and overall authentication/security
                </li>
                <li>
                  Optimized API performance by introducing LRU Cache, writing asynchronous processes for database calls, and refactoring SQL queries with CTEs and removing redundant joints, reducing
                  the core API response times by 34%.
                </li>
                <li>
                  Developed an internal library in Python that synchronized multiple user directories into a centralized directory on Keycloak and an interface that performs automatic user
                  provisioning and de-provisioning.
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Lead Engineer - Combat Training Center</h1>
            <h2 className='font-medium font-serif text-l'>Janurary 2022 - March 2023 (14 Months)</h2>
            <img src={'images/ctc.jpg'} alt='ctc logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='Quasar/Vue.js' />
              <Bubble type='framework' text='.NET WebAPI' />
              <Bubble type='language' text='TypeScript' />
              <Bubble type='language' text='C#' />
              <Bubble type='library' text='Tailwind CSS' />
              <Bubble type='database' text='MSSQL' />
              <Bubble type='tool' text='Azure' />
              <Bubble type='tool' text='Auth0' />
              <Bubble type='tool' text='NUnit' />
              <Bubble type='tool' text='vitest' />
              <Bubble type='tool' text='Kubernetes/Docker' />
              <Bubble type='other' text='REST API' />
              <Bubble type='other' text='Microservices' />
              <Bubble type='other' text='OAuth2.0' />
            </div>
            <div className='px-6 text-black-500 space-y-2'>
              <ul className='list-disc'>
                <li>Developed a web-based CRM and LMS platform to modernize the delivery of Canadian Armed Forces training online.</li>
                <li>
                  Led the process of design and implementation of end-to-end architecture, including the API, the data access layer, data modelling, CI/CD processes in containerization and deployment,
                  user access control, and testing strategies.
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Backend Engineer - Canadian Joint Operations Command</h1>
            <h2 className='font-medium font-serif text-l'>May 2021 - Janurary 2022 (6 Months)</h2>
            <img src={'images/CJOC.png'} alt='cjoc logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='React.js' />
              <Bubble type='framework' text='FastAPI' />
              <Bubble type='language' text='Python3' />
              <Bubble type='library' text='Pandas' />
              <Bubble type='library' text='Matplotlib' />
              <Bubble type='library' text='Pytorch' />
              <Bubble type='database' text='MSSQL' />
              <Bubble type='tool' text='Azure' />
              <Bubble type='tool' text='Pytest' />
              <Bubble type='tool' text='Kubernetes/Docker' />
              <Bubble type='other' text='REST API' />
              <Bubble type='other' text='Microservices' />
              <Bubble type='other' text='ETL' />
            </div>
            <div className='px-6 text-black-500 space-y-2'>
              <ul className='list-disc'>
                <li>
                  Developed a data fusion module capable of synthesizing datasets from multiple datasources using Pandas to support data-driven decision making for the Canadian Armed Forces Head
                  Quarters.
                </li>
                <li>Implemented a process for in-memory caching of data frame batches in the business layer, which decreased the file upload/process times from ~1h to 5 minutes.</li>
                <li>Developed a standalone task-runner service that automated data ETL processes instead of a user having to perform it manually.</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Software Engineer - Canadian Forces Network Operations Command</h1>
            <h2 className='font-medium font-serif text-l'>Janurary 2021 - May 2021 (5 Months)</h2>
            <img src={'images/cfnoc.jpg'} alt='cfnoc logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='React.js' />
              <Bubble type='framework' text='FastAPI' />
              <Bubble type='language' text='Javascript' />
              <Bubble type='language' text='Python3' />
              <Bubble type='library' text='D3.js' />
              <Bubble type='library' text='Chart.js' />
              <Bubble type='database' text='MSSQL' />
              <Bubble type='tool' text='AWS' />
              <Bubble type='tool' text='CloudFormation' />
            </div>
            <div className='px-6 text-black-500 space-y-2'>
              <ul className='list-disc'>
                <li>Developed a Web-based dashboard to enable the Red Team to track and plan their past, ongoing, and future operations.</li>
                <li>
                  Designed and implemented a Mail-Bomb Architecture using AWS CloudFormation, which virtually created components to launch AWS ec2 instances safely and effectively without leaving any
                  traces.
                </li>
                <li>Developed a linear-regression model that optimized the upload batch sizes for any host machines based on its caching performance.</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        content: (
          <>
            <h1 className='font-semibold font-serif text-2xl'>Software Engineer Intern - CityNCom</h1>
            <h2 className='font-medium font-serif text-l'>May 2018 - September 2018 (5 Months)</h2>
            <img src={'images/cityncom.png'} alt='cfnoc logo' className='py-2 object-contain h-60 w-96' />
            <div className='space-x-1 space-y-1 py-3'>
              <Bubble type='framework' text='.NET' />
              <Bubble type='language' text='C#' />
              <Bubble type='language' text='C++' />
              <Bubble type='language' text='Javascript' />
              <Bubble type='library' text='Chart.js' />
              <Bubble type='database' text='PostgreSQL' />
              <Bubble type='database' text='MariaDB' />
              <Bubble type='tool' text='OpenStack' />
              <Bubble type='tool' text='Jenkins/Puppet' />
              <Bubble type='tool' text='CentOS' />
              <Bubble type='other' text='Firmware Development' />
            </div>
            <div className='px-6 text-black-500 space-y-2'>
              <ul className='list-disc'>
                <li>
                  Assisted in creating tools to monitor applications and services in cloud instances including system health indicators, trend identification, and anomaly detection on the OpenStack
                  Platform.
                </li>
                <li>Pursued hands-on experience in implementing a DevOps pipeline using Jenkins and Puppet.</li>
                <li>Removed redundant sub-processes and implemented automation design, resulting in a 30% decrease in operational costs.</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  };

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
        <SectionCarousel sections={skillSection} opacity={skillSectionOpacity} />
        <Section opacity={contactSectionOpacity}>
          <h1 className='font-semibold font-serif text-2xl'>Contact</h1>
        </Section>
      </div>
    </Scroll>
  );
};
