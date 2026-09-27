type TaskProps = {
  taskID: number;
  taskName: string;
  taskStatus: boolean;
  deleteTask: (taskID: number) => void;
};

const Task = ({ taskID, taskName, taskStatus, deleteTask }: TaskProps) => {
  return (
    <div className="taskContainer">
      <p style={{ textDecoration: taskStatus ? "line-through" : "none" }}>
        {taskName}
      </p>
      <button onClick={() => deleteTask(taskID)}>delete</button>
    </div>
  );
};

export default Task;
