import { useEffect, useState } from "react";

export default function Counter({ min, max, onCountChanged }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChanged(count);
  }, [count, onCountChanged]);

  return (
    <div className="flex p-3 m-3">
      <button
        className="p-2 bg-indigo-500 rounded"
        onClick={() => {
          if (count > min) {
            setCount(count - 1);
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
