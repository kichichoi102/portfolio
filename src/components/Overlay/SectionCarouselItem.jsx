import { Bubble } from './Bubble';
import { GithubButton } from './GithubButton';
import { TryButton } from './TryButton';
import { useState } from 'react';

const MAX_NUMBER_OF_BUBBLES = 4;

export const SectionCarouselItem = ({ title, header, imageSrc, bubbles, description, summaries, award, githubUrl, tryUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleBubbles = isExpanded ? bubbles : bubbles.slice(0, MAX_NUMBER_OF_BUBBLES).concat({ type: 'other', text: `+${bubbles.length - MAX_NUMBER_OF_BUBBLES}` });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h1 className='font-semibold font-serif text-2xl'>{title}</h1>
      {header && <h2 className='font-medium font-serif text-l'>{header}</h2>}
      <img src={imageSrc} alt={title} className='py-2 object-contain h-60 w-96' />
      <div className='space-x-1 space-y-1 py-3'>
        {visibleBubbles.map((bubble, index) => (
          <Bubble key={index} type={bubble.type} text={bubble.text} />
        ))}
      </div>
      {bubbles.length > MAX_NUMBER_OF_BUBBLES && (
        <button onClick={toggleExpand} className='text-blue-500 cursor-pointer pb-4 underline underline-offset-2'>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
      {description && <p className='text-gray-500 space-y-2'>{description}</p>}
      {summaries && summaries.length > 0 && (
        <div className='px-6 text-black-500 space-y-2'>
          <ul className='list-disc'>
            {summaries.map((summary, index) => (
              <li key={index}>{summary}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      {award && <p className='font-semibold'>{award}</p>}
      {githubUrl && (
        <div className='grid grid-cols-3 gap-1 py-3'>
          <div className='col-span-1'>
            <GithubButton url={githubUrl} />
          </div>
          <div className='col-span-2'>
            <TryButton url={tryUrl} />
          </div>
        </div>
      )}
    </>
  );
};
