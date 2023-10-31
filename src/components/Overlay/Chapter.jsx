export const ChapterEnum = {
  PROJECTS: 'Projects',
  EXPERIENCE: 'Experience',
};

export const Chapter = (props) => {
  return (
    <div className='flex spacing-x'>
      <button
        className={`w-1/2 rounded-t-lg py-2 border ml-1 ${props.selectedChapter === ChapterEnum.PROJECTS ? 'bg-white border-black border-b-transparent' : 'bg-gray-300 border-slate-400 hover:border-slate-500'}`}
        onClick={() => {
          props.handleChapterClick(ChapterEnum.PROJECTS);
        }}
      >
        <p className='text-center font-semibold'>Projects</p>
      </button>
      <button
        className={`w-1/2 rounded-t-lg py-2 border mr-1 ${props.selectedChapter === ChapterEnum.EXPERIENCE ? 'bg-white border-black border-b-transparent' : 'bg-gray-300 border-slate-400 hover:border-slate-500'}`}
        onClick={() => {
          props.handleChapterClick(ChapterEnum.EXPERIENCE);
        }}
      >
        <p className='text-center font-semibold'>Experience</p>
      </button>
    </div>
  );
};
