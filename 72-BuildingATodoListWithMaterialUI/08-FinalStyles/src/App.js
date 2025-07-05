import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
}
