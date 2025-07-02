import { useState } from "react";

export default function SignupForm() {
  const [firstNameStr, setFirstNameStr] = useState("");
  const [lastNameStr, setLastNameStr] = useState("");

  const updateFirstName = (event) => setFirstNameStr(event.target.value);
  const updateLastName = (event) => setLastNameStr(event.target.value);

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        type="text"
        placeholder="first name"
        value={firstNameStr}
        onChange={updateFirstName}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        type="text"
        placeholder="last name"
        value={lastNameStr}
        onChange={updateLastName}
      />
      <button>Submit</button>
    </div>
  );
}
