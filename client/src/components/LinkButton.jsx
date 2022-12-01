export default function LinkButton({ value, clickHandler }) {
  return (
    <>
      <button
        type="submit"
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
        onClick={clickHandler}
      >
        {value}
      </button>
    </>
  );
}
