import "./index.css";
import { Task } from "./types/Todo";
import { todos as initialTodos } from "./data/todoTasks";
import { useState } from "react";
import removeTodo from "./utilities/removeTodo";

type deleteTodoProps = {
  taskID: number;
};

function App() {
  const [todos, setTodos] = useState<Task[]>(initialTodos);

  const deleteTodo = ({ taskID }: deleteTodoProps) => {
    const updatedTodos = removeTodo({ taskID, todos });
    setTodos(updatedTodos);
  };

  return <div className="App"></div>;
}

export default App;
