import { Chapter } from './Chapter';

export const Section = (props) => {
  return (
    <section className={`h-screen flex flex-col justify-center p10 ${props.right ? 'items-end' : 'items-start'}`} style={{ opacity: props.opacity }}>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          {props.carousel && <Chapter handleChapterClick={props.handleChapterClick} />}
          <div className='bg-white rounded-lg px-8 py-12 '>{props.children}</div>
          <div className='flex items-center justify-center pt-2'>
            {props.handlePrev ? (
              <button className='px-4 py-2 border rounded mr-2' onClick={props.handlePrev}>
                ←
              </button>
            ) : null}
            {props.handleNext ? (
              <button className='px-4 py-2 border rounded mr-2' onClick={props.handleNext}>
                →
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
