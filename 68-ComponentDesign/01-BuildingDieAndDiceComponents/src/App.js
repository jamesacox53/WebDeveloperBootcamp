import "./styles.css";
import Dice from "./Dice";
import Die from "./Die";

export default function App() {
    return (
        <div className="App">
            <Dice diceArr={[3, 6, 1]} colorStr={'green'} />
            <Dice diceArr={[1, 2, 3]} />
            <Die valInt={2} />
            <Die valInt={4} />
        </div>
    );
}
