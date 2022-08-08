import React, { useState, useRef, useEffect } from "react";
import { Task } from "../Task";
import { RiEditBoxLine, RiDeleteBin4Line } from "react-icons/ri";
import { GrStatusGood, GrTask } from "react-icons/gr";
import "./index.css"

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

  const inputEL = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputEL.current?.focus()
  }, [edit])

  return (
    <div>
      <form className="singleTask" onSubmit={(e) => handleEdit(e, task.id)}>

        {edit ? (
          <input
          className="editInput"
            ref = {inputEL}
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
