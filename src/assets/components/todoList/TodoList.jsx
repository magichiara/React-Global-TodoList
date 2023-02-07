import "./todoList.scss";
import newContext from "../../store/newContext";
import { useContext } from "react";
import TodoItem from "../todoItem/TodoItem";

const TodoList = () => {
  const data = useContext(newContext);
  console.log(data);
  return (
    <div className="TodoList">
      {data.state.todoList.map((item, index) => (
        <TodoItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
