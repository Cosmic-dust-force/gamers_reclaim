export default function LinkButton({ value, clickHandler }) {
  return (
    <>
      <button
        type="submit"
        className="rounded-lg border-2 border-gray-900 bg-gray-700 h-12 text-gray-200 uppercase font-bold tracking-wide "
        onClick={clickHandler}
      >
        {value}
      </button>
    </>
  );
}
