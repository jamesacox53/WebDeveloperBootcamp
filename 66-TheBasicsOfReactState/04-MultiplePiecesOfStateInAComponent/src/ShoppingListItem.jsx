export default function ShoppingListItem({ item, quantity, completed }) {
  const styleObj = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <li style={styleObj}>
      {item} - {quantity}
    </li>
  );
}
