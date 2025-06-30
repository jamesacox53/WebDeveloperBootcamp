import "./styles.css";
import ScoreKeeper from "./ScoreKeeper";

export default function App() {
  return (
    <div className="App">
      <ScoreKeeper numPlayers={10} target={8} />
    </div>
  );
}
