export const ChapterEnum = {
  PROJECTS: 'Projects',
  EXPERIENCE: 'Experience',
};

export const Chapter = (props) => {
  return (
    <div className='flex spacing-x'>
      <button
        className='w-1/2 bg-white rounded-t-lg py-2 border border-black ml-1'
        onClick={() => {
          props.handleChapterClick(ChapterEnum.PROJECTS);
        }}
      >
        <p className='text-center'>Projects</p>
      </button>
      <button
        className='w-1/2 bg-white rounded-t-lg py-2 border border-black mr-1'
        onClick={() => {
          props.handleChapterClick(ChapterEnum.EXPERIENCE);
        }}
      >
        <p className='text-center'>Experience</p>
      </button>
    </div>
  );
};
