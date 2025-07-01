import { useState } from 'react';
import { getRolls, sum } from './utils';
import Dice from './Dice';

export default function LuckyN({ numDiceInt = 2, goalInt = 7 }) {
    const [diceArr, setDiceArr] = useState(() => getRolls(numDiceInt));
    const isWinner = sum(diceArr) === goalInt;

    const roll = () => setDiceArr(getRolls(numDiceInt));

    return (
        <main className='LuckyN'>
            <h1>Lucky {goalInt} {isWinner && 'You Win!'}</h1>
            <Dice diceArr={diceArr} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    );
}