import { useState } from "react";

export default function Counter() {
  const [countInt, setCountInt] = useState(0);

  const addOne = () => {
    setCountInt((curr) => curr + 1);
  };

  const addThree = () => {
    setCountInt((curr) => curr + 1);
    setCountInt((curr) => curr + 1);
    setCountInt((curr) => curr + 1);
  };

  return (
    <div>
      <p>Count is: {countInt}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
