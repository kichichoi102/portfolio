import { Chapter } from './Chapter';

export const Section = (props) => {
  return (
    <section className={`h-screen flex flex-col justify-center p10 ${props.right ? 'items-end' : 'items-start'}`} style={{ opacity: props.opacity }}>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='max-w-md w-full'>
          {props.carousel && <Chapter handleChapterClick={props.handleChapterClick} selectedChapter={props.selectedChapter} />}
          {/* rounded-lg if not carousel, else rounded-b-lg */}
          <div className={`bg-white ${props.carousel ? 'rounded-b-lg border border-black border-t-transparent' : 'rounded-lg border border-slate-400'} px-8 py-12`}>
            {props.children}
            {props.scrollText && (
              <>
                <br />
                <p className='text-gray-500 animate-bounce mt-1'>{props.scrollText}</p>
              </>
            )}
          </div>
          <div className='flex items-center justify-center pt-2'>
            {props.handlePrev ? (
              <button className='px-4 py-2 border rounded mr-2 hover:border-slate-500' onClick={props.handlePrev}>
                ← Prev
              </button>
            ) : null}
            {props.handleNext ? (
              <button className='px-4 py-2 border rounded mr-2 hover:border-slate-500' onClick={props.handleNext}>
                Next →
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
