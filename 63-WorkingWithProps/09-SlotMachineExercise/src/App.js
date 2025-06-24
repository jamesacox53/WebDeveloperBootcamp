import "./styles.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

export default function App() {
  return (
    <div className="App">
      {/* <Greter person="Bill" from="James" />
      <Greeter person="Ted" from="James" />
      <Greeter person="Rosa" from="James" />
      <Greeter />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />
      <Die />
      <ListPicker valuesArr={[1, 2, 3]} />
      <ListPicker valuesArr={["a", "b", "c"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <Heading color="magenta" fontSize="48px" text="Welcome!" />
      <Heading color="teal" fontSize="20px" text="Welcome!" />
      <Heading fontSize="20px" text="Welcome!" />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} /> */}
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />
      <Slots val1="d" val2="d" val3="d" />
    </div>
  );
}
