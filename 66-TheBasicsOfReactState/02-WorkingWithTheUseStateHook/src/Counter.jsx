import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={changeCount}>Increment</button>
    </div>
  );
}
