import { Task } from "./types/Todo";

type addToDoProps = {
  newTask: string;
  todos: Task[];
};

const addToDo = ({ newTask, todos }: addToDoProps) => {
  const todoToAdd = {
    id: todos.length + 1,
    name: newTask,
    status: false,
  };

  return [...todos, todoToAdd];
};

export default addToDo;
