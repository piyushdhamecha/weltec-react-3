import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import React from "react";

const TodoList = ({
  filteredTodoList,
  handleItemCompleteClick,
  handleItemDeleteClick,
}) => {
  console.log("TodoList component rendered");
  return (
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
  );
};

export default React.memo(TodoList);
