import { useState, useEffect } from "react";

export default function Counter() {
  const [countInt, setCountInt] = useState(0);
  const [nameStr, setNameStr] = useState("");

  const increment = () => setCountInt((c) => c + 1);
  const handleChange = (event) => _handleChange(event, setNameStr);

  useEffect(myEffect, [countInt]);
  useEffect(myEffect2, []);

  return (
    <div>
      <h1>{countInt}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {nameStr}</p>
      <input type="text" value={nameStr} onChange={handleChange} />
    </div>
  );
}

function myEffect() {
  console.log("My effect was called!");
}

function myEffect2() {
  console.log("My effect was only called during the initial render");
}

function _handleChange(event, setNameStr) {
  setNameStr(event.target.value);
}
