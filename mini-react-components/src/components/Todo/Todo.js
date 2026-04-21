import React, { useState } from "react";
import "./styles.css";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { text: "Task", done: false }]);
  };

  const toggle = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = !newTodos[i].done;
    setTodos(newTodos);
  };

  return (
    <div className="box">
      <h3>Todo List</h3>
      <button onClick={addTodo}>Add Task</button>

      {todos.map((t, i) => (
        <p
          key={i}
          onClick={() => toggle(i)}
          style={{
            textDecoration: t.done ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {t.text}
        </p>
      ))}
    </div>
  );
}

export default Todo;