const typeStyleMap = {
  framework: 'bg-blue-400 border border-blue-700 font-medium text-white',
  language: 'bg-green-400 border border-green-700 font-medium text-white',
  library: 'bg-yellow-400 border border-yellow-700 font-medium text-white',
  database: 'bg-red-400 border border-red-700 font-medium text-white',
  tool: 'bg-purple-400 border border-purple-700 font-medium text-white',
  other: 'bg-gray-100 border border-gray-700 font-medium text-black',
};

export const Bubble = ({ type, text }) => {
  return (
    <div className={`inline-block rounded-full py-auto px-2 text-white ${type ? typeStyleMap[type] : typeStyleMap['other']}`}>
      <p>{text}</p>
    </div>
  );
};
