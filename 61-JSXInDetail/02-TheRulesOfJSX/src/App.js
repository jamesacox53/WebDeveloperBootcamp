import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";

export default function App() {
  return (
    <div className="App">
      <LoginForm />
      <Greeter />
      <Dog />
    </div>
  );
}
