export const GithubButton = (props) => {
  const htmlString = '<div>&lt;/&gt;</div>';
  return (
    <button
      className='w-full px-6 py-2 border rounded bg-gray-400 text-white font-semibold border-black-100'
      dangerouslySetInnerHTML={{ __html: htmlString }}
      onClick={() => {
        window.open(props.url, '_blank');
      }}
    ></button>
  );
};
