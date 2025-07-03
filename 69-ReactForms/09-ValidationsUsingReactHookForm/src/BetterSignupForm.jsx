import { useState } from "react";

export default function BetterSignupForm() {
  const [formObj, setFormObj] = useState(getInitFormObj);

  const handleChange = (event) => _handleChange(event, setFormObj);
  const handleSubmit = () => _handleSubmit(formObj);

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstNameStr"
        type="text"
        placeholder="first name"
        value={formObj["firstNameStr"]}
        onChange={handleChange}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastNameStr"
        type="text"
        placeholder="last name"
        value={formObj["lastNameStr"]}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="passwordStr"
        type="password"
        placeholder="password"
        value={formObj["passwordStr"]}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function getInitFormObj() {
  return {
    firstNameStr: "",
    lastNameStr: "",
    passwordStr: "",
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

function _handleSubmit(formObj) {
  console.log(formObj);
}
