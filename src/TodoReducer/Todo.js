import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import { Button, ButtonGroup } from "@mui/material";
import { StyledButtonWrapper } from "./Todo.styled";
import TodoList from "./TodoList";

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

      return newTodoList
    default:
      break;
  }
};

const Todo = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  // const [todoList, setTodoList] = useState([]);
  const [todoList, dispatch] = useReducer(reducer, []);
  const [filterType, setFilterType] = useState("all");
  debugger;
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newTodoList = todoList.concat([
    //   {
    //     completed: false,
    //     title: inputValue,
    //   },
    // ]);

    // setTodoList(newTodoList);
    dispatch({
      type: "ADD",
      data: {
        completed: false,
        title: inputValue,
      },
    });
    setInputValue("");
    inputRef.current.focus();
  };

  const handleItemDeleteClick = useCallback(
    (index) => {
      // const newTodoList = [
      //   ...todoList,
      //   // Buy chairs,
      //   // Buy glasses,
      //   // Pay credit cards
      // ];

      // newTodoList.splice(index, 1);

      // setTodoList(newTodoList);
      dispatch({
        type: "DELETE",
        data: { index },
      });
    },
    [todoList]
  );

  const handleItemCompleteClick = useCallback(
    (index) => {
      const newTodoList = todoList.map((item, todoListIndex) => {
        if (todoListIndex === index) {
          return {
            title: item.title,
            completed: !item.completed,
          };
        }

        return item;
      });

      // setTodoList(newTodoList);
    },
    [todoList]
  );

  const onFilterClick = (type) => {
    setFilterType(type);
  };

  // console.log({todoList, filterType});

  // 1st render return: [] memo:[]
  // 2nd render return: memo
  // 3rd render return: function() memo:function()
  // 4th render return: memo
  const filteredTodoList = useMemo(() => {
    if (filterType === "pending") {
      return todoList.filter((item) => item.completed === false);
    }

    if (filterType === "completed") {
      return todoList.filter((item) => item.completed === true);
    }

    return todoList;
  }, [todoList, filterType]);

  console.log(typeof filteredTodoList);

  return (
    <div>
      <h4>Todo list</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <StyledButtonWrapper>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          size="small"
        >
          <Button
            variant={filterType === "all" ? "contained" : "outlined"}
            onClick={() => onFilterClick("all")}
          >
            All
          </Button>
          <Button
            variant={filterType === "pending" ? "contained" : "outlined"}
            onClick={() => onFilterClick("pending")}
          >
            Pending
          </Button>
          <Button
            variant={filterType === "completed" ? "contained" : "outlined"}
            onClick={() => onFilterClick("completed")}
          >
            Completed
          </Button>
        </ButtonGroup>
      </StyledButtonWrapper>
      <TodoList
        filteredTodoList={filteredTodoList}
        // filteredTodoList={ref10}
        // filteredTodoList={ref10}
        handleItemCompleteClick={handleItemCompleteClick}
        // handleItemCompleteClick={ref1}
        // handleItemCompleteClick={ref1}
        // handleItemCompleteClick={ref1}
        handleItemDeleteClick={handleItemDeleteClick}
      />
    </div>
  );
};

export default Todo;
