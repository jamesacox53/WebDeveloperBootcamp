import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}
