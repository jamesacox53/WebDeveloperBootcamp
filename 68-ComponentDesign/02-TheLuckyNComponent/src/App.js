import "./styles.css";
import LuckyN from "./LuckyN";

export default function App() {
    return (
        <div className="App">
            <LuckyN />
            <LuckyN numDiceInt={3} goalInt={11} />
        </div>
    );
}
