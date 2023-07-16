/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TodoItem = ({
  title,
  description,
  isCompleted,
  deleteHandler,
  updateHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        {/* <p>1</p> */}
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
