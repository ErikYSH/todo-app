import React from "react";
import { Task } from "../Task";
import { RiEditBoxLine, RiDeleteBin4Line } from "react-icons/ri";
import { GrStatusGood, GrTask } from "react-icons/gr";

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({ task, taskList, setTaskList }: Props) => {
  const handleComplete = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDelete = (id:number) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <div>
      <form className="singleTodo">
        {task.isComplete ? <s className='singleTaskText'>{task.task}</s> : <span className='singleTaskText'>{task.task}</span>}
        <span className="icons">
          <RiEditBoxLine />
        </span>
        <span className="icons" onClick={() => handleDelete(task.id)}>
          <RiDeleteBin4Line />
        </span>
        <span className="icons" onClick={() => handleComplete(task.id)}>
          <GrStatusGood />
        </span>
      </form>
    </div>
  );
};

export default SingleTask;
