import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./todo.css";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleEdit = (id, newText) => {
    const updated = tasks.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">To-Do List</h2>

      <div className="todo-input-row">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-btn">Add</button>
      </div>

      {tasks.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
