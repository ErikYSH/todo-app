import React, { FormEventHandler, useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm";
import { TodoList } from "./component/TodoList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TodoList[]>([]);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, {id:Date.now(), task, isComplete:false}])
      setTask("")
    }
  };

  console.log(taskList)
  return (
    <div className="App">
      <h1 className="header">Todo App</h1>
      <InputForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
