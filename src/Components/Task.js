import React, { useState } from "react";
import "../App.css";

const Task = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(task.id, newTaskText);
    setIsEditing(false);
  };

  return (
    <div className="task">
      <div className="task-content">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
          </div>
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="task-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
