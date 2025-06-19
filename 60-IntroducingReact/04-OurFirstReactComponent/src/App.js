import "./styles.css";

function Greeter() {
  return <h1>Hello</h1>;
}

function Dog() {
  return <p>Woof!</p>;
}

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
