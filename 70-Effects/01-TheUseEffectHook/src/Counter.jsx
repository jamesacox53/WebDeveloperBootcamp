import { useState, useEffect } from "react";

export default function Counter() {
  const [countInt, setCountInt] = useState(0);
  const increment = () => setCountInt((c) => c + 1);

  useEffect(myEffect);

  return (
    <div>
      <h1>{countInt}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
}

function myEffect() {
  console.log("My effect was called!");
}
