import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

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
  const todoItemArr = getTodoItemArr(todoArr, setTodoArr);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todoItemArr}
    </List>
  );
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

  return <TodoForm addTodoFunc={addTodoFunc} />;
}

function _addTodoFunc(textStr, setTodoArr) {
  const newTodoArrFunc = (todoArr) => {
    const newTodoArr = [...todoArr];

    const newTodoObj = {
      id: 8,
      text: textStr,
      completed: false,
    };

    newTodoArr.push(newTodoObj);
    return newTodoArr;
  };

  setTodoArr(newTodoArrFunc);
}
