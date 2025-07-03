import { useState } from "react";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

export default function ShoppingList() {
  const [itemArr, setItemArr] = useState(getInitShoppingArr);

  const shopItemLiArr = getShopItemLiArr(itemArr);
  const addItemFunc = (itemObj) => _addItemFunc(itemObj, setItemArr);

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>{shopItemLiArr}</ul>
      <ValidatedShoppingListForm addItemFunc={addItemFunc} />
    </div>
  );
}

function getInitShoppingArr() {
  return [
    {
      id: uuid(),
      product: "Bananas",
      quantity: 8,
    },
    {
      id: uuid(),
      product: "Eggs",
      quantity: 12,
    },
  ];
}

function getShopItemLiArr(itemArr) {
  const getItemLiFunc = (itemObj) => {
    return (
      <li key={itemObj["id"]}>
        {itemObj["product"]} - {itemObj["quantity"]}
      </li>
    );
  };

  return itemArr.map(getItemLiFunc);
}

function _addItemFunc(itemObj, setItemArr) {
  const getNewItemArrFunc = (itemArr) => {
    const newItemObj = { ...itemObj };
    newItemObj["id"] = uuid();

    const newItemArr = [...itemArr];
    newItemArr.push(newItemObj);

    return newItemArr;
  };

  setItemArr(getNewItemArrFunc);
}
