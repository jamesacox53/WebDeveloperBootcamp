import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [itemArr, setItemArr] = useState(getInitShoppingArr);

  const shopItemLiArr = getShopItemLiArr(itemArr);
  const addItemFunc = (itemObj) => _addItemFunc(itemObj, setItemArr);

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>{shopItemLiArr}</ul>
      <ShoppingListForm addItemFunc={addItemFunc} />
    </div>
  );
}

function getInitShoppingArr() {
  return [
    {
      id: 1,
      product: "Bananas",
      quantity: 8,
    },
    {
      id: 2,
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
    newItemObj["id"] = 9;

    const newItemArr = [...itemArr];
    newItemArr.push(newItemObj);

    return newItemArr;
  };

  setItemArr(getNewItemArrFunc);
}
