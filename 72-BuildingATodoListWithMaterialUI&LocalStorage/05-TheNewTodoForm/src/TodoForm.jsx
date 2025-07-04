import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function TodoForm({ addTodoFunc }) {
  const [textStr, setTextStr] = useState("");

  const handleSubmit = (event) => {
    return _handleSubmit(event, addTodoFunc, textStr, setTextStr);
  };

  const handleChange = (event) => _handleChange(event, setTextStr);

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
          value={textStr}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

function _handleSubmit(event, addTodoFunc, textStr, setTextStr) {
  event.preventDefault();

  addTodoFunc(textStr);
  setTextStr("");
}

function _handleChange(event, setTextStr) {
  setTextStr(event.target.value);
}
