type TaskProps = {
  taskID: number;
  taskName: string;
  taskStatus: boolean;
  deleteTask: (taskID: number) => void;
  toggleTaskStatus: (taskID: number) => void;
};

const Task = ({
  taskID,
  taskName,
  taskStatus,
  deleteTask,
  toggleTaskStatus,
}: TaskProps) => {
  return (
    <div className="taskContainer">
      <p style={{ textDecoration: taskStatus ? "line-through" : "none" }}>
        {taskName}
      </p>
      <input type="checkbox" onClick={() => toggleTaskStatus(taskID)} />
      <button onClick={() => deleteTask(taskID)}>delete</button>
    </div>
  );
};

export default Task;
