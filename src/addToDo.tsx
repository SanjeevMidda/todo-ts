import { Task } from "./types/Todo";

type addToDoProps = {
  newTodo: string;
  todos: Task[];
};

const addToDo = ({ newTodo, todos }: addToDoProps) => {
  const todoToAdd = {
    id: todos.length + 1,
    name: newTodo,
    status: false,
  };

  return todoToAdd;
};

export default addToDo;
