import React from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e:React.FormEvent) => void;
}

const InputForm = ({ task, setTask, handleSubmit }: Props) => {
  return (
    <form action="" onSubmit={(e)=> {handleSubmit(e)}}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default InputForm;
