import { useState } from 'react';
import { getRolls } from './utils';
import Dice from './Dice';

export default function LuckyN({ titleStr = "Lucky Dice Game", numDiceInt = 2, winCheckFunc }) {
    const [diceArr, setDiceArr] = useState(() => getRolls(numDiceInt));
    const isWinner = winCheckFunc(diceArr);

    const roll = () => setDiceArr(getRolls(numDiceInt));

    return (
        <main className='LuckyN'>
            <h1>{titleStr} {isWinner && 'You Win!'}</h1>
            <Dice diceArr={diceArr} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    );
}