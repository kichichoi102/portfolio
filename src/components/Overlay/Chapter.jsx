export const ChapterEnum = {
  PROJECTS: 'Projects',
  EXPERIENCE: 'Experiences',
};

export const Chapter = (props) => {
  return (
    <div className='flex spacing-x'>
      <button
        className={`w-1/2 rounded-t-lg py-2 border ${props.selectedChapter === ChapterEnum.EXPERIENCE ? 'bg-white border-black border-b-transparent' : 'bg-gray-300 border-slate-400 hover:border-slate-500 hover:animate-pulse'}`}
        onClick={() => {
          props.handleChapterClick(ChapterEnum.EXPERIENCE);
        }}
      >
        <p className='text-center font-semibold'>{ChapterEnum.EXPERIENCE}</p>
      </button>
      <button
        className={`w-1/2 rounded-t-lg py-2 border ${props.selectedChapter === ChapterEnum.PROJECTS ? 'bg-white border-black border-b-transparent' : 'bg-gray-300 border-slate-400 hover:border-slate-500 hover:animate-pulse'}`}
        onClick={() => {
          props.handleChapterClick(ChapterEnum.PROJECTS);
        }}
      >
        <p className='text-center font-semibold'>{ChapterEnum.PROJECTS}</p>
      </button>
    </div>
  );
};
