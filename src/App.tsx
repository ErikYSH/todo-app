import React, { useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm";
import ShowList from "./component/ShowList";
import {Task} from "./component/Task";


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);


  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, { id: Date.now(), task, isComplete: false }]);
      setTask("");
    }
  };


  return (
    <div className="App">
      <h1 className="header">Todo App</h1>
      <InputForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ShowList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
};

export default App;
