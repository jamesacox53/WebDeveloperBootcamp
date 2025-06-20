import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";
import Die from "./Die";
import DiceRoll from "./DiceRoll";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
