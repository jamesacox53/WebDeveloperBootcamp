import { useState } from "react";

export default function ValidatedShoppingListForm({ addItemFunc }) {
  const [formObj, setFormObj] = useState(getInitShoppingObj);
  const [productIsValid, setProductIsValid] = useState(false);

  const handleSubmit = (event) => {
    _handleSubmit(event, productIsValid, addItemFunc, formObj, setFormObj);
  };

  const handleChange = (event) => {
    _handleChange(event, setFormObj, setProductIsValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        id="product"
        name="product"
        type="text"
        placeholder="product name"
        onChange={handleChange}
        value={formObj["product"]}
      />
      {!productIsValid && (
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}
      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        placeholder="quantity"
        onChange={handleChange}
        value={formObj["quantity"]}
      />
      <button disabled={!productIsValid}>Add Item</button>
    </form>
  );
}

function getInitShoppingObj() {
  return {
    product: "",
    quantity: 0,
  };
}

function _handleChange(event, setFormObj, setProductIsValid) {
  const changedField = event.target.name;
  const newValue = event.target.value;

  validateFormField(changedField, newValue, setProductIsValid);

  const newFormObjFunc = (formObj) => {
    const newFormObj = { ...formObj };
    newFormObj[changedField] = newValue;

    return newFormObj;
  };

  setFormObj(newFormObjFunc);
}

function validateFormField(changedField, newValue, setProductIsValid) {
  if (changedField != "product") return;

  if (newValue.length > 0) {
    setProductIsValid(true);
  } else {
    setProductIsValid(false);
  }
}

function _handleSubmit(
  event,
  productIsValid,
  addItemFunc,
  formObj,
  setFormObj
) {
  event.preventDefault();

  if (!productIsValid) return;

  addItemFunc(formObj);
  setFormObj(getInitShoppingObj());
}
