import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

export default function TodoItem({ todoObj, deleteTodoFunc, toggleTodoFunc }) {
  const labelId = `checkbox-list-label-${todoObj["id"]}`;

  return (
    <ListItem
      key={todoObj["id"]}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={deleteTodoFunc}>
          <ClearIcon />
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
            onChange={toggleTodoFunc}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todoObj["text"]} />
      </ListItemButton>
    </ListItem>
  );
}
