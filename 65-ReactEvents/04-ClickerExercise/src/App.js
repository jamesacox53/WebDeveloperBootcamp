import "./styles.css";
import Clicker2 from "./Clicker2";

export default function App() {
  return (
    <div className="App">
      <Clicker2 message="Hi!!!" buttonText="Please click me" />
      <Clicker2 message="Please stop clicking me!" buttonText="Do not click me" />
    </div>
  );
}
