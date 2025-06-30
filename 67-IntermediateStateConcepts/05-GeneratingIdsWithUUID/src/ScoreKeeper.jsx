import { useState } from "react";

export default function ScoreKeeper() {
  const [scoresObj, setScoresObj] = useState(getInitScoresObj);
  const incP1Score = () => setScoresObj(_incP1Score);
  const incP2Score = () => setScoresObj(_incP2Score);

  return (
    <div>
      <p>Player 1: {scoresObj["p1ScoreInt"]}</p>
      <p>Player 2: {scoresObj["p2ScoreInt"]}</p>
      <button onClick={incP1Score}>+1 Player 1</button>
      <button onClick={incP2Score}>+1 Player 2</button>
    </div>
  );
}

function getInitScoresObj() {
  return {
    p1ScoreInt: 0,
    p2ScoreInt: 0,
  };
}

function _incP1Score(scoresObj) {
  const newScoresObj = { ...scoresObj };
  newScoresObj["p1ScoreInt"] += 1;

  return newScoresObj;
}

function _incP2Score(scoresObj) {
  const newScoresObj = { ...scoresObj };
  newScoresObj["p2ScoreInt"] += 1;

  return newScoresObj;
}
