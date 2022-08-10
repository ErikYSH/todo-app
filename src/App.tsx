import React, { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm";
import ShowList from "./component/ShowList";
import {Task} from "./component/Task";
import { DragDropContext, DropResult } from 'react-beautiful-dnd'



const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [complete, setComplete] = useState<Task[]>([])




  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, { id: Date.now(), task, isComplete: false }]);
      setTask("");
    } 
    
  };

  
  const onDragEnd = (result:DropResult) => {
    console.log(result);
    
    const {source, destination} = result
    if (!destination) return;
    if (destination.droppableId == source.droppableId && destination.index == source.index) return;

    let add,
    active = taskList,
    completed = complete;

    if (source.droppableId === 'TaskList') {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = completed[source.index]
      completed.splice(source.index, 1)
    }

    if (destination.droppableId === 'TaskComplete') {
      active.splice(destination.index, 0, add)
    } else {
      completed.splice(destination.index, 0,add)
    }

    setComplete(completed)
    setTaskList(active)

  }

  return (

    <DragDropContext onDragEnd={onDragEnd}>

    <div className="App">
      <h1 className="header">Todo App</h1>
      <InputForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ShowList taskList={taskList} setTaskList={setTaskList} complete={complete} setComplete={setComplete}/>
    </div>
    </DragDropContext>
  );
};

export default App;
