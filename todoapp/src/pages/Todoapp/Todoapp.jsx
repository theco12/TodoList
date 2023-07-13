import React from "react";
import { useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";

export default function Todoapp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo1", status: "active" },
    { id: 2, text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    console.log(todo);
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <ul>
            <li key={todo.id}>
              {" "}
              <input type="checkbox" />
              {todo.text}
              
            </li>
          </ul>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
