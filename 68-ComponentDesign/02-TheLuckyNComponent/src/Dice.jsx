import "./Dice.css";
import Die from "./Die";

export default function Dice({ diceArr, colorStr }) {
    const dieArr = diceArr.map((diceInt, idx) => {
        return <Die key={idx} valInt={diceInt} colorStr={colorStr} />;
    });

    return (
        <section className="Dice">
            {dieArr}
        </section>
    );
}