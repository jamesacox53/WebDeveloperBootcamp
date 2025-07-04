import "./styles.css";
import ButtonDemo from "./ButtonDemo";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonDemo />
      <RatingDemo />
      <FormDemo />
    </div>
  );
}
