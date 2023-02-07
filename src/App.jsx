import "./App.scss";
import { useReducer, useEffect } from "react";
import InputForm from "./assets/components/inputForm/InputForm";
import TodoList from "./assets/components/todoList/TodoList";
import initState from "./assets/store/initState";
import reducer from "./assets/store/reducer";
import newContext from "./assets/store/newContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  /* useEffect(() => {
    console.log(state);
  }, [state]); */

  return (
    <newContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <InputForm />
        <TodoList />
      </div>
    </newContext.Provider>
  );
}

export default App;
