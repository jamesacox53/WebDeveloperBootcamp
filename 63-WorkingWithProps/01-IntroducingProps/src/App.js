import "./styles.css";
import Greeter from "./Greeter";

export default function App() {
  return (
    <div className="App">
      <Greeter person="Bill" />
      <Greeter person="Ted" />
      <Greeter person="Rosa" />
    </div>
  );
}
