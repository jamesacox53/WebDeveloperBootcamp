import './styles.css';
import { sum } from './utils';
import LuckyN from './LuckyN';


function lessThan4(diceArr) {
    return sum(diceArr) < 4;
}

function allSameValue(diceArr) {
    return diceArr.every(d => d == diceArr[0]);
}

export default function App() {
    return (
        <div className="App">
            <LuckyN titleStr='Roll less than 4' winCheckFunc={lessThan4} />
            <LuckyN titleStr='Roll the same number' numDiceInt={3} winCheckFunc={allSameValue} />
        </div>
    );
}
