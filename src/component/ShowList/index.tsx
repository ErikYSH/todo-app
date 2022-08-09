import React, { FormEventHandler, ReactEventHandler, useState } from "react";
import { Task } from "../Task";
import SingleTask from "../SingleTask";
import "./index.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  complete: Task[];
  setComplete: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ShowList: React.FC<Props> = ({
  taskList,
  setTaskList,
  complete,
  setComplete,
}: Props) => {
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
      <Droppable droppableId="TaskList">
        {(provided) => (
          <div
            className="showList__container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Active</h2>
            {taskList
              .filter((task) => {
                if (search === "") {
                  return task;
                } else if (
                  task.task.toLowerCase().includes(search.toLowerCase())
                ) {
                  return task;
                }
              })
              .map((task, index) => (
                <SingleTask
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TaskComplete">
        {(provided) => (
          <div
            className="showList__container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Completed</h2>
            {taskList
              .filter((task) => {
                if (task.isComplete === true) {
                  return task;
                }
              })
              .map((task,index) => (
                <SingleTask
                  index={index}
                  task={task}
                  taskList={complete}
                  setTaskList={setComplete}
                />
              ))}
              {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ShowList;
