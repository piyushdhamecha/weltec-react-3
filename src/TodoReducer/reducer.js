const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "ADD":
      return state.concat([action.data]);

    case "DELETE":
      const newTodoList = [
        ...state,
        // Buy chairs,
        // Buy glasses,˝
        // Pay credit cards
      ];

      newTodoList.splice(action.data.index, 1);

      return newTodoList;

    case "TOGGLE_COMPLETED":
      return state.map((item, todoListIndex) => {
        if (todoListIndex === action.data.index) {
          return {
            title: item.title,
            completed: !item.completed,
          };
        }

        return item;
      });
    default:
      break;
  }
};

export default reducer;
