import { useState } from 'react';
import { getRolls } from './utils';
import Dice from './Dice';
import Button from './Button';

export default function LuckyN(argsObj) {
    const numDiceInt = argsObj['numDiceInt'] || 2;
    const winCheckFunc = argsObj['winCheckFunc'];
    const titleStr = argsObj['titleStr'] || 'Lucky Dice Game';
    
    const [diceArr, setDiceArr] = useState(() => getRolls(numDiceInt));
    const isWinner = winCheckFunc(diceArr);

    const roll = () => setDiceArr(getRolls(numDiceInt));

    return (
        <main className='LuckyN'>
            <h1>{titleStr} {isWinner && 'You Win!'}</h1>
            <Dice diceArr={diceArr} />
            <Button textStr='Re-Roll Dice' clickFunc={roll} />
        </main>
    );
}