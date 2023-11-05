import { Chapter } from './Chapter';

export const Section = ({ right, opacity, carousel, handleChapterClick, handlePrev, handleNext, selectedChapter, children, scrollText, pageNumber, maxPageNumber }) => {
  return (
    <section className={`h-screen flex flex-col justify-center p10 ${right ? 'items-end' : 'items-start'}`} style={{ opacity: opacity }}>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='max-w-lg w-full'>
          {carousel && <Chapter handleChapterClick={handleChapterClick} selectedChapter={selectedChapter} />}
          {/* rounded-lg if not carousel, else rounded-b-lg */}
          <div className={`bg-white ${carousel ? 'rounded-b-lg border border-black border-t-transparent' : 'rounded-lg border border-slate-400'} px-8 pt-12 pb-6`}>
            {children}
            {scrollText && (
              <>
                <br />
                <p className='text-black-500 animate-pulse mt-1 pb-1'>{scrollText}</p>
              </>
            )}
            <hr />
            <div className='grid grid-cols-3 gap-1 pt-4'>
              <div className='col-span-1 flex justify-self-start'>
                {handlePrev && (
                  <button
                    className={`px-4 border rounded mr-1 border ${
                      pageNumber === 1 ? 'disabled:opacity-25 cursor-not-allowed border-black-100' : 'hover:animate-pulse border-slate-400'
                    } bg-white font-bold`}
                    onClick={handlePrev}
                  >
                    ←
                  </button>
                )}
                {handlePrev && (
                  <button
                    className={`px-4 border rounded mr-1 border ${
                      pageNumber === maxPageNumber ? 'disabled:opacity-25 cursor-not-allowed border-black-100' : 'hover:animate-pulse border-slate-400'
                    } bg-white font-bold`}
                    onClick={handleNext}
                  >
                    →
                  </button>
                )}
              </div>
              {pageNumber && (
                <div className='col-span-2 flex justify-self-end'>
                  <div className='px-4 py-2 border rounded border border-slate-500 mr-2 bg-white font-bold'>
                    {pageNumber}/{maxPageNumber}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
