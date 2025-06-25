import "./styles.css";
import ShoppingList from "./ShoppingList";

const itemsArr = [
  {
    id: 1,
    item: "eggs",
    quantity: 12,
    completed: false,
  },
  {
    id: 2,
    item: "milk",
    quantity: 1,
    completed: true,
  },
  {
    id: 3,
    item: "chicken breast",
    quantity: 4,
    completed: false,
  },
  {
    id: 4,
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
