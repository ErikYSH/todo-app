import React, { useState } from "react";
import { Task } from "../Task";
import SingleTask from "../SingleTask";
import "./index.css";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ShowList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  const [search, setSearch] = useState("");

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

      {taskList.filter((task)=> {
        if (search === "") {
            return task
        } else if (task.task.toLowerCase().includes(search.toLowerCase())) {
            return task
        }
      }).map((task) => (
        <SingleTask
          task={task}
          // id = {task.id}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};

export default ShowList;
