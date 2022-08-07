import React from "react";
import "./index.css"

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ task, setTask, handleSubmit }: Props) => {
  return (
    <>
      <div className="t-form__container">
        <form
          className="t-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="t-form__input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
          />
          <button className="t-form__btn btn-primary" type="submit">ADD</button>
         
        </form>
      </div>
    </>
  );
};

export default InputForm;
