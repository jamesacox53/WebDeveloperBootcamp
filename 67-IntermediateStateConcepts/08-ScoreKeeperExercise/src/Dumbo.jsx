import { useState } from "react";

export default function Dumbo() {
  const [board, setBoard] = useState(genInitGameBoard);

  return (
    <button onClick={() => setBoard("hello")}>Click me to change state</button>
  );
}

function genInitGameBoard() {
  console.log("Making game board");
  return Array(5000);
}
