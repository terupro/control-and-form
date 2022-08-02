import React from "react";

export const List = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.content}</span>
            <button onClick={() => deleteTodo(todo.id)}>-</button>
          </div>
        );
      })}
    </div>
  );
};
