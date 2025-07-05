import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

const initTodoArr = [
  {
    id: 1,
    text: "Walk the dog",
    completed: false,
  },
  {
    id: 2,
    text: "Walk the cat",
    completed: false,
  },
  {
    id: 3,
    text: "Walk the fish",
    completed: true,
  },
  {
    id: 4,
    text: "Walk the chickens",
    completed: false,
  },
];

export default function TodoList() {
  const [todoArr, setTodoArr] = useState(initTodoArr);
  const listItemArr = getListItemArr(todoArr);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {listItemArr}
    </List>
  );
}

function getListItemArr(todoArr) {
  return todoArr.map(getListItemElem);
}

function getListItemElem(todoObj) {
  const labelId = `checkbox-list-label-${todoObj["id"]}`;

  return (
    <ListItem
      key={todoObj["id"]}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todoObj["completed"]}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todoObj["text"]} />
      </ListItemButton>
    </ListItem>
  );
}
