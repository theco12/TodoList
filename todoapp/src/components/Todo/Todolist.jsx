import React from "react";

export default function Todolist({ todolist, onUpdate, onDelete }) {
  const { status, text } = todolist;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todolist, status });
  };

  const handleDelete = onDelete(todolist);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        // onChange={handleChange}
      />
      <label>{text}</label>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
