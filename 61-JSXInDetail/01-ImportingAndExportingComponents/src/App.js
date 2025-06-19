import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Dog />
      <Dog />
      <Dog />
      <Greeter />
      <Greeter />
    </div>
  );
}
