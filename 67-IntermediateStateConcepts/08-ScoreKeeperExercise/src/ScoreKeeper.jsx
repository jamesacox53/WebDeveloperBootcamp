import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({ numPlayers = 5, target = 10 }) {
    const getInitScoresArr = () => _getInitScoresArr(numPlayers);
    const [scoresArr, setScoresArr] = useState(getInitScoresArr);

    const argsObj = { target, scoresArr, setScoresArr };
    const playerLiArr = getPlayerLiArr(argsObj);

    const resetScores = () => _resetScores(setScoresArr);

    return (
        <div>
            <ul>
                {playerLiArr}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    );
}

function _getInitScoresArr(numPlayers) {
    const scoresArr = [];

    for (i = 1; i <= numPlayers; i++) {
        const scoreObj = getInitScoreObj(i);
        scoresArr.push(scoreObj);
    }
    
    return scoresArr;
}

function getInitScoreObj(i) {
    return {
        id: uuid(),
        playerInt: i,
        scoreInt: 0,
        isWinner: false
    };
}

function getPlayerLiArr({ target, scoresArr, setScoresArr }) {
    const playerLiArr = scoresArr.map((scoreObj) => {
        const str = `Player${scoreObj['playerInt']}: ${scoreObj['scoreInt']}`;
        
        const incScore = () => {
            _incScore(scoreObj['playerInt'], target, scoresArr, setScoresArr);
        }

        return (
            <li key={scoreObj['id']}>
                <span>{str}</span>
                <button onClick={incScore}>+1</button>
                {scoreObj['isWinner'] && <span>Winner!</span>}
            </li>
        );
    });

    return playerLiArr;
}

function _incScore(playerInt, target, scoresArr, setScoresArr) {
    const hasWinner = scoresArr.some(scoreObj => scoreObj['isWinner']);
    if (hasWinner) return;
    
    const newScoresObjFunc = (scoresObj) => {
        const newScoresObj = {...scoresObj};
        
        if (newScoresObj['playerInt'] != playerInt)
            return newScoresObj;
        
        if (newScoresObj['isWinner'])
            return newScoresObj;

        newScoresObj['scoreInt'] += 1;

        if (newScoresObj['scoreInt'] >= target)
            newScoresObj['isWinner'] = true;

        return newScoresObj;
    };
    
    const newScoresArrFunc = (scoresArr) => {
        const newScoresArr = scoresArr.map(newScoresObjFunc);
        return newScoresArr;
    };

    setScoresArr(newScoresArrFunc);
}

function _resetScores(setScoresArr) {
    const newScoresObjFunc = (scoresObj) => {
        const newScoresObj = {...scoresObj};
        
        newScoresObj['scoreInt'] = 0;
        newScoresObj['isWinner'] = false;

        return newScoresObj;
    };
    
    const newScoresArrFunc = (scoresArr) => {
        const newScoresArr = scoresArr.map(newScoresObjFunc);
        return newScoresArr;
    };

    setScoresArr(newScoresArrFunc);
}