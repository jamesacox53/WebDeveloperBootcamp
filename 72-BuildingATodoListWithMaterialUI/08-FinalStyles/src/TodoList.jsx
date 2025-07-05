import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todoArr, setTodoArr] = useState(getTodoArr);

  const saveTodoArr = () => _saveTodoArr(todoArr);
  useEffect(saveTodoArr, [todoArr]);

  const todoItemArr = getTodoItemArr(todoArr, setTodoArr);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todoItemArr}
      </List>
    </Box>
  );
}

function getTodoArr() {
  try {
    const json = localStorage.getItem("todoArr");
    if (!json) return [];

    const jsonStr = json.toString();
    if (!jsonStr) return [];

    const todoArr = JSON.parse(jsonStr);
    if (!todoArr) return [];

    return todoArr;
  } catch (e) {
    return [];
  }
}

function _saveTodoArr(todoArr) {
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}

function getTodoItemArr(todoArr, setTodoArr) {
  const todoItemArr = todoArr.map((todoObj) => {
    return getTodoItemElem(todoObj, setTodoArr);
  });

  const todoFormElem = getTodoFormElem(setTodoArr);
  todoItemArr.push(todoFormElem);

  return todoItemArr;
}

function getTodoItemElem(todoObj, setTodoArr) {
  const deleteTodoFunc = () => {
    return _deleteTodoFunc(todoObj["id"], setTodoArr);
  };

  const toggleTodoFunc = () => {
    return _toggleTodoFunc(todoObj["id"], setTodoArr);
  };

  const propsObj = {
    todoObj: todoObj,
    deleteTodoFunc: deleteTodoFunc,
    toggleTodoFunc: toggleTodoFunc,
  };

  return <TodoItem key={todoObj["id"]} {...propsObj} />;
}

function _deleteTodoFunc(id, setTodoArr) {
  const newTodoArrFunc = (todoArr) => {
    const newTodoArr = todoArr.filter((todoObj) => todoObj["id"] != id);

    return newTodoArr;
  };

  setTodoArr(newTodoArrFunc);
}

function _toggleTodoFunc(id, setTodoArr) {
  const newTodoObjFunc = (todoObj) => {
    if (todoObj["id"] != id) return todoObj;

    const newTodoObj = { ...todoObj };
    newTodoObj["completed"] = !newTodoObj["completed"];

    return newTodoObj;
  };

  const newTodoArrFunc = (todoArr) => {
    return todoArr.map(newTodoObjFunc);
  };

  setTodoArr(newTodoArrFunc);
}

function getTodoFormElem(setTodoArr) {
  const addTodoFunc = (textStr) => {
    return _addTodoFunc(textStr, setTodoArr);
  };

  return <TodoForm key={99} addTodoFunc={addTodoFunc} />;
}

function _addTodoFunc(textStr, setTodoArr) {
  const newTodoArrFunc = (todoArr) => {
    const newTodoArr = [...todoArr];

    const newTodoObj = {
      id: crypto.randomUUID(),
      text: textStr,
      completed: false,
    };

    newTodoArr.push(newTodoObj);
    return newTodoArr;
  };

  setTodoArr(newTodoArrFunc);
}
