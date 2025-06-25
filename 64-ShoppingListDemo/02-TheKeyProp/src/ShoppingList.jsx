export default function ShoppingList({ itemsArr }) {
  return (
    <ul>
      {itemsArr.map((obj) => (
        <li
          key={obj.id}
          style={{
            color: obj.completed ? "grey" : "red",
            textDecoration: obj.completed ? "line-through" : "none",
          }}
        >
          {obj.item} - {obj.quantity}
        </li>
      ))}
    </ul>
  );
}
