import { Bubble } from './Bubble';
import { GithubButton } from './GithubButton';
import { TryButton } from './TryButton';

export const SectionCarouselItem = ({ title, header, imageSrc, bubbles, description, summaries, award, githubUrl, tryUrl }) => {
  return (
    <>
      <h1 className='font-semibold font-serif text-2xl'>{title}</h1>
      {header && <h2 className='font-medium font-serif text-l'>{header}</h2>}
      <img src={imageSrc} alt={title} className='py-2 object-contain h-60 w-96' />
      <div className='space-x-1 space-y-1 py-3'>
        {bubbles.map((bubble, index) => (
          <Bubble key={index} type={bubble.type} text={bubble.text} />
        ))}
      </div>
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
