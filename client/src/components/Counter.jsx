import { useEffect, useState } from "react";

export default function Counter({
  min,
  max,
  startingQuantity,
  onCountChangedHandler,
}) {
  const [count, setCount] = useState(startingQuantity);

  useEffect(() => {
    onCountChangedHandler(count);
  }, [count, onCountChangedHandler]);

  return (
    <div className="flex p-1 m-3 mb-4">
      <button
        className="p-2 bg-indigo-500 rounded"
        onClick={() => {
          if (count > min) {
            setCount(count - 1);
            onCountChangedHandler(count);
          }
        }}
      >
        -
      </button>
      <span className="p-2 bg-white">{count}</span>
      <button
        className="p-2 bg-indigo-400 rounded"
        onClick={() => {
          if (count < max) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
}
