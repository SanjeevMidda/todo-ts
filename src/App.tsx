import "./index.css";
import { Task } from "./types/Todo";
import TaskComponent from "./components/TaskComponent";
import { todos as initialTodos } from "./data/todoTasks";
import { useState } from "react";
import removeTodo from "./utilities/removeTodo";

function App() {
  const [todos, setTodos] = useState<Task[]>(initialTodos);

  const deleteTodo = (taskID: number) => {
    const updatedTodos = removeTodo({ taskID, todos });
    setTodos(updatedTodos);
  };

  <div className="App">
    {todos.map((item) => {
      return (
        <TaskComponent
          key={item.id}
          taskID={item.id}
          taskName={item.name}
          taskStatus={item.status}
          deleteTask={deleteTodo}
        />
      );
    })}
  </div>;
}

export default App;
