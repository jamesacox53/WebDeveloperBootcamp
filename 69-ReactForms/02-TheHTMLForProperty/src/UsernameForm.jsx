import { useState } from "react";

export default function UsernameForm() {
    const [usernameStr, setUsernameStr] = useState('');
    const updateUsername = (event) => setUsernameStr(event.target.value);
    
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            <input id="username" type="text" placeholder="username" value={usernameStr} onChange={updateUsername} />
            <button>Submit</button>
        </div>
    );
}