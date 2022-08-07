import React, { useState } from "react";
import { Task } from "../Task";
import { RiEditBoxLine, RiDeleteBin4Line } from "react-icons/ri";
import { GrStatusGood, GrTask } from "react-icons/gr";

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({ task, taskList, setTaskList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleComplete = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTaskList(taskList.map((task)=> (
        task.id === id ?  {...task, task:editTask}:task
    ))
    );
    setEdit(false);
  }

  return (
    <div>
      <form className="singleTodo" onSubmit={(e) => handleEdit(e, task.id)}>

        {edit ? (
          <input
            value={editTask}
            onChange = {(e) => setEditTask(e.target.value)}

          />
        ) : task.isComplete ? (
          <s className="singleTaskText">{task.task}</s>
        ) : (
          <span className="singleTaskText">{task.task}</span>
        )}

        <span
          className="icons"
          onClick={() => {
            if (!edit && !task.isComplete) {
              setEdit(!edit);
            }
          }}
        >
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
