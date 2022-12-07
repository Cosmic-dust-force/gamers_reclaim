const Loading = () => {
  return (
    <div className="absolute flex items-center justify-center 
    h-40 w-80 top-1/2 bottom-1/2 left-1/2 right-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-900 rounded-3xl border border-white">
      <p className="text-4xl text-white font-raj">Loading...</p>
    </div>
  );
};

export default Loading;
