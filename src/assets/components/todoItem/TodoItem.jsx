import "./todoItem.scss";
import { useContext } from "react";
import newContext from "../../store/newContext";
import { IoMdRemoveCircleOutline, IoMdClose } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(newContext);

  const clickHandler = (event) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: data,
    });
  };

  const changeStatusHandler = (event) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: data,
    });
  };

  return (
    <div className="TodoItem">
      <p>{data.content}</p>

      <div>
        <i onClick={changeStatusHandler}>
          {data.status ? <MdOutlineDone /> : <IoMdClose />}
        </i>
        <i onClick={clickHandler}>
          <IoMdRemoveCircleOutline />
        </i>
      </div>
    </div>
  );
};

export default TodoItem;
