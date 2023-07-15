import React from "react";
import { useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import Todolist from "../../components/Todo/Todolist";

export default function Todoapp() {
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
    setTodos(todos.filter((todo) => todo.id !== deleted));
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todolist key={todo.id} todolist={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
