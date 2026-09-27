import { Task } from "../types/Todo";

type removeTodoProps = {
  taskID: number;
  todos: Task[];
};

const removeTodo = ({ taskID, todos }: removeTodoProps) => {
  return todos.filter((todo) => todo.id !== taskID);
};

export default removeTodo;
