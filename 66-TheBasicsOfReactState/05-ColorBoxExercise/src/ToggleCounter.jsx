import { useState } from "react";
import "./ToggleCounter.css";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);

  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
    setCount(count + 1);
  };

  return (
    <div className="ToggleCounter">
      <p onClick={toggleIsHappy}>{isHappy ? "😃" : "😭"}</p>
      <p>{count}</p>
    </div>
  );
}
