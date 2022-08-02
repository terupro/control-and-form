import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: value,
    };
    createTodo(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="入力してね"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};
