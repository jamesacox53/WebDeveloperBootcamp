import "./styles.css";
import ShoppingList from "./ShoppingList";

const itemsArr = [
  {
    item: "eggs",
    quantity: 12,
    completed: false,
  },
  {
    item: "milk",
    quantity: 1,
    completed: true,
  },
  {
    item: "chicken breast",
    quantity: 4,
    completed: false,
  },
  {
    item: "carrots",
    quantity: 6,
    completed: true,
  },
];

export default function App() {
  return (
    <div className="App">
      <ShoppingList itemsArr={itemsArr} />
    </div>
  );
}
