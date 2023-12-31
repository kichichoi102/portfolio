import { Bubble } from './Bubble';
import { GithubButton } from './GithubButton';
import { TryButton } from './TryButton';
import { useState } from 'react';

const MAX_NUMBER_OF_BUBBLES = 4;

export const SectionCarouselItem = ({ title, header, imageSrc, bubbles, description, summaries, award, githubUrl, tryUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleBubbles = isExpanded ? bubbles : bubbles.slice(0, MAX_NUMBER_OF_BUBBLES).concat({ type: 'other', text: `+${bubbles.length - MAX_NUMBER_OF_BUBBLES}`, toggleExpand: { toggleExpand } });

  return (
    <>
      <h1 className='font-semibold font-serif text-2xl dark:text-white'>{title}</h1>
      {header && <h2 className='font-medium font-serif text-l dark:text-slate-400'>{header}</h2>}
      <div className='flex justify-center items-center'>
        <img src={imageSrc} alt={title} className='flex justify-center items-center py-2 object-contain h-60 w-96' />
      </div>
      <div className='space-x-1 space-y-1 py-3'>
        {visibleBubbles.map((bubble, index) => (
          <Bubble key={index} type={bubble.type} text={bubble.text} toggleExpand={bubble?.toggleExpand} />
        ))}
      </div>
      {bubbles.length > MAX_NUMBER_OF_BUBBLES && (
        <button onClick={toggleExpand} className='text-blue-500 cursor-pointer pb-4 underline underline-offset-2'>
          {isExpanded ? 'Hide' : 'Show More'}
        </button>
      )}
      {description && <p className='text-gray-500 space-y-2'>{description}</p>}
      {summaries && summaries.length > 0 && (
        <div className='px-6 text-black-500 space-y-2 dark:text-slate-400'>
          <ul className='list-disc'>
            {summaries.map((summary, index) => (
              <li key={index}>{summary}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      {award && <p className='font-semibold dark:text-white'>{award}</p>}
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
