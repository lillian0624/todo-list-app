import React, { useState } from "react";
import "../App.css";

const Task = ({ task, onDelete, onUpdate, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleUpdate = () => {
    onUpdate(task.id, newTaskText);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleComplete = (taskId) => {
    setIsCompleted(true);

    onComplete(task.id); // Call the onComplete function with the task id
  };

  return (
    <div className={`task ${isCompleted ? "completed" : ""}`}>
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
        {!isCompleted && (
          <button onClick={handleEdit} disabled={isCompleted}>
            Edit
          </button>
        )}
        <button onClick={() => onDelete(task.id)} disabled={isCompleted}>
          Delete
        </button>
        {!isCompleted && (
          <button onClick={handleComplete} disabled={isCompleted}>
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
