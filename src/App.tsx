import "./index.css";
import { Task } from "./types/Todo";
import TaskComponent from "./components/TaskComponent";
import { todos as initialTodos } from "./data/todoTasks";
import { useState } from "react";
import removeTodo from "./utilities/removeTodo";
import toggleTodo from "./utilities/toggleTodo";
import addToDo from "./utilities/addToDo";

function App() {
  const [todos, setTodos] = useState<Task[]>(initialTodos);
  const [newTask, setNewTask] = useState("");

  const deleteTodo = (taskID: number) => {
    const updatedTodos = removeTodo({ taskID, todos });
    setTodos(updatedTodos);
  };

  const toggleTodoStatus = (taskID: number) => {
    const updatedTodos = toggleTodo({ taskID, todos });
    setTodos(updatedTodos);
  };

  const addNewTodoItem = () => {
    const itemAdded = addToDo({ newTask, todos });
    setTodos(itemAdded);
  };

  return (
    <div className="App">
      {todos.map((item) => {
        return (
          <TaskComponent
            key={item.id}
            taskID={item.id}
            taskName={item.name}
            taskStatus={item.status}
            deleteTask={deleteTodo}
            toggleTaskStatus={toggleTodoStatus}
          />
        );
      })}

      <div className="inputContainer">
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addNewTodoItem}>ADD</button>
      </div>
    </div>
  );
}

export default App;
