export const TryButton = (props) => {
  return (
    <button
      className='w-full text-center px-6 py-2 border rounded bg-green-400 text-white font-semibold border-black-100 hover:border-slate-500'
      onClick={() => {
        window.open(props.url, '_blank');
      }}
    >
      <p>Live View</p>
    </button>
  );
};
