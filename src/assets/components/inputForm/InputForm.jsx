import "./inputForm.scss";
import { useState, useContext } from "react";
import newContext from "../../store/newContext";

const InputForm = () => {
  const { dispatch } = useContext(newContext);
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        content: input,
        status: false,
      },
    });
    setInput("");
  };

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="InputForm">
      <h2>TODO</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder="ADD TASK"
        />

        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default InputForm;
