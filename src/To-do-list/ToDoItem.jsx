import React, { useState } from "react";
import "./todo.css";

const ToDoItem = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSave = () => {
    onEdit(item.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{item.text}</span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(item.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
