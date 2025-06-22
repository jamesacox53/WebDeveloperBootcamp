import "./styles.css";
import Greeter from "./Greeter";
import Die from "./Die";

export default function App() {
  return (
    <div className="App">
      <Greeter person="Bill" from="James" />
      <Greeter person="Ted" from="James" />
      <Greeter person="Rosa" from="James" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />
    </div>
  );
}
