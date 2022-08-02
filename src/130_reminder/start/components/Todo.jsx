import React from "react";
import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "釣りに行く",
    },
    {
      id: 2,
      content: "寿司を食べる",
    },
    {
      id: 3,
      content: "洋服を買う",
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  const createTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  return (
    <div>
      <h2>Reminder</h2>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </div>
  );
};
