const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id != action.payload.id),
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, status: !item.status };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
