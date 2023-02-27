import { useEffect, useMemo, useRef, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { StyledButtonWrapper } from "./Todo.styled";

const Todo = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoList = todoList.concat([
      {
        completed: false,
        title: inputValue,
      },
    ]);

    setTodoList(newTodoList);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleItemDeleteClick = (index) => {
    const newTodoList = [
      ...todoList,
      // Buy chairs,
      // Buy glasses,
      // Pay credit cards
    ];

    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  };

  const handleItemCompleteClick = (index) => {
    const newTodoList = todoList.map((item, todoListIndex) => {
      if (todoListIndex === index) {
        return {
          title: item.title,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTodoList(newTodoList);
  };

  const onFilterClick = (type) => {
    setFilterType(type);
  };

  console.log({todoList, filterType});

  // 1st render return: [] memo:[]
  // 2nd render return: memo
  // 3rd render return: function() memo:function()
  // 4th render return: memo
  const filteredTodoList = useMemo(() => {
    console.log('Filtered todo list function called')
    if(filterType === "pending") {
      return todoList.filter((item) => item.completed === false)
    }

    if(filterType === "completed") {
      return todoList.filter((item) => item.completed === true)
    }

    return todoList
  }, [todoList, filterType]) 

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
      <ul>
        {filteredTodoList.map((item, index) => {
          return (
            <li key={`${index}_${item.title}`}>
              <input
                checked={item.completed}
                type="checkbox"
                onChange={() => handleItemCompleteClick(index)}
              />
              {item.completed ? <del>{item.title}</del> : item.title}
              <IconButton
                onClick={() => handleItemDeleteClick(index)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
