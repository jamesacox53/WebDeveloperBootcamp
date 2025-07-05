import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";

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

  const todoItemArr = todoArr.map((todoObj) => {
    return getTodoItem(todoObj, todoArr, setTodoArr);
  });

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todoItemArr}
    </List>
  );
}

function getTodoItem(todoObj, todoArr, setTodoArr) {
  const deleteTodoFunc = () => {
    return _deleteTodoFunc(todoObj["id"], todoArr, setTodoArr);
  };

  const propsObj = {
    todoObj: todoObj,
    deleteTodoFunc: deleteTodoFunc,
  };

  return <TodoItem key={todoObj["id"]} {...propsObj} />;
}

function _deleteTodoFunc(id, todoArr, setTodoArr) {
  const newTodoArr = todoArr.filter((todoObj) => todoObj["id"] != id);

  setTodoArr(newTodoArr);
}
