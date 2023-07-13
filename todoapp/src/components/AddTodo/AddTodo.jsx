import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }

    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo" value={text} onChange={handlechange} />
      <button>Add</button>
    </form>
  );
}
