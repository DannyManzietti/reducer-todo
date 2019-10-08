import React from "react";
import { initialState } from "../reducers/reducer";
import NewTodo from "./NewTodo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(item => {
        return <NewTodo key={item.id} name={item.item} />;
      })}
    </div>
  );
};

export default TodoList;