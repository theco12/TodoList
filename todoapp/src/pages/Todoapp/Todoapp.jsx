import React from "react";
import { useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import Todolist from "../../components/Todo/Todolist";

export default function Todoapp({ filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo1", status: "active" },
    { id: 2, text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filtered = getFilteredItem(todos, filter);

  return (
    <section>
      <ul>
        {filtered.map((todo) => (
          <Todolist key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

const getFilteredItem = (todos, filter) => {
  if (filter === "all") return todos;
  if (filter === "active") return todos.filter((todo) => todo.status === "active");
  if (filter === "completed") return todos.filter((todo) => todo.status === "completed");
};
