import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ itemsArr }) {
  return (
    <ul>
      {itemsArr.map((itemObj) => (
        <ShoppingListItem key={itemObj.id} {...itemObj} />
      ))}
    </ul>
  );
}
