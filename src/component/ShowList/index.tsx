import React, { FormEventHandler, ReactEventHandler, useState } from "react";
import { Task } from "../Task";
import SingleTask from "../SingleTask";
import "./index.css";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ShowList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  const [search, setSearch] = useState("");
  const [complete, setComplete] = useState("");

  return (
    <div className="showList">
      <input
        type="text"
        placeholder="Search Task"
        className="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div className="showList__container">
        <h2>Active</h2>
        {taskList
          .filter((task) => {
            if (search === "") {
              return task;
            } else if (task.task.toLowerCase().includes(search.toLowerCase())) {
              return task;
            }
          })
          .map((task) => (
            <SingleTask
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
      </div>
      <div className="showList__container">
        <h2>Completed</h2>
        {taskList
          .filter((task) => {
            if (task.isComplete === true) {
              return task;
            }
          })
          .map((task) => (
            <SingleTask
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
      </div>
    </div>
  );
};

export default ShowList;
