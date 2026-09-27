import { Task } from "../types/Todo";

type toggleTodoProps = {
  taskID: number;
  todos: Task[];
};

const toggleTodo = ({ taskID, todos }: toggleTodoProps) => {
  let updatedTodos = todos.map((todo) =>
    todo.id === taskID ? { ...todo, status: !todo.status } : todo
  );

  return updatedTodos;
};

export default toggleTodo;
