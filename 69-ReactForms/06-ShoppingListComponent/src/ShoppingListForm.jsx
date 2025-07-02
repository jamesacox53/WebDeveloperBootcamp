import { useState } from "react";

export default function ShoppingListForm({ addItemFunc }) {
  const [formObj, setFormObj] = useState(getInitShoppingObj);

  const handleSubmit = (event) => {
    _handleSubmit(event, addItemFunc, formObj, setFormObj);
  };

  const handleChange = (event) => _handleChange(event, setFormObj);

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Product is: {formObj["product"]} and Quantity is: {formObj["quantity"]}
      </h1>
      <label htmlFor="product">Product Name</label>
      <input
        id="product"
        name="product"
        type="text"
        placeholder="product name"
        onChange={handleChange}
        value={formObj["product"]}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        placeholder="quantity"
        onChange={handleChange}
        value={formObj["quantity"]}
      />
      <button>Add Item</button>
    </form>
  );
}

function getInitShoppingObj() {
  return {
    product: "",
    quantity: 0,
  };
}

function _handleChange(event, setFormObj) {
  const changedField = event.target.name;
  const newValue = event.target.value;

  const newFormObjFunc = (formObj) => {
    const newFormObj = { ...formObj };
    newFormObj[changedField] = newValue;

    return newFormObj;
  };

  setFormObj(newFormObjFunc);
}

function _handleSubmit(event, addItemFunc, formObj, setFormObj) {
  event.preventDefault();

  addItemFunc(formObj);
  setFormObj(getInitShoppingObj());
}
