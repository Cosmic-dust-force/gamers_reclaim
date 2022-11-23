import { useEffect, useState } from "react";

export default function Counter({ min, max, onCountChanged }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChanged(count);
  }, [count, onCountChanged]);

  return (
    <div>
      <button
        onClick={() => {
          if (count > min) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <h3>{count}</h3>
      <button
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
