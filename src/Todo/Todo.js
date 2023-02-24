import { useEffect, useRef, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Todo = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
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

  console.log(todoList);
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
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={index}>
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
