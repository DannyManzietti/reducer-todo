import React, { useState, useReducer } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const changeHandler = event => {
    setTodoText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    addTodo(todoText);

    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter To-do:
          <input
            type="text"
            value={todoText}
            name="newTodo"
            onChange={changeHandler}
          >
            {}
          </input>
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
