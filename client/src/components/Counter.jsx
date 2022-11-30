import { useEffect, useState } from "react";

export default function Counter({
  min,
  max,
  startingQuantity,
  onCountChanged,
}) {
  const [count, setCount] = useState(startingQuantity);

  useEffect(() => {
    onCountChanged(count);
  }, [count]);

  return (
    <div className="flex p-3 m-3">
      <button
        className="p-2 bg-indigo-500 rounded"
        onClick={() => {
          if (count > min) {
            setCount(count - 1);
            onCountChanged(count);
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
            onCountChanged(count);
          }
        }}
      >
        +
      </button>
    </div>
  );
}
